import Swal from 'sweetalert2'
import { ReactPaginate } from "react-paginate";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";

export const NFTCard = ({nft})=>{
    const [isHovering, setIsHovering] = useState(false);
    console.log("collection xxxxx", nft.image.pngUrl);
    
    function Description(e) {
      e.preventDefault();
   
      Swal.fire({
          title:nft.name,
          text: nft.description,
          imageUrl:(nft.image.pngUrl||nft.image.cachedUrl||nft.image.originalUrl)!=null?nft.image.pngUrl||nft.image.cachedUrl||nft.image.originalUrl:"https://img2.pic.in.th/pic/image8711ad857ae9127a.png",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
      })
      //console.log('You clicked submit.'+nft.title);
    }
    function tokenId(e) {
      e.preventDefault();
      Swal.fire({
          title:'tokenId',
          text: nft.tokenId,
          //imageUrl: nft.media[0].gateway,
          imageUrl:(nft.image.pngUrl||nft.image.cachedUrl||nft.image.originalUrl)!=null?nft.image.pngUrl||nft.image.cachedUrl||nft.image.originalUrl:"https://img2.pic.in.th/pic/image8711ad857ae9127a.png",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
      })
      //console.log('You clicked submit.'+nft.title);
    }
    function contract(e) {
      e.preventDefault();
     navigator.clipboard.writeText(nft.contract.address);
      Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'copy contract<br/>'+nft.contract.address,
  showConfirmButton: false,
  timer: 1500
})
      //console.log('You clicked submit.'+nft.title);
    }

    return(
        <div className="w-1/3 flex flex-col transition duration-500 hover:scale-110 border-2 border-black border-r-3">
            <div className="rounded-md">
                <img className="object-cover h-128 w-full rounded-t-md" src={(nft.image.pngUrl||nft.image.cachedUrl||nft.image.originalUrl)!=null?nft.image.pngUrl||nft.image.cachedUrl||nft.image.originalUrl:"https://img2.pic.in.th/pic/image8711ad857ae9127a.png"}/>
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
                <div className="mr-3 ">
                <h2 className="text-xl text-black">
                   <b> Name: </b>{nft.name}
                </h2>
                      <center>
                      <button className={"cursor-pointer shadow bg-green-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white hover:font-bold py-2 px-4 rounded"} onClick={Description}>Descrip</button>
                      <button className={"cursor-pointer shadow bg-yellow-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white hover:font-bold py-2 px-4 rounded"} onClick={tokenId}>Token</button>
                      <button className={"cursor-pointer shadow bg-orange-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white hover:font-bold py-2 px-4 rounded"}onClick={contract}>COPY</button>
                  
                      </center>
                </div>
            </div>
        </div>
    );
}