document.addEventListener("DOMContentLoaded", function(event) {

  const imgInputs = document.querySelectorAll(".img-input");
  
  imgInputs.forEach(function(imgInput, index){
  
	 const imgPreview = imgInput.querySelector(".img-preview");
	 const changeButton = imgInput.querySelector(".img-input-action-change");
	 const removeButton = imgInput.querySelector(".img-input-action-remove");
	 const cancelButton = imgInput.querySelector(".img-input-action-cancel");
	 const imgInputFile = imgInput.querySelector(".img-input-file");
	 const imgInputRemove = imgInput.querySelector(".img-input-remove");
	 
	 const hasImage = !imgPreview.classList.contains("img-none");
	 const placeholder = imgPreview.getAttribute("data-placeholder");
	 const originalImage = hasImage ? imgPreview.src : null;

	 if(hasImage){
		removeButton.style.display = "inline-flex";            
	 }
	 else{
		imgPreview.src = placeholder;
		removeButton.style.display = "none";            
	 }

	 imgPreview.addEventListener('load', function(){
	 	imgPreview.style.opacity = 1;
	 })

	 changeButton.addEventListener("click", function(event){
		imgInputFile.click();
	 });

	 imgInputFile.addEventListener("change", function(event){
		const file = imgInputFile.files[0];
		const url = URL.createObjectURL(file);
		imgPreview.src = url;
		URL.revokeObjectURL(file);
		imgInputRemove.value = false;
		cancelButton.style.display = "inline-flex";
		removeButton.style.display = "none";
	 });

	 cancelButton.addEventListener("click", function(event){
		if(imgInputRemove.value == "true"){
		   imgInputRemove.value = false;
		   imgPreview.src = originalImage;
		   removeButton.style.display = "inline-flex";
		}
		else{
		   imgInputFile.value = null;
		   if(hasImage){
			  imgPreview.src = originalImage;
			  removeButton.style.display = "inline-flex";
		   }
		   else{
			  imgPreview.src = placeholder;
		   }  
		}
		cancelButton.style.display = "none";
	 });

	 removeButton.addEventListener("click", function(event){
		imgInputRemove.value = true;
		imgPreview.src = placeholder;
		cancelButton.style.display = "inline-flex";
		removeButton.style.display = "none";
	 });
  })
});