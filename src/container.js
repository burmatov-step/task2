export function change(e){
	const all = e.target.parentElement.children;
	for(let i = 0; i< all.length; i++){
		
        if(all[i] !== e.target && !all[i].classList.contains('act')){
            all[i].classList.add('act')
        }
	}
	
	e.target.classList.toggle('act')
}