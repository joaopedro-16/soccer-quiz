import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

import Home from './pages/Home';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const TabsLayout: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      {/* Note que adicionei "/app" antes das rotas para organizar */}
      <Route exact path="/app/tab1">
        <Tab1 />
      </Route>
      <Route exact path="/app/tab2">
        <Tab2 />
      </Route>
      <Route path="/app/tab3">
        <Tab3 />
      </Route>
      {/* Se entrar só em /app, redireciona para a tab1 */}
      <Route exact path="/app">
        <Redirect to="/app/tab1" />
      </Route>
    </IonRouterOutlet>

    <IonTabBar slot="bottom">
      <IonTabButton tab="tab1" href="/app/tab1">
        <IonIcon aria-hidden="true" icon={triangle} />
        <IonLabel>Tab 1</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/app/tab2">
        <IonIcon aria-hidden="true" icon={ellipse} />
        <IonLabel>Tab 2</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/app/tab3">
        <IonIcon aria-hidden="true" icon={square} />
        <IonLabel>Tab 3</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        {/* ROTA DA HOME (Sem abas) */}
        <Route exact path="/home">
          <Home />
        </Route>

        {/* ROTA PADRÃO: Redireciona para /home ao abrir o app */}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        {/* ROTA DO APP INTERNO (Com abas) */}
        {/* Tudo que começar com /app vai carregar o layout de abas */}
        <Route path="/app" component={TabsLayout} />

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;