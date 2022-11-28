import { useEffect } from 'react';

const Usetitle = title => {
   useEffect(()=>{
        document.title = title;
   },[title])
};

export default Usetitle;