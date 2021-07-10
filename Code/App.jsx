import { RecoilRoot } from 'recoil';
import List from './components/List';
import Loading from './components/Loading';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
    return (
        <RecoilRoot>
            <List />
            <Loading />
            <Info />
            <Footer />
        </RecoilRoot>
    )
}

export default App;