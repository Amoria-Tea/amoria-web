import React from 'react';

function DecorationBanner(props) {
    return (
<div>
<div
  class="block overflow-hidden group"
  href="/products/basic-tee"
>
  <img
    class="group-hover:scale-105 transition-transform duration-500 object-cover w-full h-[300px] sm:h-[700px]"
    src={"https://i.imgur.com/vTHCGGG.jpg"}
    alt="Basic Tea Product"
  />
</div>

</div>

    );
}

export default DecorationBanner;