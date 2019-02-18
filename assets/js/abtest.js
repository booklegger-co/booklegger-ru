function ab_init(name, classes){

	var ab_class = $.cookie("ab_"+name+"_class")
	// console.log("ab_class: "+ab_class)

	if(ab_class == null){
		var random = Math.floor(Math.random()*classes.length);
		// console.log("random: "+random)
		ab_class = classes[random]
		// console.log("ab_class: "+ab_class)
		$.cookie("ab_"+name+"_class", ab_class)
	}

	$( ".abtest" ).addClass( ab_class );

	return ab_class
}