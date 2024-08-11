// import React, { useState } from 'react'

// const App = () => {
//   const [img, setImg]= useState()

// const images= [
//   'https://images.search.yahoo.com/images/view;_ylt=AwrjfMcdcnRmEawHVyOJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzc0NWVhZTAyZWY4ZjgxMmM5ZjllZWIzNDc3YTYzODlmBGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dlion%2Bimg%26type%3DE211US714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D1&w=1920&h=1080&imgurl=www.hdwallpapers.in%2Fdownload%2Fcloseup_of_bold_lion_hd_lion-HD.jpg&rurl=https%3A%2F%2Fwww.hdwallpapers.in%2Fcloseup_of_bold_lion_hd_lion-wallpapers.html&size=1848.4KB&p=lion+img&oid=745eae02ef8f812c9f9eeb3477a6389f&fr2=piv-web&fr=mcafee&tt=Closeup+Of+Bold+Lion+HD+Lion+Wallpapers+%7C+HD+Wallpapers+%7C+ID+%2358444&b=0&ni=21&no=1&ts=&tab=organic&sigr=IQ1FoqL4msra&sigb=K3jZIgpF2Oo8&sigi=aTaSnrVWpKKM&sigt=0l6ykAw.iWtP&.crumb=O7igNF/eAjE&fr=mcafee&fr2=piv-web&type=E211US714G0',
//   'https://tse4.mm.bing.net/th?id=OIP.bX-vdP13_4vCAkqSUsbfKAHaFw&pid=Api&P=0&h=220',
//   'https://tse3.mm.bing.net/th?id=OIP.QxhM4qFY1eBT1fMlb29J3AHaE7&pid=Api&P=0&h=220'
// ]
// let count=0;

// if(count<=images.length){
//  setInterval(()=>{
//     // setImg(images[count])
//     if(count==images.length){
//       count=0;
//     }else{
//       count++
//     }

//   }, 1000)
// }





//   return (
//     <div>
//       <h1>hello</h1>
//       {/* {
//         images.map((elem)=>(
//           <img src="" alt="" />
//         ))
//       } */}
//       <img src={img} alt="" />
//       <button>start</button>
//     </div>
//   )
// }

// export default App

// ------------------------

// import React, { useState } from 'react';
// import image1 from './assets/lion/image1.jpg';
// import image2 from './assets/lion/image2.jpg';
// import image3 from './assets/lion/image3.jpeg';
// import image4 from './assets/lion/image4.jpeg';

// import topRight1 from './assets/topRight/topRight1.jpeg';
// import topRight2 from './assets/topRight/topRight2.png';
// import topRight3 from './assets/topRight/topRight3.png';
// import topRight4 from './assets/topRight/topRight4.jpeg';

// const ImageSlider = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState();
//   const [topLeftflag, setTopLeftFlag]= useState(false)
//   const [topRightflag, setTopRightFlag]= useState(false)
//   const [imageUrls, setImageUrls]= useState([ image1,
//     image2,
//     image3, 
//     image4]);
//   const topLeftImgs = [
//     image1,
//     image2,
//     image3, 
//     image4
//   ];

//   const topRightImgs=[
//     topRight1,
//     topRight2,
//     topRight3,
//     topRight4
//   ]

//   const handleLogic=()=>{
//     let index = 0;
//     if(topLeftflag || topRightflag){
//       index = imageUrls.length - 1;
//       const interval = setInterval(() => {
//         setCurrentImageIndex(index);
//         index--;
//         if (index < 0) {
//           clearInterval(interval);
//         }
//       }, 500);
//     }else{
//       const interval = setInterval(() => {
//         setCurrentImageIndex(index);
//         index++;
//         if (index >= imageUrls.length) {
//           clearInterval(interval);
//         }
//       }, 500);
//     }
//   }
  

//   const handleTopLeft = () => {
//     setTopLeftFlag(!topLeftflag);
//     if(!topLeftflag){
//       setTimeout(()=>{
//         setImageUrls(topLeftImgs)
//       }, 2000)
//     }else{
//       setImageUrls(topLeftImgs)
//     }
//     handleLogic()
    
//   };

//   // -----------top-right---------------
//   const handleTopRight=()=>{
//     setTopRightFlag(!topRightflag)
//     if(!topRightflag){
//       setTimeout(()=>{
//         setImageUrls(topRightImgs)
//       }, 2000)
//     }else{
//       setImageUrls(topRightImgs)
//     }
//     handleLogic()
    
    
    
//   }

//   return (
//     <div>
//       <button onClick={handleTopLeft}>Top-Left</button>
//       <button onClick={handleTopRight}>Top-Right</button>
//       <div style={{width: '40vw', height: '45vh', backgroundColor: 'black', overflow: 'hidden'}}>
//         {currentImageIndex <= imageUrls.length && (
//           <img src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex}`} style={{width: '100%'}}/>
//         )}
        
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;


// --------------------------------

import React, { useState, useEffect, useRef } from 'react';
import image1 from './assets/lion/image1.jpg';
import image2 from './assets/lion/image2.jpg';
import image3 from './assets/lion/image3.jpeg';
import image4 from './assets/lion/image4.jpeg';

import topRight1 from './assets/topRight/topRight1.jpeg';
import topRight2 from './assets/topRight/topRight2.png';
import topRight3 from './assets/topRight/topRight3.png';
import topRight4 from './assets/topRight/topRight4.jpeg';

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);
  const [reverse, setReverse] = useState(false);
  const intervalRef = useRef(null);

  const topLeftImgs = [
    image1,
    image2,
    image3, 
    image4
  ];

  const topRightImgs = [
    topRight1,
    topRight2,
    topRight3,
    topRight4
  ];

  const startSlideshow = (images, reverseOrder) => {
    clearInterval(intervalRef.current);
    let index = reverseOrder ? images.length - 1 : 0;
    setImageUrls(images);
    setCurrentImageIndex(index);
    setReverse(reverseOrder);
    intervalRef.current = setInterval(() => {
      if (reverseOrder) {
        index--;
        if (index < 0) {
          clearInterval(intervalRef.current);
        } else {
          setCurrentImageIndex(index);
        }
      } else {
        index++;
        if (index >= images.length) {
          clearInterval(intervalRef.current);
        } else {
          setCurrentImageIndex(index);
        }
      }
    }, 500);
  };

  const handleTopLeft = () => {
    if (reverse) {
      startSlideshow(topLeftImgs, false);
    } else {
      startSlideshow(topLeftImgs, false);
    }
  };

  const handleDoubleTopLeft = () => {
    startSlideshow(topLeftImgs, true);
  };

  const handleTopRight = () => {
    if (!reverse) {
      startSlideshow(topLeftImgs, true);
      setTimeout(() => {
        startSlideshow(topRightImgs, false);
      }, 2000);
    } else {
      startSlideshow(topRightImgs, false);
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <button 
        onClick={handleTopLeft} 
        onDoubleClick={handleDoubleTopLeft}
      >
        Top-Left
      </button>
      <button onClick={handleTopRight}>Top-Right</button>
      <div style={{ width: '40vw', height: '45vh', backgroundColor: 'black', overflow: 'hidden' }}>
        {imageUrls.length > 0 && (
          <img src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex}`} style={{ width: '100%' }} />
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
