import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnersAngularModule } from 'spinners-angular';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MentesagilesComponent } from './components/mentesagiles/mentesagiles.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { PagaenlineaComponent } from './components/pagaenlinea/pagaenlinea.component';
import { AdmisionesComponent } from './components/admisiones/admisiones.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { SocialmediaComponent } from './components/shared/socialmedia/socialmedia.component';
import { CardtitletopComponent } from './components/shared/cardtitletop/cardtitletop.component';
import { CardimgleftComponent } from './components/shared/cardimgleft/cardimgleft.component';
import { CardstandarComponent } from './components/shared/cardstandar/cardstandar.component';
import { JumbocoloroneComponent } from './components/shared/jumbocolorone/jumbocolorone.component';
import { FormularioContactoComponent } from './components/shared/formulario-contacto/formulario-contacto.component';
import { JumbocardComponent } from './components/shared/jumbocard/jumbocard.component';
import { JumbocolorwhiteComponent } from './components/shared/jumbocolorwhite/jumbocolorwhite.component';
import { JumbodobletitulowhiteComponent } from './components/shared/jumbodobletitulowhite/jumbodobletitulowhite.component';
import { CardserviciosComponent } from './components/shared/cardservicios/cardservicios.component';
import { JumbocolorredComponent } from './components/shared/jumbocolorred/jumbocolorred.component';
import { CardbotonaccionComponent } from './components/shared/cardbotonaccion/cardbotonaccion.component';
import { JumbopagosComponent } from './components/shared/jumbopagos/jumbopagos.component';
import { MapComponent } from './components/shared/map/map.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AdministradorComponent } from './components/administrador/administrador.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AutoplayyoutubeComponent } from './components/shared/autoplayyoutube/autoplayyoutube.component';
import { IconosContactoComponent } from './components/shared/iconos-contacto/iconos-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MentesagilesComponent,
    ServiciosComponent,
    InstalacionesComponent,
    PagaenlineaComponent,
    AdmisionesComponent,
    CarouselComponent,
    SocialmediaComponent,
    CardtitletopComponent,
    CardimgleftComponent,
    CardstandarComponent,
    JumbocoloroneComponent,
    FormularioContactoComponent,
    JumbocardComponent,
    JumbocolorwhiteComponent,
    JumbodobletitulowhiteComponent,
    CardserviciosComponent,
    JumbocolorredComponent,
    CardbotonaccionComponent,
    JumbopagosComponent,
    MapComponent,
    FooterComponent,
    AdministradorComponent,
    ProtegidaComponent,
    AutoplayyoutubeComponent,
    IconosContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: '',
      clientId: ''
    }),
    SpinnersAngularModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
