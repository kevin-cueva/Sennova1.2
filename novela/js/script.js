/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},

	'ConsultarNombreEmpresa': {
		title: 'Consulta de nombre de la empresa ',
		
		body: `
			<p><a href='https://www.rues.org.co/'  target="_blank" rel="noopener noreferrer">Rues</a> - Enlace de consulta de nombres.</p>
		`
	},


	'ConsultarPaginaLogo': {
		title: 'Crea el Logo',
		subtitle: 'Juega con los colores, pero ante todo maneja sobriedad. ¡Adelante!',
		body: `
			<p><a href='https://www.brandcrowd.com/maker/logos?text=ice+cream+&SearchText=&LogoStyle=0&LogoLayoutOrientation=&Colors=&FontStyles='  target="_blank" rel="noopener noreferrer">Brand Crown</a> - Esto te puede servir de gran ayuda para poder construir el logotipo.</p>
		`
	},



});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

	 'tereis_bienvenida': 'tereis_bienvenida.mp3', 
	 
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'salon': 'aula_bienvenida.jpg',
	
	'constitucion': 'constitucion.jpg',
	'actividadeconomica' : 'actividadeconomica.jpg',
	'global': 'global.jpg',
	'decisiones': 'decisiones.jpg',

});


// Define the Characters
monogatari.characters ({

	't': {
		name: 'Tereis',
		color: '#FF3399',

		directory: 'tereis',

		sprites: {
			normal: 'normal.png',
			feliz: 'feliz.png',
			cansada: 'cansada.png',
			brava: 'brava.png',
			shock: 'shock.png',
			triste: 'triste.png',
		},

	},


});



monogatari.script ({

	'Start': [
		{
			'Choice': {

				'bienvenida': {
					'Text': 'La Bienvenida',
					'Do': 'jump Start_Bienvenida'
				},

				'constitucion': {
					'Text': 'Constitución de Empresas',
					'Do': 'jump Start_Constitucion'
				},

				'normas': {
					'Text': 'Normas',
					'Do': 'jump Start_Normas'
				},

			}
		},

	],



});



/*
monogatari.script ({

	'Start': [

		'q: ...es gran servicio quitar tan mala simiente de gigantes.',
		's: ¿Qué gigantes?',
		'q: Aquellos que allí ves, de los brazos largos.',
		's: Mire vuestra merced que aquellos que allí se parecen no son gigantes,',
		's: sino molinos de viento, y lo que en ellos parecen brazos son las aspas',
		'q: Bien parece que no estás cursado en esto de las aventuras...',
		's: ¡Válame Dios!',
		's: ¿No le dije yo a vuestra merced que mirase bien?',
		'q: Calla, amigo Sancho,',
		'q: que las cosas de la guerra más que otras',
		'q: están sujetas a continua mudanza;',


	],



});
*/


