//(function($) { 

	var topics_reflexion = [
	'La humanidad es una bendición o maldición para el planeta',
	'El dar Inteligencia Artificial (IA) a las computadoras ¿les debe dar derechos humanos?',
	'¿Qué es lo que los millenials no tienen y que otras generaciones sí',
	'¿Cuál es el objetivo de vivir?',
	'¿Tus calficaciones de la escuela determinaron cómo te va económicante en la vida adulta?',
	'¿Crees que hay sobre población en el planeta?'
	];

	var topics_actualidad = [
	'La vida, ¿es mejor o peor con las redes sociales?',
	'¿Cuál es el peor de los males que nos aqueja en la actualidad?',
	'Si tuvieras el poder de solucionar un problema de la humanidad, ¿cuál sería y porqué?',
	'La democracia, ¿es el mejor sistema de gobierno?'
	];

	var topics_relaciones=[
	'¿Qué es lo que más extrañas de tu ex?',
	'¿Alguna ves has sido infiel?',
	'¿A qué edad fue tu primer beso?',
	'¿Podrías ser poliamoroso (tener múltiples relaciones amorosas con diferentes personas)?',
	'¿Qué es lo que te parece atractivo en una mujer / hombre?',
	'¿Por qué crees que haya más divorcios ahora que hace 50 años?',
	'¿Has pensado algún nombre para tus hijos?'

	];

	var topics_socializar=[
	'¿Qué te hubiera gustado estudiar, si no hubieras estudiado tu profesión/oficio?',
	'¿Alguna vez te ha detindo la policía?, ¿Cómo fue?',
	'¿Qué es lo más loco que has hecho en tu vida?',
	'¿Cuál es tu mayor sueño?',
	'¿Cuál es tu mayor miedo?',
	];

	var todos = [
	'La humanidad es una bendición o maldición para el planeta',
	'El dar Inteligencia Artificial (IA) a las computadoras ¿les debe dar derechos humanos?',
	'¿Qué es lo que los millenials no tienen y que otras generaciones sí?',
	'¿Cuál es el objetivo de vivir?',
	'¿Que tán importante es la escuela para ser exitoso?',
	'¿Crees que hay sobrepoblación en el planeta?',
	'La vida, ¿es mejor o peor con las redes sociales?',
	'¿Cuál es el peor de los males que nos aqueja en la actualidad?',
	'Si tuvieras el poder de solucionar un problema de la humanidad, ¿cuál sería y porqué?',
	'La democracia, ¿de verdad es mejor que una dictadura?',
	'¿Qué es lo que más extrañas de tu ex?',
	'¿Con qué actor te casarías, a cual matarías y con cual te acostarías?',
	'¿A qué edad fue tu primer beso?',
	'¿Podrías ser poliamoroso (tener múltiples relaciones amorosas con diferentes personas)?',
	'¿Qué es lo que te parece atractivo en una mujer / hombre?',
	'¿Por qué crees que haya más divorcios ahora que hace 50 años?',
	'¿Has pensado algún nombre para tus hijos?',
	'¿Qué te hubiera gustado estudiar, si no hubieras estudiado tu profesión/oficio?',
	'¿Alguna vez te ha detindo la policía?',
	'¿Qué es lo más loco que has hecho en tu vida?',
	'¿Cuál es tu mayor sueño?',
	'¿Cuál es tu mayor miedo?',
	'Si tuvieras un super poder, ¿cuál sería y porqué?',
	'¿Cuál es el lugar al que tienes que ir antes de morir?',
	'¿Cuál es tu canción favorita y por qué?', 
	'Quién es tu autor de libros favorito y porqué?',
	'Menciona alguien que admires mucho y la razón por lo que lo admiras',
	'¿Quiénes son las 3 personas más importantes en tu vida?',
	'Si te dijeran que este es el último día de tu vida, ¿qué harías?',
	'¿Cuál es la que consideras tu mejor foto? Enséñala y guarda el celular otra vez, por fa.',
	'Menciona la historia más graciosa que te ha pasado',
	'¿Habías considerado que el nacionalismo es una forma de racismo? Argumenta a favor o en contra',
	'¿Quién es el profesor que más ha impactado en tu vida y por qué?',
	'Menciona algo que puede frustrarte o enfuracerte mucho',
	'¿Qué es lo que cambiarías de tus papás y qué es lo que admiras?',
	'¿Cuál es tu fantasía sexual?',
	'¿De qué te arrepientes en tu vida?',
	'¿Como piensas dejar tu huella en la humanidad?',
	'Y si pudieras corregir un error del pasado ¿Cuál sería?',
	'¿Qué canción te hace recordar un evento y cuál es?',
	'¿Alguna vez te has sentido muy cerca de la muerte?¿Cuando?',
	'Menciona una anécdota que te haga sentir avergonzado',
	'¿Qué es lo más gracioso que has hecho en una borrachera?',
	'¿Cual ha sido tu viaje favorito y qué pasó en él qué es espcial?',
	'¿Qué es lo que más te gusta del lugar donde vives?',
	'Si tuvieras que irte lejos de donde vives, ¿qué extrañarías más?',
	'¿Cuantás novias/novios has tenido?',
	'Si pudieras tener una aventura extraordinaria, pero que no pudieras regresar para contarla, ¿la vivirías?',
	'Menciona algo que necesita tener tu alma gemela, inegociablemente',
	'Menciona un gusto musical culposo que tengas (una canción que te de pena decir que te gusta)',
	'¿Cuál ha sido la compra de la que más te arrepientes?',
	'Qué es lo que te haría falta para ser completamente feliz',
	'De lo que te enseñaron de niño, qué es lo que más cuestionas que sea cierto',
	'Si tuvieras un canal de YouTube famoso, ¿cuál sería el tema?',
	'¿Tienes una habilidad extraña? Por ejemplo, mover las orejas',
	'¿Qué te hace difeente a tí de otras personas?',
	'¿Cuál ha sido tu momento más feliz hasta hora?',
	'Y si pudieras contactar con un famoso que ya murió, ¿Quién sería y porquém qué le preguntarías?',
	'Si tuvieras la oportunidad de nacer en otra época, ¿Cuál sería?',
	'¿Qué habilidad te gustaría tener y que consideras que te hace falta?',
	'¿Qué es lo que más te gusta hacer?',
	'¿Qué es lo que menos te gusta hacer?',
	'¿En dónde te gustaría vivir una vida tranquila de retiro?',
	'¿Cuál ha sido tu mayor decepción?',
	'¿Crees que hay vida después de la muerte? ¿Por qué?',
	'¿Qué es lo que más deseas tener?',
	'¿Cuál es el sueño más extraño que recuerdes?',
	'¿Qué prefieres, el día o la noche y por qué?',
	'Si sabemos que el dinero no compra la felicidad, ¿prefieres mucho dinero o mucha felicidad?',
	'Si te quedaras en una isla desierta, ¿prefieres vivr con internet o tener que convivir solo con una persona?',
	'Menciona algo con lo que simplemente no puedes vivir y porqué',
	'¿Hay algún secreto que tengas? ¿Puedes compartirlo?',
	'¿Qué prefieres, vivir 10 años al máximo y morir o vivir 100 años con calidad de vida estándar?',
	'¿Crees que las computadoras tomarán el control del mundo? Argumenta a gavor o en contra',
	'¿Cuál crees que sea la persona más importante en la historia de la humanidad?',
	'¿Cómo te ves en 5 años?',
	'¿Cómo te ves en 10 años?',
	'¿Cómo te ves en 15 años?',
	'¿Cómo te ves en 20 años?',
	'¿Cómo te ves en 30 años?',
	'¿Si tuvieras que perder uno de tus sentidos (Vista, olfato, tacto, gusto, oído), ¿Cuál perderías?',
	'¿Le has fallado a alguien? ¿a quìen y cómo?',
	'Si fueras un instrumento musical, ¿cuál serías y por qué?',
	'¿Cuál ha sido tu mayor logro?',
	'¿Cuál ha sido tu mayor fracaso?',
	'Si fueras presidente de tu país, ¿Cuál sería tu primer orden?',
	'¿Qué es lo más difícil por lo que has tenido que pasar?',
	'¿Has perdido alguna amistad valiosa? ¿A quién y por qué?',
	'¿Qué cmabiarías del lugar donde vives?',
	'Crees en Dios, ¿por qué?',
	'¿Crees en las religiones? ¿por qué?',
	'¿Crees que hay grupos de personas o logias que rigen el rumbo de la humanidad?',
	'¿Crees que hay vida inteligente extraterrestre?',
	'¿Alguna vez has tenido una expereincia paranormal? Coméntala',
	'¿Crees en la brujería?',
	'¿Hay algún artista que admires? ¿Quién y por qué?',
	'Si tuvieras la oportunida de viajar a un evento del pasado, ¿a cuál sería y por qué?',
	'¿Crees que la humanidad tendrá un fin? ¿Cuál?',
	'¿Qué profesiones crees que serán el futuro?',
	'¿Tienes algún sueño recurrente (que hayas soñado varias veces lo mismo)?¿Cuál?',
	'¿Qué caricatura fue tu favorita de niño y por qué?',
	'¿Cómo sería tu trabajo soñado?',
	'¿Crees que el dinero compra la felicidad?',
	'¿Qué idioma te gustaría aprender?',
	'Si tuvieras la oportunidad de tomar un café con una celebridad, viva o muerta, ¿Quién sería?',
	'¿Cuál es tu frase célebre favorita?',
	'Si tuvieras la capacidad de inventar algo, ¿que sería?',
	'¿Has fingido un orgasmo?¿Puedes contarme?',
	'Si pudieras cambiar algo de tu pareja, ¿qué sería?',
	'¿Tienes algún ídolo? ¿Quién?',
	'Qué prefieres para vacaciones, ¿playa o bosque?',
	'¿Crees que el ser humano llegará a colonizar otros planetas?',
	'¿Crees que el destion está escrito o cada quién escribe el suyo?',
	'Si Dios existe, ¿por qué permite males como el odio o la envidia?',
	'¿Qué cambiarías de tu vida?',
	'¿Crees en la reencarnación (regresar a la vida después de morir en forma de otro ser vivo)?',
	'¿Hay algo que has intentado hacer y no has logrado?',
	'¿Por qué crees que la gente se ha vuelto menos religiosa en la actulidad?',
	'¿Cuál crees que haya sido el mejor invento de toda la humanidad?',
	'¿Quién es tu actor favorito?¿Por qué?',
	'¿Cuando y porqué fue la última vez que te reiste tanto que te dolían las mejillas?',
	'¿Tienes a alguien a quién extrañes mucho?',
	'¿Cuál es tu pasatiempo favorito?',
	'¿Alguna vez has estado hospitalizado?¿Por qué motivo?',
	'¿Debería ser legal la clonación humana?',
	'Menciona 3 cosas más valiosas que el dinero, desde tu opinión',
	'Crees que los alimentos genéticamente modificados',
	'¿Porqué crees que hay empresas exitosas y otras no?'


	];

	//Variables Globales
	var reflexionArray = topics_reflexion.length;
	var actualidadArray = topics_actualidad.length;
	var relacionesArray = topics_relaciones.length;
	var socializarArray = topics_socializar.lenght;
	var todosArray = todos.lenght;
	var cero = 0;
	
	console.log(todos.lenght);

	//Variables buttones temas
	var topicReflexion = document.getElementById('topicReflexion');

	function traerTema(){

		var random = randomNum(0, 118);
		
		function randomNum(myMin,myMax){ 
			return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
		}

		
		document.getElementById("tema").innerHTML = todos[random];

		//Topic Selection


	};  

	




//});