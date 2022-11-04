const max = document.querySelector('.skills-container').dataset.maxpoints
const observerHandler=function(entries,observer){
entries.forEach(entry => {
    if (entry.isIntersecting) {
        
        setTimeout(() => entry.target.style.width = `${(100/max*entry.target.dataset.points)-0.5}%`, 250)
    }
    
});
}
const observer=new IntersectionObserver(observerHandler,{root:document})
document.querySelectorAll('.progress-bar').forEach((elem)=> observer.observe(elem))