const stories = document.querySelectorAll('#stories-container button');

stories.forEach(story =>{
    story.addEventListener('click', e =>{
        stories.forEach(s =>{s.classList.remove('active')});
        //esta linea esta erronea
        if(story.querySelector('.profile').classList.contains('empty')) return false;

        story.classList.add('active');
    })
})