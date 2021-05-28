import { RecoilRoot } from 'recoil';
import List from './components/List';
import Loading from './components/Loading';
import Footer from './components/Footer';

function App() {
    return (
        <RecoilRoot>
            <List />
            <Loading />
            <Footer />
        </RecoilRoot>
    )
}

export default App;