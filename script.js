

const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".project-gallery").children;

for(let i=0; i<filterButtons.length; i++){
	filterButtons[i].addEventListener("click",function(){
		for(let j=0 ; j<filterButtons.length ;j++){
			filterButtons[j].classList.remove("active")
		}
		this.classList.add("active");
		const target =this.getAttribute("data-target")
		for(let k=0 ; k<items.length;k++)
		{
			items[k].style.display="none";
			if(target==items[k].getAttribute("data-id"))
			{
				items[k].style.display="block";
			}
			if(target=="all")
			{
				items[k].style.display="block";
			}
		}
		
	})
}


const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img")

	lightbox.addEventListener("click",function()
	{
		if(event.target!=lightboxImg)
		{
			lightbox.classList.remove("show");
			lightbox.classList.add("hide");
		}
	})

	closeLightbox.addEventListener("click",function()
	{
		lightbox.classList.remove("show");
		lightbox.classList.add("hide");
	})

const gallery =document.querySelector(".project-gallery");
const galleryItem = document.querySelectorAll(".item");

galleryItem.forEach(function(element)
{
	element.querySelector(".fa-plus").addEventListener("click",function()
	{
		lightbox.classList.remove("hide");
		lightbox.classList.add("show");
		lightboxImg.src = element.querySelector("img").getAttribute("src")
	})
})


//header

window.onscroll = function()
{
	const docScrollTop = document.documentElement.scrollTop;

	// document.body.scrollTop = 0;
 //  document.documentElement.scrollTop = 0;

	if(window.innerWidth > 991)
	{
		if(docScrollTop>100)
		{
			document.querySelector("header").classList.add("fixed")
		}
		else
		{
			document.querySelector("header").classList.remove("fixed")
		}
	}
}



// navbar

const navbar = document.querySelector(".navbar");
	a=navbar.querySelectorAll("a");

	a.forEach(function(element)
	{
		element.addEventListener("click",function()
		{
			for(let i = 0 ; i<a.length ; i++)
			{
				a[i].classList.remove("active");
			}
			this.classList.add("active")
			document.querySelector(".navbar").classList.toggle("show");
		})
	})


	// hamburger

	const hamBurger = document.querySelector(".ham-burger");

	hamBurger.addEventListener("click",function()
	{
		document.querySelector(".navbar").classList.toggle("show");
	})

	const upTop = document.querySelector(".up");

	upTop.addEventListener("click",function()
	{
		document.body.scrollTop = 0;
  		document.documentElement.scrollTop = 0;
	})


function myFunction(x) {
  x.classList.toggle("fa-times");
}

var modal = document.getElementById('modal-wrapper');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let body = document.body;
let toggleBtn = document.querySelector(".toggle-btn");
let currentTheme = localStorage.getItem("currentTheme");

if(currentTheme)
{
	body.classList.add("dark-theme");
}
// toggleBtn.addEventListener("click",function()
// {
// 	body.classList.toggle("dark-theme");

// 	if(body.classList.contains("dark-theme"))
// 	{
// 		localStorage.setItem("currentTheme","themeActive");
// 	}
// 	else
// 	{
// 		localStorage.removeItem("currentTheme");

// 	}
// })

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark-theme');
	if(body.classList.contains("dark-theme"))
	{
		localStorage.setItem("currentTheme","themeActive");
	}
	else
	{
		localStorage.removeItem("currentTheme");

	}
});

$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").delay(3000).fadeOut("slow");;
	});
