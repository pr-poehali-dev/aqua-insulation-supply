import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      id: 1,
      title: 'ЖК "Московский"',
      description: 'Утепление фасадов PIR-плитами, площадь 2500 м²',
      location: 'Московский район, СПб',
      image: 'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/72968afe-634a-4a7a-8d4c-fcf66bb4a2cc.jpg',
      year: '2024',
    },
    {
      id: 2,
      title: 'Складской комплекс',
      description: 'Теплоизоляция кровли минеральнойватой ROCKWOOL',
      location: 'Шушары, ЛО',
      image: 'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/1df5fc1e-9edc-483a-a644-44306d002a2b.jpg',
      year: '2024',
    },
    {
      id: 3,
      title: 'Бизнес-центр "Сенатор"',
      description: 'Комплексное утепление фасадов и кровли',
      location: 'Центральный район, СПб',
      image: 'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/2bb1e2fb-03df-4bee-8e2a-7a7733d7df4d.jpg',
      year: '2023',
    },
  ];

  return (
    <>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.02] bg-cover bg-center"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/1dddd07a-5a5d-4c5d-bc23-b47853006fb8.jpg)' }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши объекты</h2>
            <p className="text-muted-foreground">
              Реализованные проекты с использованием наших материалов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden cursor-pointer group hover:shadow-xl transition-shadow"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-lg"
                />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Описание</p>
                    <p className="font-medium">{selectedProject.description}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Местоположение</p>
                    <p className="font-medium">{selectedProject.location}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Год реализации</p>
                    <p className="font-medium">{selectedProject.year}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}