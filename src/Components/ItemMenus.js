import React from 'react';

function ItemMenus(props) {

    return (
<div>
<a
  class="block overflow-hidden group"
  href="/products/basic-tee"
>
  <img
    class="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[350px] sm:h-[450px]"
    src={"https://i.imgur.com/vTHCGGG.jpg"}
    alt="Basic Tea Product"
  />

  <div class="relative pt-4 bg-white">

  </div>
</a>

</div>

    );
}

export default ItemMenus;