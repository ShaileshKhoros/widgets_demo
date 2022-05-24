import React, { useEffect,useState } from 'react';
import './App.css';
import axios from 'axios';
import Files from './Demo';
import Pagination from './Paginated';
import Slider from './Slider';
import Carousel, { CarouselItem } from "./Carousal";
import MainPage from './Components/MainPage';
import Backdrop from './Components/Backdrop';
import SlideDrawer from './Components/SlideDrawer';
import CustomInput from './CustomInput';



interface Props {
}

const App: React.FC<Props> = () => {
  const ImageData = [
    {
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1",
        title:"Indigo-Air"
    },
    {
      image:
        "https://images.unsplash.com/photo-1595279211419-88239fbff506?ixlib=rb-1.2.1",
        title:"Jet-Air"

    },
    {
      image:
        "https://images.unsplash.com/photo-1630311395569-198c3e65b2fe?ixlib=rb-1.2.1",
        title:"Qatar-Airways"

    },
    {
      image:
        "https://images.unsplash.com/photo-1627501689994-95da59d8e22c?ixlib=rb-1.2.1",
        title:"Etihad-Airways"

    },
  ];
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState<number>(10);
  const [drawerOpen,setDrawerOpen]=useState<boolean>(false)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);


 // Get current posts
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
 const paginate = (pageNumber:number) => setCurrentPage(pageNumber);
 const drawerToggleClickHandler = () => {
   setDrawerOpen(!drawerOpen)
 
}
const backdropClickHandler = () => {
  setDrawerOpen(false)
}

let backdrop;
if(drawerOpen){
  backdrop = <Backdrop close={backdropClickHandler}/>;
 }

  return (
    <div className="App">
 <div > 
      {/* <Files  posts={currentPosts} loading={loading}/>
     <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}
    
      <Slider slides={ImageData}  /> 
       </div> 
      {/* style={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",marginTop:"25%"}}> */}
      {/* <div >
      <Carousel width={10}>
        
        {ImageData.map((data:{image:string},index:number)=>

        <CarouselItem key={index} width={0}>         
          <div>
            <div><img src={data.image} alt="" width={350} height={220}/></div>
            <div className='button-div' >
              <div className='card-title'> Title</div>
              <div className='info-title' > 6D-588 ( 8:30 AM - 2:10 PM)<br/><br/>NY - DEL Price USD: 903 $</div>
                <button>Book-Flight</button>
            </div>
          </div>
        </CarouselItem>
        )}
       
      </Carousel>
      </div> */}

      <div>
 
       < SlideDrawer show={drawerOpen}>
         <div className='stripe-container'></div>
            <CustomInput/>
            <CustomInput placeholder='Type....'/>

       </SlideDrawer>
       { backdrop }
       {/* <MainPage toggle={drawerToggleClickHandler}/> */}

    </div>
    </div>
  );
}

export default App;
