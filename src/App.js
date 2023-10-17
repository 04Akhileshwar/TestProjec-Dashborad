import {Space} from 'antd';
import './App.css';
import AppFooter from './components/AppFooter';
import PageContent from './components/PageContent';
import SideManu from './components/SideMenu';

function App() {
  return (
    <div className="App">
     <Space className='SideManuAndPageContent'>
       <SideManu ></SideManu>
        <PageContent></PageContent> 
     </Space>
     <AppFooter/>
    </div>
  );
}

export default App;
