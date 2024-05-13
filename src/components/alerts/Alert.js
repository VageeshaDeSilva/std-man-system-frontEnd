import React from 'react'
import Swal from 'sweetalert2'

export const basicAlert=(icon,title,text)=> {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
    });
}

export const chooseAlert=(title,confirmButtonText,denyButtonText,...functions)=>{
    Swal.fire({
        icon: 'warning',
        title: title,
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: confirmButtonText,
        denyButtonText: denyButtonText
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          functions.forEach((func) => func());
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
}
