document.addEventListener('DOMContentLoaded',function(){
    
        // creating divs
        const modal = document.createElement('div');
        const hero_image = document.createElement('div');
        const hero_text = document.createElement('h1');
        const product_details_heading = document.createElement('h3');
        const image_input = document.createElement('input');
        image_input.setAttribute('type','file');
        image_input.setAttribute('accept', 'image/*');
        const input_divs = document.createElement('div');
        const display_images = document.createElement('div');
        const form_div = document.createElement('div');
        const form = document.createElement('form');
        const name_label = document.createElement('label');
        const name_input = document.createElement('input');
        name_input.setAttribute('type','text');
        const location_label = document.createElement('label');
        const location_input = document.createElement('select');
        const rent_sell = document.createElement('label');
        const rent = document.createElement('input');
        const sell = document.createElement('input');
        const rent_label = document.createElement('label');
        const sell_label = document.createElement('label');
        const rent_div = document.createElement('div');
        const sell_div = document.createElement('div');
        const price_div = document.createElement('div');
        const price_input = document.createElement('input');
        const price_label = document.createElement('label');
        const add = document.createElement('div');
        const add_btn = document.createElement('button');
        const cancel_btn = document.createElement('button');
        const radio_div = document.createElement('div');
        


     




        //setting attributes input tags
        rent.setAttribute('type','radio');
        sell.setAttribute('type','radio');
        name_input.setAttribute('placeholder','Product Name');
        rent.setAttribute('value','Rent');
        sell.setAttribute('value','Sell');
        price_input.setAttribute('type','number');
        add_btn.setAttribute('type','submit');
        form.setAttribute('action','ppost.php');
        form.setAttribute('method','POST');
         
          
   
           //assigning names
           name_input.setAttribute('name','productname');
           location_input.setAttribute('name','Location');
           price_input.setAttribute('name','price');
          // image_input.setAttribute('name','my_image');

           add_btn.setAttribute('name','submit');
        
       




        // setting id's to divs which was created using JavaScript
        cancel_btn.id = 'cancel_btn';
        add_btn.id = 'add_btn';
        add.id = 'add';
        price_input.id = 'price_input';
        price_div.id = 'price_div';
        rent_div.id = 'rent_div';
        sell_div.id = 'sell_div';
        radio_div.id = 'radio__div';
        rent.name = 'rd';
        sell.name = 'rd';
        location_input.id = 'location_input';
        name_input.id = 'name_input_id';
        form_div.id = 'form_divs';
        form.id = 'form';
        display_images.id = 'display_image';
        input_divs.id = 'input_div';
        image_input.id = 'image_input';
        product_details_heading.id = 'product__details_heading';
        hero_text.id = 'hero__text';
        modal.id = 'modal_id';
        hero_image.id = 'hero__img';


        // setting values to created elements
        hero_text.innerText = 'sell or rent your products with us';
        product_details_heading.innerText = 'Product Details';
        input_divs.innerHTML = 'Upload a Image';
        name_label.innerText = ' Product Name';
        location_label.innerText = 'Location';
        rent_sell.innerText = 'Rent or Sell';
        location_input.innerHTML = '<option disabled value="" selected hidden>Select a Location</option>'+
        '<option value="Kandy">Kandy</option>' + '<option value="Colombo">Anuradhapura</option>'+
        '<option value="Polonnaruwa">Polonnaruwa</option>'+
         '<option value="Hambantota">Hambantota</option>';
         add_btn.innerText = 'Upload';
         cancel_btn.innerText = 'Cancel';
         price_label.innerText = 'Price';
        rent_label.innerText = 'Rent';
        sell_label.innerText = 'Sell';
 
       
        


        // appending those divs
        document.body.appendChild(modal);
        modal.append(hero_image);
        hero_image.append(hero_text);
        modal.append(product_details_heading);
        modal.append(image_input);
        modal.append(input_divs);
        input_divs.append(image_input);
        modal.append(display_images);
        modal.append(form_div);
        form_div.append(form);
        form.append(name_label);
        form.append(name_input);
        form.append(location_label);
        form.append(location_input);
        form.append(rent_sell);
        form.append(rent);
        form.append(sell);
        form.append(radio_div);


        radio_div.append(rent_div);
        rent_div.append(rent);
        rent_div.append(rent_label);


        radio_div.append(sell_div);
        sell_div.append(sell);
        sell_div.append(sell_label);
        
        form.append(price_div);
        price_div.append(price_label);
        price_div.append(price_input);
        form.append(add);
        add.append(add_btn);
        add.append(cancel_btn);

        // get the add post button by querySelector
        const add_post = document.querySelector('.post_btn');
        const image_inputs = document.querySelector('#image_input');
        var upload_image = "";

        image_inputs.addEventListener('change',function(){
            const reader = new FileReader();

            reader.addEventListener('load',()=>{
                upload_image = reader.result;
                document.querySelector('#display_image').style.backgroundImage = `url(${upload_image})`;
            });

            reader.readAsDataURL(this.files[0]);
        });


        // click event for add post button
        add_post.addEventListener('click',()=>{
           modal.classList.add('active');
           
        });

        // click event for cancel post
       cancel_btn.addEventListener('click',()=>{

            modal.classList.remove('active');
            
        });

});