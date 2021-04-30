import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/connected/Navigation/index.js';
import Chemistry from './Pages/Chemistry/';
import ChemicalStructures from './Pages/ChemicalStructures/';
import createMockAPIServer from './mock/';
import PageWrapper from './components/presentational/PageWrapper';
import ContentWrapper from './components/presentational/ContentWrapper';

createMockAPIServer();

function App() {
    return (
        <Router>
            <PageWrapper>
                <Navigation />
                <ContentWrapper>
                    <Switch>
                        <Route path='/chemical-structures'>
                            <ChemicalStructures />
                        </Route>
                        <Route path='/chemistry'>
                            <Chemistry />
                        </Route>
                        <Route path='/'>
                            <ChemicalStructures />
                        </Route>
                    </Switch>
                </ContentWrapper>
            </PageWrapper>
        </Router>
    );
}

export default App;
