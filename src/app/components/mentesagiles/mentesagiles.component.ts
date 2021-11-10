import { Component, OnInit } from '@angular/core';
import { CardImgLeftInter } from '../home/home.component';

@Component({
  selector: 'app-mentesagiles',
  templateUrl: './mentesagiles.component.html',
  styleUrls: ['./mentesagiles.component.scss']
})
export class MentesagilesComponent implements OnInit {

  dataCardBienvenidos:CardImgLeftInter ={
    title: 'Somos Mentes Ágiles',
    content: 'Un jardín fundamentado en los principios pedagógicos que le apuntan a satisfacer en los niños y niñas sus deseos de explorar, conocer e indagar por los sucesos del entorno, generando varias posibilidades de fascinación, creatividad, juego y comunicación. Promovemos la formación en valores, la expresión artística y el inglés intensivo, propiciando el desarrollo de sujetos sociales participativos, inteligentes, creativos, respetuosos y muy felices.de',
    img:'assets/img/card1.jpg',
    textstrong:''
  };

  dataJumbo:any = {
    title: 'Nuestro enfoque',
    content: 'Reconocemos la importancia de los primeros años de la vida de los niños y niñas son claves para un desarrollo posterior, ya que son básicos en la estructuración neurofisiológica y de su personalidad individual y social. Es por ello que a partir de investigaciones nuestro proyecto basa el desarrollo en tres inteligencias cada una de ellas independientes entre sí y a su vez modificables a lo largo de la vida ( Feuerstein, 1994 y De Zubiría, 2004)',
    cards: [
      {
        iconcard:'bi bi-heart-fill',
        titlecard:'Inteligencia Cognitiva',
        contentscard:['Conexión neuronal para toda la vida, ligada al conocimiento. Buscamos potenciar la modificalidad y plasticidad del cerebro humano, favoreciendo la sinapsis y la velocidad para aprender.']
      },
      {
        iconcard:'bi bi-eye-fill',
        titlecard:'Inteligencia Emocional',
        contentscard:['El desarrollo socio afectivo durante los primeros años es tan o más importante que el desarrollo cognitivo, por eso a partir de la NATURALEZA Y ARTE promovemos la sensibilidad, la expresión del afecto, de los sentimientos, favoreciendo así la formación de un niñ@ con principios éticos y estable emocionalmente.']
      },
      {
        iconcard:'bi bi-star-fill',
        titlecard:'Inteligencia Práctica',
        contentscard:
          [
            'Resolución de problemas de la vida.','Arte y deporte.','Ligado al desarrollo motor y la práctica.', 'Habilidades de invención, descubrimiento e innovación.',
          ]
      },
    ]
  };

  datajumbo1:any = {
    title: 'Nuestra Metodología EXPERIENCIAL',
    content: [
      'Lo nuestro es un proyecto pedagógico innovador, nos interesamos en desarrollar una manera diferente de pensar, organizar y trabajar en educación inicial, de esta manera contribuimos en la transformación de la educación en primera infancia en Colombia. Pensamos en el desarrollo integral de los profesionales del 2040.',
      'Nuestro equipo de trabajo y espacios pedagógicos promueven el desarrollo integral, partimos de los intereses de los niños y niñas, la motivación es la principal estrategia y la experiencia lleva a los niños y niñas a pensar científicamente, a desarrollar su pensamiento, su autonomía, su sensibilidad y su interés por el conocimiento.',
      'Los niños y niñas son sujetos activos en sus procesos de desarrollo y en la construcción de su propio conocimiento, en el JARDIN INFANTIL MENTES ÁGILES nos encargamos de proporcionar ambientes enriquecidos, donde los docentes, las familias y la sociedad somos un puente conector entre ellos y el aprendizaje.'

    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
