import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  datajumbo1:any = {
    title: 'MODALIDAD VIRTUAL Y PRESENCIAL',
    content: [
      'Contamos con los servicios necesarios para brindar la mejor formación para nuestros niños y niñas en nuestras tres modalidades, virtual, presencial y alternancia con MENOR AFORO.'
    ]
  };

  datajumbo2:any = {
    title: 'Servicios Adicionales',
    content: [
      'Servicio prestado a nuestros niños y niñas, a exalumn@s o familiares que cursan hasta quinto grado.'
    ]
  };

  datajumbo3:any ={
    title: 'Galeria',
    titleSub: ''
  };

  dataCardUno:any = [
    {
      title: 'Rutas',
      img:'assets/img/noimage.png',
      content:['Servicio de Rutas con todos los protocolos de seguridad y requerimientos técnicos necesarios.']
    },
    {
      title: 'Alimentación',
      img:'assets/img/noimage.png',
      content:['Menú especial para niños, creado por nutricionistas.']
    }
  ];

  dataCardDos:any = [
    {
      title: 'Asesoría de tareas',
      img:'assets/img/noimage.png',
      content:['Es un proceso personalizado de apoyo y acompañamiento permanente en el desarrollo de las tareas escolares de nuestros niños y niñas. Junto con el fortalecimiento de los procesos académicos en el que requiera de un refuerzo. Desarrollamos un plan de estudio de acuerdo a sus necesidades, con una metodología adecuada para su edad, que le permita obtener logros rápidamente.']
    },
    {
      title: 'Terapias',
      img:'assets/img/noimage.png',
      content:['Ofrecemos terapias de fonoaudiología, psicología, terapia ocupacional y neuropsicología para potencializar y mejorar el desarrollo del aprendizaje, la atención y la memoria en nuestros niños y niñas.']
    },
    {
      title: 'Fiestas infantiles',
      img:'assets/img/noimage.png',
      content:['Contamos con los espacios adecuados para que puedas hacer una excelente fiesta de cumpleaños para los niños y niñas los fines de semana. Incluye salón, parque de juegos, gimnasio, cancha de futbol 5, cocina y sonido. Con nuestro Chef Richard, tu idea hecha pastel.','Https://www.facebook.com/DESSARTSPOSTRES/']
    },
    {
      title: 'Fiestas infantiles',
      img:'assets/img/noimage.png',
      content:['No es para nada fácil encontrar a alguien de CONFIANZA con quien dejar a nuestros tesoros más grandes mientras cumplimos con algún compromiso en horas de la noche.','En el Jardín dispondremos algunos fines de semana con una serie de actividades que les harán vivir una noche diferente y divertida a los niños y niñas; mientras los padres podrán tener un espacio para disfrutar de una noche de cine, de una cena romántica, encontrarse con viejos amigos o sencillamente disfrutar un rato libre.']
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
