monogatari.script ({
	
	'Start_Constitucion': [ 

		
		
		'show background constitucion at left with fadeIn',
		
		'show character t normal',
		'jump InicioConstitucion',

		//'jump logodelaempresa',
		//'jump Actividadeconomica',
		
		//'jump cuentabancaria',
		
		//'jump Resoluciondefacturacion',
		


		

		//'jump clasificacionObjetivo',
      
	],


	



	//*************INICIO******************

	'InicioConstitucion': [
	{
		'Choice': {
			
			'Dialog':  't: ¿Aprendiz, seleccione el paso con el que usted considere que se debe iniciar la constitución?',
			'p1': {
				'Text': 'Actividad económica',
				'Do': 'jump Actividadeconomica',
				},
			'p2': {
				'Text': 'Nombre de la empresa',
				'Do': 'jump Nombredelaempresa',
				},
			}
	},
	],
	
	
	//Mala, regrsar...
	'Actividadeconomica': [
		
		'show background actividadeconomica at left with fadeIn',
		'show character t brava',
		't: Cuando se tiene la idea de constituir una empresa,',
		't: se debe tener claridad cuál va hacer el objeto social',
		't: tenemos para ti el listado de actividades económicas,',
		't: que podrás escoger de acuerdo a su código, nombre o palabra clave',
		'jump Nombredelaempresa',
      
	],
	
//Paso 1:	
	'Nombredelaempresa': [
		'show character t feliz',
		't: Querido aprendiz, el siguiente paso será idear el nombre',
		't: para esa empresa que tanto has anhelado,',
		't: te recomendamos que antes de definirlo como tal',

		
		't: consultes en la siguiente página donde encontrarás,',
		
		't: si ese nombre que has tenido en cuenta para formalizar tu empresa,',
		't: ya existe, en ese caso, piensa en otro, no puedes crear otra empresa con el mismo nombre',
		
		'show message ConsultarNombreEmpresa',


		'show notification Welcome',
		{'Input': {
				'Text': 'Inserte aquí el nombre de la empresa:',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							nombreEmpresa: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							nombreEmpresa: ''
						}
					});
				},
				'Warning': 'Debes ingresar un nombre!'
		},},

		't: El nombre escogido es: {{player.nombreEmpresa}}, bien hecho!',
		
		
		'jump EscogerActividadListado',
		
		
	],
	
//Paso 2:
	'EscogerActividadListado': [
		//Input Actividad Economica
		{'Input': {
			'Text': 'Selecciona la actividad económica:',
			'Type': 'select',
			'Options': [
				{label: '0111 Cultivo de cereales (excepto arroz), legumbres y semillas oleaginosas',value: '0111 Cultivo de cereales (excepto arroz), legumbres y semillas oleaginosas',},
{label: '0112 Cultivo de arroz',value: '0112 Cultivo de arroz',},
{label: '0113 Cultivo de hortalizas, raíces y tubérculos',value: '0113 Cultivo de hortalizas, raíces y tubérculos',},
{label: '0114 Cultivo de tabaco',value: '0114 Cultivo de tabaco',},
{label: '0115 Cultivo de plantas textiles',value: '0115 Cultivo de plantas textiles',},
{label: '0119 Otros cultivos transitorios n.c.p.',value: '0119 Otros cultivos transitorios n.c.p.',},
{label: '0121 Cultivo de frutas tropicales y subtropicales',value: '0121 Cultivo de frutas tropicales y subtropicales',},
{label: '0122 Cultivo de plátano y banano',value: '0122 Cultivo de plátano y banano',},
{label: '0123 Cultivo de café',value: '0123 Cultivo de café',},
{label: '0124 Cultivo de caña de azúcar',value: '0124 Cultivo de caña de azúcar',},
{label: '0125 Cultivo de flor de corte',value: '0125 Cultivo de flor de corte',},
{label: '0126 Cultivo de palma para aceite (palma africana) y otros frutos oleaginosos',value: '0126 Cultivo de palma para aceite (palma africana) y otros frutos oleaginosos',},
{label: '0127 Cultivo de plantas con las que se preparan bebidas',value: '0127 Cultivo de plantas con las que se preparan bebidas',},
{label: '0128 Cultivo de especias y de plantas aromáticas y medicinales',value: '0128 Cultivo de especias y de plantas aromáticas y medicinales',},
{label: '0129 Otros cultivos permanentes n.c.p.',value: '0129 Otros cultivos permanentes n.c.p.',},
{label: '0130 Propagación de plantas (actividades de los viveros, excepto viveros forestales)',value: '0130 Propagación de plantas (actividades de los viveros, excepto viveros forestales)',},
{label: '0141 Cría de ganado bovino y bufalino',value: '0141 Cría de ganado bovino y bufalino',},
{label: '0142 Cría de caballos y otros equinos',value: '0142 Cría de caballos y otros equinos',},
{label: '0143 Cría de ovejas y cabras',value: '0143 Cría de ovejas y cabras',},
{label: '0144 Cría de ganado porcino',value: '0144 Cría de ganado porcino',},
{label: '0145 Cría de aves de corral',value: '0145 Cría de aves de corral',},
{label: '0149 Cría de otros animales n.c.p.',value: '0149 Cría de otros animales n.c.p.',},
{label: '0150 Explotación mixta (agrícola y pecuaria)',value: '0150 Explotación mixta (agrícola y pecuaria)',},
{label: '0161 Actividades de apoyo a la agricultura',value: '0161 Actividades de apoyo a la agricultura',},
{label: '0162 Actividades de apoyo a la ganadería',value: '0162 Actividades de apoyo a la ganadería',},
{label: '0163 Actividades posteriores a la cosecha',value: '0163 Actividades posteriores a la cosecha',},
{label: '0164 Tratamiento de semillas para propagación',value: '0164 Tratamiento de semillas para propagación',},
{label: '0170 Caza ordinaria y mediante trampas y actividades de servicios conexas',value: '0170 Caza ordinaria y mediante trampas y actividades de servicios conexas',},
{label: '0210 Silvicultura y otras actividades forestales',value: '0210 Silvicultura y otras actividades forestales',},
{label: '0220 Extracción de madera',value: '0220 Extracción de madera',},
{label: '0230 Recolección de productos forestales diferentes a la madera',value: '0230 Recolección de productos forestales diferentes a la madera',},
{label: '0240 Servicios de apoyo a la silvicultura',value: '0240 Servicios de apoyo a la silvicultura',},
{label: '0311 Pesca marítima',value: '0311 Pesca marítima',},
{label: '0312 Pesca de agua dulce',value: '0312 Pesca de agua dulce',},
{label: '0321 Acuicultura marítima',value: '0321 Acuicultura marítima',},
{label: '0322 Acuicultura de agua dulce',value: '0322 Acuicultura de agua dulce',},
{label: '0510 Extracción de hulla (carbón de piedra)',value: '0510 Extracción de hulla (carbón de piedra)',},
{label: '0520 Extracción de carbón lignito',value: '0520 Extracción de carbón lignito',},
{label: '0610 Extracción de petróleo crudo',value: '0610 Extracción de petróleo crudo',},
{label: '0620 Extracción de gas natural',value: '0620 Extracción de gas natural',},
{label: '0710 Extracción de minerales de hierro',value: '0710 Extracción de minerales de hierro',},
{label: '0721 Extracción de minerales de uranio y de torio',value: '0721 Extracción de minerales de uranio y de torio',},
{label: '0722 Extracción de oro y otros metales preciosos',value: '0722 Extracción de oro y otros metales preciosos',},
{label: '0723 Extracción de minerales de níquel',value: '0723 Extracción de minerales de níquel',},
{label: '0729 Extracción de otros minerales metalíferos no ferrosos n.c.p.',value: '0729 Extracción de otros minerales metalíferos no ferrosos n.c.p.',},
{label: '0811 Extracción de piedra, arena, arcillas comunes, yeso y anhidrita',value: '0811 Extracción de piedra, arena, arcillas comunes, yeso y anhidrita',},
{label: '0812 Extracción de arcillas de uso industrial, caliza, caolín y bentonitas',value: '0812 Extracción de arcillas de uso industrial, caliza, caolín y bentonitas',},
{label: '0820 Extracción de esmeraldas, piedras preciosas y semipreciosas',value: '0820 Extracción de esmeraldas, piedras preciosas y semipreciosas',},
{label: '0891 Extracción de minerales para la fabricación de abonos y productos químicos',value: '0891 Extracción de minerales para la fabricación de abonos y productos químicos',},
{label: '0892 Extracción de halita (sal)',value: '0892 Extracción de halita (sal)',},
{label: '0899 Extracción de otros minerales no metálicos n.c.p.',value: '0899 Extracción de otros minerales no metálicos n.c.p.',},
{label: '0910 Actividades de apoyo para la extracción de petróleo y de gas natural',value: '0910 Actividades de apoyo para la extracción de petróleo y de gas natural',},
{label: '0990 Actividades de apoyo para otras actividades de explotación de minas y canteras',value: '0990 Actividades de apoyo para otras actividades de explotación de minas y canteras',},
{label: '1011 Procesamiento y conservación de carne y productos cárnicos',value: '1011 Procesamiento y conservación de carne y productos cárnicos',},
{label: '1012 Procesamiento y conservación de pescados, crustáceos y moluscos',value: '1012 Procesamiento y conservación de pescados, crustáceos y moluscos',},
{label: '1020 Procesamiento y conservación de frutas, legumbres, hortalizas y tubérculos',value: '1020 Procesamiento y conservación de frutas, legumbres, hortalizas y tubérculos',},
{label: '1030 Elaboración de aceites y grasas de origen vegetal y animal',value: '1030 Elaboración de aceites y grasas de origen vegetal y animal',},
{label: '1040 Elaboración de productos lácteos',value: '1040 Elaboración de productos lácteos',},
{label: '1051 Elaboración de productos de molinería',value: '1051 Elaboración de productos de molinería',},
{label: '1052 Elaboración de almidones y productos derivados del almidón',value: '1052 Elaboración de almidones y productos derivados del almidón',},
{label: '1061 Trilla de café',value: '1061 Trilla de café',},
{label: '1062 Descafeinado, tostión y molienda del café',value: '1062 Descafeinado, tostión y molienda del café',},
{label: '1063 Otros derivados del café',value: '1063 Otros derivados del café',},
{label: '1071 Elaboración y refinación de azúcar',value: '1071 Elaboración y refinación de azúcar',},
{label: '1072 Elaboración de panela',value: '1072 Elaboración de panela',},
{label: '1081 Elaboración de productos de panadería',value: '1081 Elaboración de productos de panadería',},
{label: '1082 Elaboración de cacao, chocolate y productos de confitería',value: '1082 Elaboración de cacao, chocolate y productos de confitería',},
{label: '1083 Elaboración de macarrones, fideos, alcuzcuz y productos farináceos similares',value: '1083 Elaboración de macarrones, fideos, alcuzcuz y productos farináceos similares',},
{label: '1084 Elaboración de comidas y platos preparados',value: '1084 Elaboración de comidas y platos preparados',},
{label: '1089 Elaboración de otros productos alimenticios n.c.p.',value: '1089 Elaboración de otros productos alimenticios n.c.p.',},
{label: '1090 Elaboración de alimentos preparados para animales',value: '1090 Elaboración de alimentos preparados para animales',},
{label: '1101 Destilación, rectificación y mezcla de bebidas alcohólicas',value: '1101 Destilación, rectificación y mezcla de bebidas alcohólicas',},
{label: '1102 Elaboración de bebidas fermentadas no destiladas',value: '1102 Elaboración de bebidas fermentadas no destiladas',},
{label: '1103 Producción de malta, elaboración de cervezas y otras bebidas malteadas',value: '1103 Producción de malta, elaboración de cervezas y otras bebidas malteadas',},
{label: '1104 Elaboración de bebidas no alcohólicas, producción de aguas minerales y de otras aguas embotelladas',value: '1104 Elaboración de bebidas no alcohólicas, producción de aguas minerales y de otras aguas embotelladas',},
{label: '1200 Elaboración de productos de tabaco',value: '1200 Elaboración de productos de tabaco',},
{label: '1311 Preparación e hilatura de fibras textiles',value: '1311 Preparación e hilatura de fibras textiles',},
{label: '1312 Tejeduría de productos textiles',value: '1312 Tejeduría de productos textiles',},
{label: '1313 Acabado de productos textiles',value: '1313 Acabado de productos textiles',},
{label: '1391 Fabricación de tejidos de punto y ganchillo',value: '1391 Fabricación de tejidos de punto y ganchillo',},
{label: '1392 Confección de artículos con materiales textiles, excepto prendas de vestir',value: '1392 Confección de artículos con materiales textiles, excepto prendas de vestir',},
{label: '1393 Fabricación de tapetes y alfombras para pisos',value: '1393 Fabricación de tapetes y alfombras para pisos',},
{label: '1394 Fabricación de cuerdas, cordeles, cables, bramantes y redes',value: '1394 Fabricación de cuerdas, cordeles, cables, bramantes y redes',},
{label: '1399 Fabricación de otros artículos textiles n.c.p.',value: '1399 Fabricación de otros artículos textiles n.c.p.',},
{label: '1410 Confección de prendas de vestir, excepto prendas de piel',value: '1410 Confección de prendas de vestir, excepto prendas de piel',},
{label: '1420 Fabricación de artículos de piel',value: '1420 Fabricación de artículos de piel',},
{label: '1430 Fabricación de artículos de punto y ganchillo',value: '1430 Fabricación de artículos de punto y ganchillo',},
{label: '1511 Curtido y recurtido de cueros; recurtido y teñido de pieles',value: '1511 Curtido y recurtido de cueros; recurtido y teñido de pieles',},
{label: '1512 Fabricación de artículos de viaje, bolsos de mano y artículos similares elaborados en cuero, y fabricación de artículos de talabartería y guarnicionería',value: '1512 Fabricación de artículos de viaje, bolsos de mano y artículos similares elaborados en cuero, y fabricación de artículos de talabartería y guarnicionería',},
{label: '1513 Fabricación de artículos de viaje, bolsos de mano y artículos similares; artículos de talabartería y guarnicionería elaborados en otros materiales',value: '1513 Fabricación de artículos de viaje, bolsos de mano y artículos similares; artículos de talabartería y guarnicionería elaborados en otros materiales',},
{label: '1521 Fabricación de calzado de cuero y piel, con cualquier tipo de suela',value: '1521 Fabricación de calzado de cuero y piel, con cualquier tipo de suela',},
{label: '1522 Fabricación de otros tipos de calzado, excepto calzado de cuero y piel',value: '1522 Fabricación de otros tipos de calzado, excepto calzado de cuero y piel',},
{label: '1523 Fabricación de partes del calzado',value: '1523 Fabricación de partes del calzado',},
{label: '1610 Aserrado, acepillado e impregnación de la madera',value: '1610 Aserrado, acepillado e impregnación de la madera',},
{label: '1620 Fabricación de hojas de madera para enchapado; fabricación de tableros contrachapados, tableros laminados, tableros de partículas y otros tableros y paneles',value: '1620 Fabricación de hojas de madera para enchapado; fabricación de tableros contrachapados, tableros laminados, tableros de partículas y otros tableros y paneles',},
{label: '1630 Fabricación de partes y piezas de madera, de carpintería y ebanistería para la construcción',value: '1630 Fabricación de partes y piezas de madera, de carpintería y ebanistería para la construcción',},
{label: '1640 Fabricación de recipientes de madera',value: '1640 Fabricación de recipientes de madera',},
{label: '1690 Fabricación de otros productos de madera; fabricación de artículos de corcho, cestería y espartería',value: '1690 Fabricación de otros productos de madera; fabricación de artículos de corcho, cestería y espartería',},
{label: '1701 Fabricación de pulpas (pastas) celulósicas; papel y cartón',value: '1701 Fabricación de pulpas (pastas) celulósicas; papel y cartón',},
{label: '1702 Fabricación de papel y cartón ondulado (corrugado); fabricación de envases, empaques y de embalajes de papel y cartón.',value: '1702 Fabricación de papel y cartón ondulado (corrugado); fabricación de envases, empaques y de embalajes de papel y cartón.',},
{label: '1709 Fabricación de otros artículos de papel y cartón',value: '1709 Fabricación de otros artículos de papel y cartón',},
{label: '1811 Actividades de impresión',value: '1811 Actividades de impresión',},
{label: '1812 Actividades de servicios relacionados con la impresión',value: '1812 Actividades de servicios relacionados con la impresión',},
{label: '1820 Producción de copias a partir de grabaciones originales',value: '1820 Producción de copias a partir de grabaciones originales',},
{label: '1910 Fabricación de productos de hornos de coque',value: '1910 Fabricación de productos de hornos de coque',},
{label: '1921 Fabricación de productos de la refinación del petróleo',value: '1921 Fabricación de productos de la refinación del petróleo',},
{label: '1922 Actividad de mezcla de combustibles',value: '1922 Actividad de mezcla de combustibles',},
{label: '2011 Fabricación de sustancias y productos químicos básicos',value: '2011 Fabricación de sustancias y productos químicos básicos',},
{label: '2012 Fabricación de abonos y compuestos inorgánicos nitrogenados',value: '2012 Fabricación de abonos y compuestos inorgánicos nitrogenados',},
{label: '2013 Fabricación de plásticos en formas primarias',value: '2013 Fabricación de plásticos en formas primarias',},
{label: '2014 Fabricación de caucho sintético en formas primarias',value: '2014 Fabricación de caucho sintético en formas primarias',},
{label: '2021 Fabricación de plaguicidas y otros productos químicos de uso agropecuario',value: '2021 Fabricación de plaguicidas y otros productos químicos de uso agropecuario',},
{label: '2022 Fabricación de pinturas, barnices y revestimientos similares, tintas para impresión y masillas',value: '2022 Fabricación de pinturas, barnices y revestimientos similares, tintas para impresión y masillas',},
{label: '2023 Fabricación de jabones y detergentes, preparados para limpiar y pulir; perfumes y preparados de tocador',value: '2023 Fabricación de jabones y detergentes, preparados para limpiar y pulir; perfumes y preparados de tocador',},
{label: '2029 Fabricación de otros productos químicos n.c.p.',value: '2029 Fabricación de otros productos químicos n.c.p.',},
{label: '2030 Fabricación de fibras sintéticas y artificiales',value: '2030 Fabricación de fibras sintéticas y artificiales',},
{label: '2100 Fabricación de productos farmacéuticos, sustancias químicas medicinales y productos botánicos de uso farmacéutico',value: '2100 Fabricación de productos farmacéuticos, sustancias químicas medicinales y productos botánicos de uso farmacéutico',},
{label: '2211 Fabricación de llantas y neumáticos de caucho',value: '2211 Fabricación de llantas y neumáticos de caucho',},
{label: '2212 Reencauche de llantas usadas',value: '2212 Reencauche de llantas usadas',},
{label: '2219 Fabricación de formas básicas de caucho y otros productos de caucho n.c.p.',value: '2219 Fabricación de formas básicas de caucho y otros productos de caucho n.c.p.',},
{label: '2221 Fabricación de formas básicas de plástico',value: '2221 Fabricación de formas básicas de plástico',},
{label: '2229 Fabricación de artículos de plástico n.c.p.',value: '2229 Fabricación de artículos de plástico n.c.p.',},
{label: '2310 Fabricación de vidrio y productos de vidrio',value: '2310 Fabricación de vidrio y productos de vidrio',},
{label: '2391 Fabricación de productos refractarios',value: '2391 Fabricación de productos refractarios',},
{label: '2392 Fabricación de materiales de arcilla para la construcción',value: '2392 Fabricación de materiales de arcilla para la construcción',},
{label: '2393 Fabricación de otros productos de cerámica y porcelana',value: '2393 Fabricación de otros productos de cerámica y porcelana',},
{label: '2394 Fabricación de cemento, cal y yeso',value: '2394 Fabricación de cemento, cal y yeso',},
{label: '2395 Fabricación de artículos de hormigón, cemento y yeso',value: '2395 Fabricación de artículos de hormigón, cemento y yeso',},
{label: '2396 Corte, tallado y acabado de la piedra',value: '2396 Corte, tallado y acabado de la piedra',},
{label: '2399 Fabricación de otros productos minerales no metálicos n.c.p.',value: '2399 Fabricación de otros productos minerales no metálicos n.c.p.',},
{label: '2410 Industrias básicas de hierro y de acero',value: '2410 Industrias básicas de hierro y de acero',},
{label: '2421 Industrias básicas de metales preciosos',value: '2421 Industrias básicas de metales preciosos',},
{label: '2429 Industrias básicas de otros metales no ferrosos',value: '2429 Industrias básicas de otros metales no ferrosos',},
{label: '2431 Fundición de hierro y de acero',value: '2431 Fundición de hierro y de acero',},
{label: '2432 Fundición de metales no ferrosos',value: '2432 Fundición de metales no ferrosos',},
{label: '2511 Fabricación de productos metálicos para uso estructural',value: '2511 Fabricación de productos metálicos para uso estructural',},
{label: '2512 Fabricación de tanques, depósitos y recipientes de metal, excepto los utilizados para el envase o transporte de mercancías',value: '2512 Fabricación de tanques, depósitos y recipientes de metal, excepto los utilizados para el envase o transporte de mercancías',},
{label: '2513 Fabricación de generadores de vapor, excepto calderas de agua caliente para calefacción central',value: '2513 Fabricación de generadores de vapor, excepto calderas de agua caliente para calefacción central',},
{label: '2520 Fabricación de armas y municiones',value: '2520 Fabricación de armas y municiones',},
{label: '2591 Forja, prensado, estampado y laminado de metal; pulvimetalurgia',value: '2591 Forja, prensado, estampado y laminado de metal; pulvimetalurgia',},
{label: '2592 Tratamiento y revestimiento de metales; mecanizado',value: '2592 Tratamiento y revestimiento de metales; mecanizado',},
{label: '2593 Fabricación de artículos de cuchillería, herramientas de mano y artículos de ferretería',value: '2593 Fabricación de artículos de cuchillería, herramientas de mano y artículos de ferretería',},
{label: '2599 Fabricación de otros productos elaborados de metal n.c.p.',value: '2599 Fabricación de otros productos elaborados de metal n.c.p.',},
{label: '2610 Fabricación de componentes y tableros electrónicos',value: '2610 Fabricación de componentes y tableros electrónicos',},
{label: '2620 Fabricación de computadoras y de equipo periférico',value: '2620 Fabricación de computadoras y de equipo periférico',},
{label: '2630 Fabricación de equipos de comunicación',value: '2630 Fabricación de equipos de comunicación',},
{label: '2640 Fabricación de aparatos electrónicos de consumo',value: '2640 Fabricación de aparatos electrónicos de consumo',},
{label: '2651 Fabricación de equipo de medición, prueba, navegación y control',value: '2651 Fabricación de equipo de medición, prueba, navegación y control',},
{label: '2652 Fabricación de relojes',value: '2652 Fabricación de relojes',},
{label: '2660 Fabricación de equipo de irradiación y equipo electrónico de uso médico y terapéutico',value: '2660 Fabricación de equipo de irradiación y equipo electrónico de uso médico y terapéutico',},
{label: '2670 Fabricación de instrumentos ópticos y equipo fotográfico',value: '2670 Fabricación de instrumentos ópticos y equipo fotográfico',},
{label: '2680 Fabricación de medios magnéticos y ópticos para almacenamiento de datos',value: '2680 Fabricación de medios magnéticos y ópticos para almacenamiento de datos',},
{label: '2711 Fabricación de motores, generadores y transformadores eléctricos',value: '2711 Fabricación de motores, generadores y transformadores eléctricos',},
{label: '2712 Fabricación de aparatos de distribución y control de la energía eléctrica',value: '2712 Fabricación de aparatos de distribución y control de la energía eléctrica',},
{label: '2720 Fabricación de pilas, baterías y acumuladores eléctricos',value: '2720 Fabricación de pilas, baterías y acumuladores eléctricos',},
{label: '2731 Fabricación de hilos y cables eléctricos y de fibra óptica',value: '2731 Fabricación de hilos y cables eléctricos y de fibra óptica',},
{label: '2732 Fabricación de dispositivos de cableado',value: '2732 Fabricación de dispositivos de cableado',},
{label: '2740 Fabricación de equipos eléctricos de iluminación',value: '2740 Fabricación de equipos eléctricos de iluminación',},
{label: '2750 Fabricación de aparatos de uso doméstico',value: '2750 Fabricación de aparatos de uso doméstico',},
{label: '2790 Fabricación de otros tipos de equipo eléctrico n.c.p.',value: '2790 Fabricación de otros tipos de equipo eléctrico n.c.p.',},
{label: '2811 Fabricación de motores, turbinas, y partes para motores de combustión interna',value: '2811 Fabricación de motores, turbinas, y partes para motores de combustión interna',},
{label: '2812 Fabricación de equipos de potencia hidráulica y neumática',value: '2812 Fabricación de equipos de potencia hidráulica y neumática',},
{label: '2813 Fabricación de otras bombas, compresores, grifos y válvulas',value: '2813 Fabricación de otras bombas, compresores, grifos y válvulas',},
{label: '2814 Fabricación de cojinetes, engranajes, trenes de engranajes y piezas de transmisión',value: '2814 Fabricación de cojinetes, engranajes, trenes de engranajes y piezas de transmisión',},
{label: '2815 Fabricación de hornos, hogares y quemadores industriales',value: '2815 Fabricación de hornos, hogares y quemadores industriales',},
{label: '2816 Fabricación de equipo de elevación y manipulación',value: '2816 Fabricación de equipo de elevación y manipulación',},
{label: '2817 Fabricación de maquinaria y equipo de oficina (excepto computadoras y equipo periférico)',value: '2817 Fabricación de maquinaria y equipo de oficina (excepto computadoras y equipo periférico)',},
{label: '2818 Fabricación de herramientas manuales con motor',value: '2818 Fabricación de herramientas manuales con motor',},
{label: '2819 Fabricación de otros tipos de maquinaria y equipo de uso general n.c.p.',value: '2819 Fabricación de otros tipos de maquinaria y equipo de uso general n.c.p.',},
{label: '2821 Fabricación de maquinaria agropecuaria y forestal',value: '2821 Fabricación de maquinaria agropecuaria y forestal',},
{label: '2822 Fabricación de máquinas formadoras de metal y de máquinas herramienta',value: '2822 Fabricación de máquinas formadoras de metal y de máquinas herramienta',},
{label: '2823 Fabricación de maquinaria para la metalurgia',value: '2823 Fabricación de maquinaria para la metalurgia',},
{label: '2824 Fabricación de maquinaria para explotación de minas y canteras y para obras de construcción',value: '2824 Fabricación de maquinaria para explotación de minas y canteras y para obras de construcción',},
{label: '2825 Fabricación de maquinaria para la elaboración de alimentos, bebidas y tabaco',value: '2825 Fabricación de maquinaria para la elaboración de alimentos, bebidas y tabaco',},
{label: '2826 Fabricación de maquinaria para la elaboración de productos textiles, prendas de vestir y cueros',value: '2826 Fabricación de maquinaria para la elaboración de productos textiles, prendas de vestir y cueros',},
{label: '2829 Fabricación de otros tipos de maquinaria y equipo de uso especial n.c.p.',value: '2829 Fabricación de otros tipos de maquinaria y equipo de uso especial n.c.p.',},
{label: '2910 Fabricación de vehículos automotores y sus motores',value: '2910 Fabricación de vehículos automotores y sus motores',},
{label: '2920 Fabricación de carrocerías para vehículos automotores; fabricación de remolques y semirremolques',value: '2920 Fabricación de carrocerías para vehículos automotores; fabricación de remolques y semirremolques',},
{label: '2930 Fabricación de partes, piezas (autopartes) y accesorios (lujos) para vehículos automotores',value: '2930 Fabricación de partes, piezas (autopartes) y accesorios (lujos) para vehículos automotores',},
{label: '3011 Construcción de barcos y de estructuras flotantes',value: '3011 Construcción de barcos y de estructuras flotantes',},
{label: '3012 Construcción de embarcaciones de recreo y deporte',value: '3012 Construcción de embarcaciones de recreo y deporte',},
{label: '3020 Fabricación de locomotoras y de material rodante para ferrocarriles',value: '3020 Fabricación de locomotoras y de material rodante para ferrocarriles',},
{label: '3030 Fabricación de aeronaves, naves espaciales y de maquinaria conexa',value: '3030 Fabricación de aeronaves, naves espaciales y de maquinaria conexa',},
{label: '3040 Fabricación de vehículos militares de combate',value: '3040 Fabricación de vehículos militares de combate',},
{label: '3091 Fabricación de motocicletas',value: '3091 Fabricación de motocicletas',},
{label: '3092 Fabricación de bicicletas y de sillas de ruedas para personas con discapacidad',value: '3092 Fabricación de bicicletas y de sillas de ruedas para personas con discapacidad',},
{label: '3099 Fabricación de otros tipos de equipo de transporte n.c.p.',value: '3099 Fabricación de otros tipos de equipo de transporte n.c.p.',},
{label: '3110 Fabricación de muebles',value: '3110 Fabricación de muebles',},
{label: '3120 Fabricación de colchones y somieres',value: '3120 Fabricación de colchones y somieres',},
{label: '3210 Fabricación de joyas, bisutería y artículos conexos',value: '3210 Fabricación de joyas, bisutería y artículos conexos',},
{label: '3220 Fabricación de instrumentos musicales',value: '3220 Fabricación de instrumentos musicales',},
{label: '3230 Fabricación de artículos y equipo para la práctica del deporte',value: '3230 Fabricación de artículos y equipo para la práctica del deporte',},
{label: '3240 Fabricación de juegos, juguetes y rompecabezas',value: '3240 Fabricación de juegos, juguetes y rompecabezas',},
{label: '3250 Fabricación de instrumentos, aparatos y materiales médicos y odontológicos (incluido mobiliario)',value: '3250 Fabricación de instrumentos, aparatos y materiales médicos y odontológicos (incluido mobiliario)',},
{label: '3290 Otras industrias manufactureras n.c.p.',value: '3290 Otras industrias manufactureras n.c.p.',},
{label: '3311 Mantenimiento y reparación especializado de productos elaborados en metal',value: '3311 Mantenimiento y reparación especializado de productos elaborados en metal',},
{label: '3312 Mantenimiento y reparación especializado de maquinaria y equipo',value: '3312 Mantenimiento y reparación especializado de maquinaria y equipo',},
{label: '3313 Mantenimiento y reparación especializado de equipo electrónico y óptico',value: '3313 Mantenimiento y reparación especializado de equipo electrónico y óptico',},
{label: '3314 Mantenimiento y reparación especializado de equipo eléctrico',value: '3314 Mantenimiento y reparación especializado de equipo eléctrico',},
{label: '3315 Mantenimiento y reparación especializado de equipo de transporte, excepto los vehículos automotores, motocicletas y bicicletas',value: '3315 Mantenimiento y reparación especializado de equipo de transporte, excepto los vehículos automotores, motocicletas y bicicletas',},
{label: '3319 Mantenimiento y reparación de otros tipos de equipos y sus componentes n.c.p.',value: '3319 Mantenimiento y reparación de otros tipos de equipos y sus componentes n.c.p.',},
{label: '3320 Instalación especializada de maquinaria y equipo industrial',value: '3320 Instalación especializada de maquinaria y equipo industrial',},
{label: '3511 Generación de energía eléctrica',value: '3511 Generación de energía eléctrica',},
{label: '3512 Transmisión de energía eléctrica',value: '3512 Transmisión de energía eléctrica',},
{label: '3513 Distribución de energía eléctrica',value: '3513 Distribución de energía eléctrica',},
{label: '3514 Comercialización de energía eléctrica',value: '3514 Comercialización de energía eléctrica',},
{label: '3520 Producción de gas; distribución de combustibles gaseosos por tuberías',value: '3520 Producción de gas; distribución de combustibles gaseosos por tuberías',},
{label: '3530 Suministro de vapor y aire acondicionado',value: '3530 Suministro de vapor y aire acondicionado',},
{label: '3600 Captación, tratamiento y distribución de agua',value: '3600 Captación, tratamiento y distribución de agua',},
{label: '3700 Evacuación y tratamiento de aguas residuales',value: '3700 Evacuación y tratamiento de aguas residuales',},
{label: '3811 Recolección de desechos no peligrosos',value: '3811 Recolección de desechos no peligrosos',},
{label: '3812 Recolección de desechos peligrosos',value: '3812 Recolección de desechos peligrosos',},
{label: '3821 Tratamiento y disposición de desechos no peligrosos',value: '3821 Tratamiento y disposición de desechos no peligrosos',},
{label: '3822 Tratamiento y disposición de desechos peligrosos',value: '3822 Tratamiento y disposición de desechos peligrosos',},
{label: '3830 Recuperación de materiales',value: '3830 Recuperación de materiales',},
{label: '3900 Actividades de saneamiento ambiental y otros servicios de gestión de desechos',value: '3900 Actividades de saneamiento ambiental y otros servicios de gestión de desechos',},
{label: '4111 Construcción de edificios residenciales',value: '4111 Construcción de edificios residenciales',},
{label: '4112 Construcción de edificios no residenciales',value: '4112 Construcción de edificios no residenciales',},
{label: '4210 Construcción de carreteras y vías de ferrocarril',value: '4210 Construcción de carreteras y vías de ferrocarril',},
{label: '4220 Construcción de proyectos de servicio público',value: '4220 Construcción de proyectos de servicio público',},
{label: '4290 Construcción de otras obras de ingeniería civil',value: '4290 Construcción de otras obras de ingeniería civil',},
{label: '4311 Demolición',value: '4311 Demolición',},
{label: '4312 Preparación del terreno',value: '4312 Preparación del terreno',},
{label: '4321 Instalaciones eléctricas',value: '4321 Instalaciones eléctricas',},
{label: '4322 Instalaciones de fontanería, calefacción y aire acondicionado',value: '4322 Instalaciones de fontanería, calefacción y aire acondicionado',},
{label: '4329 Otras instalaciones especializadas',value: '4329 Otras instalaciones especializadas',},
{label: '4330 Terminación y acabado de edificios y obras de ingeniería civil',value: '4330 Terminación y acabado de edificios y obras de ingeniería civil',},
{label: '4390 Otras actividades especializadas para la construcción de edificios y obras de ingeniería civil',value: '4390 Otras actividades especializadas para la construcción de edificios y obras de ingeniería civil',},
{label: '4511 Comercio de vehículos automotores nuevos',value: '4511 Comercio de vehículos automotores nuevos',},
{label: '4512 Comercio de vehículos automotores usados',value: '4512 Comercio de vehículos automotores usados',},
{label: '4520 Mantenimiento y reparación de vehículos automotores',value: '4520 Mantenimiento y reparación de vehículos automotores',},
{label: '4530 Comercio de partes, piezas (autopartes) y accesorios (lujos) para vehículos automotores',value: '4530 Comercio de partes, piezas (autopartes) y accesorios (lujos) para vehículos automotores',},
{label: '4541 Comercio de motocicletas y de sus partes, piezas y accesorios',value: '4541 Comercio de motocicletas y de sus partes, piezas y accesorios',},
{label: '4542 Mantenimiento y reparación de motocicletas y de sus partes y piezas',value: '4542 Mantenimiento y reparación de motocicletas y de sus partes y piezas',},
{label: '4610 Comercio al por mayor a cambio de una retribución o por contrata',value: '4610 Comercio al por mayor a cambio de una retribución o por contrata',},
{label: '4620 Comercio al por mayor de materias primas agropecuarias; animales vivos',value: '4620 Comercio al por mayor de materias primas agropecuarias; animales vivos',},
{label: '4631 Comercio al por mayor de productos alimenticios',value: '4631 Comercio al por mayor de productos alimenticios',},
{label: '4632 Comercio al por mayor de bebidas y tabaco',value: '4632 Comercio al por mayor de bebidas y tabaco',},
{label: '4641 Comercio al por mayor de productos textiles, productos confeccionados para uso doméstico',value: '4641 Comercio al por mayor de productos textiles, productos confeccionados para uso doméstico',},
{label: '4642 Comercio al por mayor de prendas de vestir',value: '4642 Comercio al por mayor de prendas de vestir',},
{label: '4643 Comercio al por mayor de calzado',value: '4643 Comercio al por mayor de calzado',},
{label: '4644 Comercio al por mayor de aparatos y equipo de uso doméstico',value: '4644 Comercio al por mayor de aparatos y equipo de uso doméstico',},
{label: '4645 Comercio al por mayor de productos farmacéuticos, medicinales, cosméticos y de tocador',value: '4645 Comercio al por mayor de productos farmacéuticos, medicinales, cosméticos y de tocador',},
{label: '4649 Comercio al por mayor de otros utensilios domésticos n.c.p.',value: '4649 Comercio al por mayor de otros utensilios domésticos n.c.p.',},
{label: '4651 Comercio al por mayor de computadores, equipo periférico y programas de informática',value: '4651 Comercio al por mayor de computadores, equipo periférico y programas de informática',},
{label: '4652 Comercio al por mayor de equipo, partes y piezas electrónicos y de telecomunicaciones',value: '4652 Comercio al por mayor de equipo, partes y piezas electrónicos y de telecomunicaciones',},
{label: '4653 Comercio al por mayor de maquinaria y equipo agropecuarios',value: '4653 Comercio al por mayor de maquinaria y equipo agropecuarios',},
{label: '4659 Comercio al por mayor de otros tipos de maquinaria y equipo n.c.p.',value: '4659 Comercio al por mayor de otros tipos de maquinaria y equipo n.c.p.',},
{label: '4661 Comercio al por mayor de combustibles sólidos, líquidos, gaseosos y productos conexos',value: '4661 Comercio al por mayor de combustibles sólidos, líquidos, gaseosos y productos conexos',},
{label: '4662 Comercio al por mayor de metales y productos metalíferos',value: '4662 Comercio al por mayor de metales y productos metalíferos',},
{label: '4663 Comercio al por mayor de materiales de construcción, artículos de ferretería, pinturas, productos de vidrio, equipo y materiales de fontanería y calefacción',value: '4663 Comercio al por mayor de materiales de construcción, artículos de ferretería, pinturas, productos de vidrio, equipo y materiales de fontanería y calefacción',},
{label: '4664 Comercio al por mayor de productos químicos básicos, cauchos y plásticos en formas primarias y productos químicos de uso agropecuario',value: '4664 Comercio al por mayor de productos químicos básicos, cauchos y plásticos en formas primarias y productos químicos de uso agropecuario',},
{label: '4665 Comercio al por mayor de desperdicios, desechos y chatarra',value: '4665 Comercio al por mayor de desperdicios, desechos y chatarra',},
{label: '4669 Comercio al por mayor de otros productos n.c.p.',value: '4669 Comercio al por mayor de otros productos n.c.p.',},
{label: '4690 Comercio al por mayor no especializado',value: '4690 Comercio al por mayor no especializado',},
{label: '4711 Comercio al por menor en establecimientos no especializados con surtido compuesto principalmente por alimentos, bebidas o tabaco',value: '4711 Comercio al por menor en establecimientos no especializados con surtido compuesto principalmente por alimentos, bebidas o tabaco',},
{label: '4719 Comercio al por menor en establecimientos no especializados, con surtido compuesto principalmente por productos diferentes de alimentos (víveres en general), bebidas y tabaco',value: '4719 Comercio al por menor en establecimientos no especializados, con surtido compuesto principalmente por productos diferentes de alimentos (víveres en general), bebidas y tabaco',},
{label: '4721 Comercio al por menor de productos agrícolas para el consumo en establecimientos especializados',value: '4721 Comercio al por menor de productos agrícolas para el consumo en establecimientos especializados',},
{label: '4722 Comercio al por menor de leche, productos lácteos y huevos, en establecimientos especializados',value: '4722 Comercio al por menor de leche, productos lácteos y huevos, en establecimientos especializados',},
{label: '4723 Comercio al por menor de carnes (incluye aves de corral), productos cárnicos, pescados y productos de mar, en establecimientos especializados',value: '4723 Comercio al por menor de carnes (incluye aves de corral), productos cárnicos, pescados y productos de mar, en establecimientos especializados',},
{label: '4724 Comercio al por menor de bebidas y productos del tabaco, en establecimientos especializados',value: '4724 Comercio al por menor de bebidas y productos del tabaco, en establecimientos especializados',},
{label: '4729 Comercio al por menor de otros productos alimenticios n.c.p., en establecimientos especializados',value: '4729 Comercio al por menor de otros productos alimenticios n.c.p., en establecimientos especializados',},
{label: '4731 Comercio al por menor de combustible para automotores',value: '4731 Comercio al por menor de combustible para automotores',},
{label: '4732 Comercio al por menor de lubricantes (aceites, grasas), aditivos y productos de limpieza para vehículos automotores',value: '4732 Comercio al por menor de lubricantes (aceites, grasas), aditivos y productos de limpieza para vehículos automotores',},
{label: '4741 Comercio al por menor de computadores, equipos periféricos, programas de informática y equipos de telecomunicaciones en establecimientos especializados',value: '4741 Comercio al por menor de computadores, equipos periféricos, programas de informática y equipos de telecomunicaciones en establecimientos especializados',},
{label: '4742 Comercio al por menor de equipos y aparatos de sonido y de video, en establecimientos especializados',value: '4742 Comercio al por menor de equipos y aparatos de sonido y de video, en establecimientos especializados',},
{label: '4751 Comercio al por menor de productos textiles en establecimientos especializados',value: '4751 Comercio al por menor de productos textiles en establecimientos especializados',},
{label: '4752 Comercio al por menor de artículos de ferretería, pinturas y productos de vidrio en establecimientos especializados',value: '4752 Comercio al por menor de artículos de ferretería, pinturas y productos de vidrio en establecimientos especializados',},
{label: '4753 Comercio al por menor de tapices, alfombras y cubrimientos para paredes y pisos en establecimientos especializados',value: '4753 Comercio al por menor de tapices, alfombras y cubrimientos para paredes y pisos en establecimientos especializados',},
{label: '4754 Comercio al por menor de electrodomésticos y gasodomésticos de uso doméstico, muebles y equipos de iluminación',value: '4754 Comercio al por menor de electrodomésticos y gasodomésticos de uso doméstico, muebles y equipos de iluminación',},
{label: '4755 Comercio al por menor de artículos y utensilios de uso doméstico',value: '4755 Comercio al por menor de artículos y utensilios de uso doméstico',},
{label: '4759 Comercio al por menor de otros artículos domésticos en establecimientos especializados',value: '4759 Comercio al por menor de otros artículos domésticos en establecimientos especializados',},
{label: '4761 Comercio al por menor de libros, periódicos, materiales y artículos de papelería y escritorio, en establecimientos especializados',value: '4761 Comercio al por menor de libros, periódicos, materiales y artículos de papelería y escritorio, en establecimientos especializados',},
{label: '4762 Comercio al por menor de artículos deportivos, en establecimientos especializados',value: '4762 Comercio al por menor de artículos deportivos, en establecimientos especializados',},
{label: '4769 Comercio al por menor de otros artículos culturales y de entretenimiento n.c.p. en establecimientos especializados',value: '4769 Comercio al por menor de otros artículos culturales y de entretenimiento n.c.p. en establecimientos especializados',},
{label: '4771 Comercio al por menor de prendas de vestir y sus accesorios (incluye artículos de piel) en establecimientos especializados',value: '4771 Comercio al por menor de prendas de vestir y sus accesorios (incluye artículos de piel) en establecimientos especializados',},
{label: '4772 Comercio al por menor de todo tipo de calzado y artículos de cuero y sucedáneos del cuero en establecimientos especializados.',value: '4772 Comercio al por menor de todo tipo de calzado y artículos de cuero y sucedáneos del cuero en establecimientos especializados.',},
{label: '4773 Comercio al por menor de productos farmacéuticos y medicinales, cosméticos y artículos de tocador en establecimientos especializados',value: '4773 Comercio al por menor de productos farmacéuticos y medicinales, cosméticos y artículos de tocador en establecimientos especializados',},
{label: '4774 Comercio al por menor de otros productos nuevos en establecimientos especializados',value: '4774 Comercio al por menor de otros productos nuevos en establecimientos especializados',},
{label: '4775 Comercio al por menor de artículos de segunda mano',value: '4775 Comercio al por menor de artículos de segunda mano',},
{label: '4781 Comercio al por menor de alimentos, bebidas y tabaco, en puestos de venta móviles',value: '4781 Comercio al por menor de alimentos, bebidas y tabaco, en puestos de venta móviles',},
{label: '4782 Comercio al por menor de productos textiles, prendas de vestir y calzado, en puestos de venta móviles',value: '4782 Comercio al por menor de productos textiles, prendas de vestir y calzado, en puestos de venta móviles',},
{label: '4789 Comercio al por menor de otros productos en puestos de venta móviles',value: '4789 Comercio al por menor de otros productos en puestos de venta móviles',},
{label: '4791 Comercio al por menor realizado a través de Internet',value: '4791 Comercio al por menor realizado a través de Internet',},
{label: '4792 Comercio al por menor realizado a través de casas de venta o por correo',value: '4792 Comercio al por menor realizado a través de casas de venta o por correo',},
{label: '4799 Otros tipos de comercio al por menor no realizado en establecimientos, puestos de venta o mercados.',value: '4799 Otros tipos de comercio al por menor no realizado en establecimientos, puestos de venta o mercados.',},
{label: '4911 Transporte férreo de pasajeros',value: '4911 Transporte férreo de pasajeros',},
{label: '4912 Transporte férreo de carga',value: '4912 Transporte férreo de carga',},
{label: '4921 Transporte de pasajeros',value: '4921 Transporte de pasajeros',},
{label: '4922 Transporte mixto',value: '4922 Transporte mixto',},
{label: '4923 Transporte de carga por carretera',value: '4923 Transporte de carga por carretera',},
{label: '4930 Transporte por tuberías',value: '4930 Transporte por tuberías',},
{label: '5011 Transporte de pasajeros marítimo y de cabotaje',value: '5011 Transporte de pasajeros marítimo y de cabotaje',},
{label: '5012 Transporte de carga marítimo y de cabotaje',value: '5012 Transporte de carga marítimo y de cabotaje',},
{label: '5021 Transporte fluvial de pasajeros',value: '5021 Transporte fluvial de pasajeros',},
{label: '5022 Transporte fluvial de carga',value: '5022 Transporte fluvial de carga',},
{label: '5111 Transporte aéreo nacional de pasajeros',value: '5111 Transporte aéreo nacional de pasajeros',},
{label: '5112 Transporte aéreo internacional de pasajeros',value: '5112 Transporte aéreo internacional de pasajeros',},
{label: '5121 Transporte aéreo nacional de carga',value: '5121 Transporte aéreo nacional de carga',},
{label: '5122 Transporte aéreo internacional de carga',value: '5122 Transporte aéreo internacional de carga',},
{label: '5210 Almacenamiento y depósito',value: '5210 Almacenamiento y depósito',},
{label: '5221 Actividades de estaciones, vías y servicios complementarios para el transporte terrestre',value: '5221 Actividades de estaciones, vías y servicios complementarios para el transporte terrestre',},
{label: '5222 Actividades de puertos y servicios complementarios para el transporte acuático',value: '5222 Actividades de puertos y servicios complementarios para el transporte acuático',},
{label: '5223 Actividades de aeropuertos, servicios de navegación aérea y demás actividades conexas al transporte aéreo',value: '5223 Actividades de aeropuertos, servicios de navegación aérea y demás actividades conexas al transporte aéreo',},
{label: '5224 Manipulación de carga',value: '5224 Manipulación de carga',},
{label: '5229 Otras actividades complementarias al transporte',value: '5229 Otras actividades complementarias al transporte',},
{label: '5310 Actividades postales nacionales',value: '5310 Actividades postales nacionales',},
{label: '5320 Actividades de mensajería',value: '5320 Actividades de mensajería',},
{label: '5511 Alojamiento en hoteles',value: '5511 Alojamiento en hoteles',},
{label: '5512 Alojamiento en apartahoteles',value: '5512 Alojamiento en apartahoteles',},
{label: '5513 Alojamiento en centros vacacionales',value: '5513 Alojamiento en centros vacacionales',},
{label: '5514 Alojamiento rural',value: '5514 Alojamiento rural',},
{label: '5519 Otros tipos de alojamientos para visitantes',value: '5519 Otros tipos de alojamientos para visitantes',},
{label: '5520 Actividades de zonas de camping y parques para vehículos recreacionales',value: '5520 Actividades de zonas de camping y parques para vehículos recreacionales',},
{label: '5530 Servicio por horas',value: '5530 Servicio por horas',},
{label: '5590 Otros tipos de alojamiento n.c.p.',value: '5590 Otros tipos de alojamiento n.c.p.',},
{label: '5611 Expendio a la mesa de comidas preparadas',value: '5611 Expendio a la mesa de comidas preparadas',},
{label: '5612 Expendio por autoservicio de comidas preparadas',value: '5612 Expendio por autoservicio de comidas preparadas',},
{label: '5613 Expendio de comidas preparadas en cafeterías',value: '5613 Expendio de comidas preparadas en cafeterías',},
{label: '5619 Otros tipos de expendio de comidas preparadas n.c.p.',value: '5619 Otros tipos de expendio de comidas preparadas n.c.p.',},
{label: '5621 Catering para eventos',value: '5621 Catering para eventos',},
{label: '5629 Actividades de otros servicios de comidas',value: '5629 Actividades de otros servicios de comidas',},
{label: '5630 Expendio de bebidas alcohólicas para el consumo dentro del establecimiento',value: '5630 Expendio de bebidas alcohólicas para el consumo dentro del establecimiento',},
{label: '5811 Edición de libros',value: '5811 Edición de libros',},
{label: '5812 Edición de directorios y listas de correo',value: '5812 Edición de directorios y listas de correo',},
{label: '5813 Edición de periódicos, revistas y otras publicaciones periódicas',value: '5813 Edición de periódicos, revistas y otras publicaciones periódicas',},
{label: '5819 Otros trabajos de edición',value: '5819 Otros trabajos de edición',},
{label: '5820 Edición de programas de informática (software)',value: '5820 Edición de programas de informática (software)',},
{label: '5911 Actividades de producción de películas cinematográficas, videos, programas, anuncios y comerciales de televisión',value: '5911 Actividades de producción de películas cinematográficas, videos, programas, anuncios y comerciales de televisión',},
{label: '5912 Actividades de posproducción de películas cinematográficas, videos, programas, anuncios y comerciales de televisión',value: '5912 Actividades de posproducción de películas cinematográficas, videos, programas, anuncios y comerciales de televisión',},
{label: '5913 Actividades de distribución de películas cinematográficas, videos, programas, anuncios y comerciales de televisión',value: '5913 Actividades de distribución de películas cinematográficas, videos, programas, anuncios y comerciales de televisión',},
{label: '5914 Actividades de exhibición de películas cinematográficas y videos',value: '5914 Actividades de exhibición de películas cinematográficas y videos',},
{label: '5920 Actividades de grabación de sonido y edición de música',value: '5920 Actividades de grabación de sonido y edición de música',},
{label: '6010 Actividades de programación y transmisión en el servicio de radiodifusión sonora',value: '6010 Actividades de programación y transmisión en el servicio de radiodifusión sonora',},
{label: '6020 Actividades de programación y transmisión de televisión',value: '6020 Actividades de programación y transmisión de televisión',},
{label: '6110 Actividades de telecomunicaciones alámbricas',value: '6110 Actividades de telecomunicaciones alámbricas',},
{label: '6120 Actividades de telecomunicaciones inalámbricas',value: '6120 Actividades de telecomunicaciones inalámbricas',},
{label: '6130 Actividades de telecomunicación satelital',value: '6130 Actividades de telecomunicación satelital',},
{label: '6190 Otras actividades de telecomunicaciones',value: '6190 Otras actividades de telecomunicaciones',},
{label: '6201 Actividades de desarrollo de sistemas informáticos (planificación, análisis, diseño, programación, pruebas)',value: '6201 Actividades de desarrollo de sistemas informáticos (planificación, análisis, diseño, programación, pruebas)',},
{label: '6202 Actividades de consultoría informática y actividades de administración de instalaciones informáticas',value: '6202 Actividades de consultoría informática y actividades de administración de instalaciones informáticas',},
{label: '6209 Otras actividades de tecnologías de información y actividades de servicios informáticos',value: '6209 Otras actividades de tecnologías de información y actividades de servicios informáticos',},
{label: '6311 Procesamiento de datos, alojamiento (hosting) y actividades relacionadas',value: '6311 Procesamiento de datos, alojamiento (hosting) y actividades relacionadas',},
{label: '6312 Portales web',value: '6312 Portales web',},
{label: '6391 Actividades de agencias de noticias',value: '6391 Actividades de agencias de noticias',},
{label: '6399 Otras actividades de servicio de información n.c.p.',value: '6399 Otras actividades de servicio de información n.c.p.',},
{label: '6411 Banco Central',value: '6411 Banco Central',},
{label: '6412 Bancos comerciales',value: '6412 Bancos comerciales',},
{label: '6421 Actividades de las corporaciones financieras',value: '6421 Actividades de las corporaciones financieras',},
{label: '6422 Actividades de las compañías de financiamiento',value: '6422 Actividades de las compañías de financiamiento',},
{label: '6423 Banca de segundo piso',value: '6423 Banca de segundo piso',},
{label: '6424 Actividades de las cooperativas financieras',value: '6424 Actividades de las cooperativas financieras',},
{label: '6431 Fideicomisos, fondos y entidades financieras similares',value: '6431 Fideicomisos, fondos y entidades financieras similares',},
{label: '6432 Fondos de cesantías',value: '6432 Fondos de cesantías',},
{label: '6491 Leasing financiero (arrendamiento financiero)',value: '6491 Leasing financiero (arrendamiento financiero)',},
{label: '6492 Actividades financieras de fondos de empleados y otras formas asociativas del sector solidario',value: '6492 Actividades financieras de fondos de empleados y otras formas asociativas del sector solidario',},
{label: '6493 Actividades de compra de cartera o factoring',value: '6493 Actividades de compra de cartera o factoring',},
{label: '6494 Otras actividades de distribución de fondos',value: '6494 Otras actividades de distribución de fondos',},
{label: '6495 Instituciones especiales oficiales',value: '6495 Instituciones especiales oficiales',},
{label: '6496 Capitalización',value: '6496 Capitalización',},
{label: '6499 Otras actividades de servicio financiero, excepto las de seguros y pensiones n.c.p.',value: '6499 Otras actividades de servicio financiero, excepto las de seguros y pensiones n.c.p.',},
{label: '6511 Seguros generales',value: '6511 Seguros generales',},
{label: '6512 Seguros de vida',value: '6512 Seguros de vida',},
{label: '6513 Reaseguros',value: '6513 Reaseguros',},
{label: '6515 Seguros de salud',value: '6515 Seguros de salud',},
{label: '6521 Servicios de seguros sociales de salud',value: '6521 Servicios de seguros sociales de salud',},
{label: '6522 Servicios de seguros sociales de riesgos profesionales',value: '6522 Servicios de seguros sociales de riesgos profesionales',},
{label: '6523 Servicios de seguros sociales en riesgos familia',value: '6523 Servicios de seguros sociales en riesgos familia',},
{label: '6531 Régimen de prima media con prestación definida (RPM)',value: '6531 Régimen de prima media con prestación definida (RPM)',},
{label: '6532 Régimen de ahorro individual (RAI)',value: '6532 Régimen de ahorro individual (RAI)',},
{label: '6611 Administración de mercados financieros',value: '6611 Administración de mercados financieros',},
{label: '6612 Corretaje de valores y de contratos de productos básicos',value: '6612 Corretaje de valores y de contratos de productos básicos',},
{label: '6613 Otras actividades relacionadas con el mercado de valores',value: '6613 Otras actividades relacionadas con el mercado de valores',},
{label: '6614 Actividades de las casas de cambio',value: '6614 Actividades de las casas de cambio',},
{label: '6615 Actividades de los profesionales de compra y venta de divisas',value: '6615 Actividades de los profesionales de compra y venta de divisas',},
{label: '6619 Otras actividades auxiliares de las actividades de servicios financieros n.c.p.',value: '6619 Otras actividades auxiliares de las actividades de servicios financieros n.c.p.',},
{label: '6621 Actividades de agentes y corredores de seguros',value: '6621 Actividades de agentes y corredores de seguros',},
{label: '6629 Evaluación de riesgos y daños, y otras actividades de servicios auxiliares',value: '6629 Evaluación de riesgos y daños, y otras actividades de servicios auxiliares',},
{label: '6630 Actividades de administración de fondos',value: '6630 Actividades de administración de fondos',},
{label: '6810 Actividades inmobiliarias realizadas con bienes propios o arrendados',value: '6810 Actividades inmobiliarias realizadas con bienes propios o arrendados',},
{label: '6820 Actividades inmobiliarias realizadas a cambio de una retribución o por contrata',value: '6820 Actividades inmobiliarias realizadas a cambio de una retribución o por contrata',},
{label: '6910 Actividades jurídicas',value: '6910 Actividades jurídicas',},
{label: '6920 Actividades de contabilidad, teneduría de libros, auditoría financiera y asesoría tributaria',value: '6920 Actividades de contabilidad, teneduría de libros, auditoría financiera y asesoría tributaria',},
{label: '7010 Actividades de administración empresarial',value: '7010 Actividades de administración empresarial',},
{label: '7020 Actividades de consultaría de gestión',value: '7020 Actividades de consultaría de gestión',},
{label: '7111 Actividades de arquitectura',value: '7111 Actividades de arquitectura',},
{label: '7112 Actividades de ingeniería y otras actividades conexas de consultoría técnica',value: '7112 Actividades de ingeniería y otras actividades conexas de consultoría técnica',},
{label: '7120 Ensayos y análisis técnicos',value: '7120 Ensayos y análisis técnicos',},
{label: '7210 Investigaciones y desarrollo experimental en el campo de las ciencias naturales y la ingeniería',value: '7210 Investigaciones y desarrollo experimental en el campo de las ciencias naturales y la ingeniería',},
{label: '7220 Investigaciones y desarrollo experimental en el campo de las ciencias sociales y las humanidades',value: '7220 Investigaciones y desarrollo experimental en el campo de las ciencias sociales y las humanidades',},
{label: '7310 Publicidad',value: '7310 Publicidad',},
{label: '7320 Estudios de mercado y realización de encuestas de opinión pública',value: '7320 Estudios de mercado y realización de encuestas de opinión pública',},
{label: '7410 Actividades especializadas de diseño',value: '7410 Actividades especializadas de diseño',},
{label: '7420 Actividades de fotografía',value: '7420 Actividades de fotografía',},
{label: '7490 Otras actividades profesionales, científicas y técnicas n.c.p.',value: '7490 Otras actividades profesionales, científicas y técnicas n.c.p.',},
{label: '7500 Actividades veterinarias',value: '7500 Actividades veterinarias',},
{label: '7710 Alquiler y arrendamiento de vehículos automotores',value: '7710 Alquiler y arrendamiento de vehículos automotores',},
{label: '7721 Alquiler y arrendamiento de equipo recreativo y deportivo',value: '7721 Alquiler y arrendamiento de equipo recreativo y deportivo',},
{label: '7722 Alquiler de videos y discos',value: '7722 Alquiler de videos y discos',},
{label: '7729 Alquiler y arrendamiento de otros efectos personales y enseres domésticos n.c.p.',value: '7729 Alquiler y arrendamiento de otros efectos personales y enseres domésticos n.c.p.',},
{label: '7730 Alquiler y arrendamiento de otros tipos de maquinaria, equipo y bienes tangibles n.c.p.',value: '7730 Alquiler y arrendamiento de otros tipos de maquinaria, equipo y bienes tangibles n.c.p.',},
{label: '7740 Arrendamiento de propiedad intelectual y productos similares, excepto obras protegidas por derechos de autor',value: '7740 Arrendamiento de propiedad intelectual y productos similares, excepto obras protegidas por derechos de autor',},
{label: '7810 Actividades de agencias de empleo',value: '7810 Actividades de agencias de empleo',},
{label: '7820 Actividades de agencias de empleo temporal',value: '7820 Actividades de agencias de empleo temporal',},
{label: '7830 Otras actividades de suministro de recurso humano',value: '7830 Otras actividades de suministro de recurso humano',},
{label: '7911 Actividades de las agencias de viaje',value: '7911 Actividades de las agencias de viaje',},
{label: '7912 Actividades de operadores turísticos',value: '7912 Actividades de operadores turísticos',},
{label: '7990 Otros servicios de reserva y actividades relacionadas',value: '7990 Otros servicios de reserva y actividades relacionadas',},
{label: '8010 Actividades de seguridad privada',value: '8010 Actividades de seguridad privada',},
{label: '8020 Actividades de servicios de sistemas de seguridad',value: '8020 Actividades de servicios de sistemas de seguridad',},
{label: '8030 Actividades de detectives e investigadores privados',value: '8030 Actividades de detectives e investigadores privados',},
{label: '8110 Actividades combinadas de apoyo a instalaciones',value: '8110 Actividades combinadas de apoyo a instalaciones',},
{label: '8121 Limpieza general interior de edificios',value: '8121 Limpieza general interior de edificios',},
{label: '8129 Otras actividades de limpieza de edificios e instalaciones industriales',value: '8129 Otras actividades de limpieza de edificios e instalaciones industriales',},
{label: '8130 Actividades de paisajismo y servicios de mantenimiento conexos',value: '8130 Actividades de paisajismo y servicios de mantenimiento conexos',},
{label: '8211 Actividades combinadas de servicios administrativos de oficina',value: '8211 Actividades combinadas de servicios administrativos de oficina',},
{label: '8219 Fotocopiado, preparación de documentos y otras actividades especializadas de apoyo a oficina',value: '8219 Fotocopiado, preparación de documentos y otras actividades especializadas de apoyo a oficina',},
{label: '8220 Actividades de centros de llamadas (Call center)',value: '8220 Actividades de centros de llamadas (Call center)',},
{label: '8230 Organización de convenciones y eventos comerciales',value: '8230 Organización de convenciones y eventos comerciales',},
{label: '8291 Actividades de agencias de cobranza y oficinas de calificación crediticia',value: '8291 Actividades de agencias de cobranza y oficinas de calificación crediticia',},
{label: '8292 Actividades de envase y empaque',value: '8292 Actividades de envase y empaque',},
{label: '8299 Otras actividades de servicio de apoyo a las empresas n.c.p.',value: '8299 Otras actividades de servicio de apoyo a las empresas n.c.p.',},
{label: '8411 Actividades legislativas de la administración pública',value: '8411 Actividades legislativas de la administración pública',},
{label: '8412 Actividades ejecutivas de la administración pública',value: '8412 Actividades ejecutivas de la administración pública',},
{label: '8413 Regulación de las actividades de organismos que prestan servicios de salud, educativos, culturales y otros servicios sociales, excepto servicios de seguridad social',value: '8413 Regulación de las actividades de organismos que prestan servicios de salud, educativos, culturales y otros servicios sociales, excepto servicios de seguridad social',},
{label: '8414 Actividades reguladoras y facilitadoras de la actividad económica',value: '8414 Actividades reguladoras y facilitadoras de la actividad económica',},
{label: '8415 Actividades de los otros órganos de control',value: '8415 Actividades de los otros órganos de control',},
{label: '8421 Relaciones exteriores',value: '8421 Relaciones exteriores',},
{label: '8422 Actividades de defensa',value: '8422 Actividades de defensa',},
{label: '8423 Orden público y actividades de seguridad',value: '8423 Orden público y actividades de seguridad',},
{label: '8424 Administración de justicia',value: '8424 Administración de justicia',},
{label: '8430 Actividades de planes de seguridad social de afiliación obligatoria',value: '8430 Actividades de planes de seguridad social de afiliación obligatoria',},
{label: '8511 Educación de la primera infancia',value: '8511 Educación de la primera infancia',},
{label: '8512 Educación preescolar',value: '8512 Educación preescolar',},
{label: '8513 Educación básica primaria',value: '8513 Educación básica primaria',},
{label: '8521 Educación básica secundaria',value: '8521 Educación básica secundaria',},
{label: '8522 Educación media académica',value: '8522 Educación media académica',},
{label: '8523 Educación media técnica y de formación laboral',value: '8523 Educación media técnica y de formación laboral',},
{label: '8530 Establecimientos que combinan diferentes niveles de educación',value: '8530 Establecimientos que combinan diferentes niveles de educación',},
{label: '8541 Educación técnica profesional',value: '8541 Educación técnica profesional',},
{label: '8542 Educación tecnológica',value: '8542 Educación tecnológica',},
{label: '8543 Educación de instituciones universitarias o de escuelas tecnológicas',value: '8543 Educación de instituciones universitarias o de escuelas tecnológicas',},
{label: '8544 Educación de universidades',value: '8544 Educación de universidades',},
{label: '8551 Formación académica no formal',value: '8551 Formación académica no formal',},
{label: '8552 Enseñanza deportiva y recreativa',value: '8552 Enseñanza deportiva y recreativa',},
{label: '8553 Enseñanza cultural',value: '8553 Enseñanza cultural',},
{label: '8559 Otros tipos de educación n.c.p.',value: '8559 Otros tipos de educación n.c.p.',},
{label: '8560 Actividades de apoyo a la educación',value: '8560 Actividades de apoyo a la educación',},
{label: '8610 Actividades de hospitales y clínicas, con internación',value: '8610 Actividades de hospitales y clínicas, con internación',},
{label: '8621 Actividades de la práctica médica, sin internación',value: '8621 Actividades de la práctica médica, sin internación',},
{label: '8622 Actividades de la práctica odontológica',value: '8622 Actividades de la práctica odontológica',},
{label: '8691 Actividades de apoyo diagnóstico',value: '8691 Actividades de apoyo diagnóstico',},
{label: '8692 Actividades de apoyo terapéutico',value: '8692 Actividades de apoyo terapéutico',},
{label: '8699 Otras actividades de atención de la salud humana',value: '8699 Otras actividades de atención de la salud humana',},
{label: '8710 Actividades de atención residencial medicalizada de tipo general',value: '8710 Actividades de atención residencial medicalizada de tipo general',},
{label: '8720 Actividades de atención residencial, para el cuidado de pacientes con retardo mental, enfermedad mental y consumo de sustancias psicoactivas',value: '8720 Actividades de atención residencial, para el cuidado de pacientes con retardo mental, enfermedad mental y consumo de sustancias psicoactivas',},
{label: '8730 Actividades de atención en instituciones para el cuidado de personas mayores y/o discapacitadas',value: '8730 Actividades de atención en instituciones para el cuidado de personas mayores y/o discapacitadas',},
{label: '8790 Otras actividades de atención en instituciones con alojamiento',value: '8790 Otras actividades de atención en instituciones con alojamiento',},
{label: '8810 Actividades de asistencia social sin alojamiento para personas mayores y discapacitadas',value: '8810 Actividades de asistencia social sin alojamiento para personas mayores y discapacitadas',},
{label: '8891 Actividades de guarderías para niños y niñas',value: '8891 Actividades de guarderías para niños y niñas',},
{label: '8899 Otras actividades de asistencia social sin alojamiento n.c.p.',value: '8899 Otras actividades de asistencia social sin alojamiento n.c.p.',},
{label: '9001 Creación literaria',value: '9001 Creación literaria',},
{label: '9002 Creación musical',value: '9002 Creación musical',},
{label: '9003 Creación teatral',value: '9003 Creación teatral',},
{label: '9004 Creación audiovisual',value: '9004 Creación audiovisual',},
{label: '9005 Artes plásticas y visuales',value: '9005 Artes plásticas y visuales',},
{label: '9006 Actividades teatrales',value: '9006 Actividades teatrales',},
{label: '9007 Actividades de espectáculos musicales en vivo',value: '9007 Actividades de espectáculos musicales en vivo',},
{label: '9008 Otras actividades de espectáculos en vivo',value: '9008 Otras actividades de espectáculos en vivo',},
{label: '9101 Actividades de bibliotecas y archivos',value: '9101 Actividades de bibliotecas y archivos',},
{label: '9102 Actividades y funcionamiento de museos, conservación de edificios y sitios históricos',value: '9102 Actividades y funcionamiento de museos, conservación de edificios y sitios históricos',},
{label: '9103 Actividades de jardines botánicos, zoológicos y reservas naturales',value: '9103 Actividades de jardines botánicos, zoológicos y reservas naturales',},
{label: '9200 Actividades de juegos de azar y apuestas',value: '9200 Actividades de juegos de azar y apuestas',},
{label: '9311 Gestión de instalaciones deportivas',value: '9311 Gestión de instalaciones deportivas',},
{label: '9312 Actividades de clubes deportivos',value: '9312 Actividades de clubes deportivos',},
{label: '9319 Otras actividades deportivas',value: '9319 Otras actividades deportivas',},
{label: '9321 Actividades de parques de atracciones y parques temáticos',value: '9321 Actividades de parques de atracciones y parques temáticos',},
{label: '9329 Otras actividades recreativas y de esparcimiento n.c.p.',value: '9329 Otras actividades recreativas y de esparcimiento n.c.p.',},
{label: '9411 Actividades de asociaciones empresariales y de empleadores',value: '9411 Actividades de asociaciones empresariales y de empleadores',},
{label: '9412 Actividades de asociaciones profesionales',value: '9412 Actividades de asociaciones profesionales',},
{label: '9420 Actividades de sindicatos de empleados',value: '9420 Actividades de sindicatos de empleados',},
{label: '9491 Actividades de asociaciones religiosas',value: '9491 Actividades de asociaciones religiosas',},
{label: '9492 Actividades de asociaciones políticas',value: '9492 Actividades de asociaciones políticas',},
{label: '9499 Actividades de otras asociaciones n.c.p.',value: '9499 Actividades de otras asociaciones n.c.p.',},
{label: '9511 Mantenimiento y reparación de computadores y de equipo periférico',value: '9511 Mantenimiento y reparación de computadores y de equipo periférico',},
{label: '9512 Mantenimiento y reparación de equipos de comunicación',value: '9512 Mantenimiento y reparación de equipos de comunicación',},
{label: '9521 Mantenimiento y reparación de aparatos electrónicos de consumo',value: '9521 Mantenimiento y reparación de aparatos electrónicos de consumo',},
{label: '9522 Mantenimiento y reparación de aparatos y equipos domésticos y de jardinería',value: '9522 Mantenimiento y reparación de aparatos y equipos domésticos y de jardinería',},
{label: '9523 Reparación de calzado y artículos de cuero',value: '9523 Reparación de calzado y artículos de cuero',},
{label: '9524 Reparación de muebles y accesorios para el hogar',value: '9524 Reparación de muebles y accesorios para el hogar',},
{label: '9529 Mantenimiento y reparación de otros efectos personales y enseres domésticos',value: '9529 Mantenimiento y reparación de otros efectos personales y enseres domésticos',},
{label: '9601 Lavado y limpieza, incluso la limpieza en seco, de productos textiles y de piel',value: '9601 Lavado y limpieza, incluso la limpieza en seco, de productos textiles y de piel',},
{label: '9602 Peluquería y otros tratamientos de belleza',value: '9602 Peluquería y otros tratamientos de belleza',},
{label: '9603 Pompas fúnebres y actividades relacionadas',value: '9603 Pompas fúnebres y actividades relacionadas',},
{label: '9609 Otras actividades de servicios personales n.c.p.',value: '9609 Otras actividades de servicios personales n.c.p.',},
{label: '9700 Actividades de los hogares individuales como empleadores de personal doméstico',value: '9700 Actividades de los hogares individuales como empleadores de personal doméstico',},
{label: '9810 Actividades no diferenciadas de los hogares individuales como productores de bienes para uso propio',value: '9810 Actividades no diferenciadas de los hogares individuales como productores de bienes para uso propio',},
{label: '9820 Actividades no diferenciadas de los hogares individuales como productores de servicios para uso propio',value: '9820 Actividades no diferenciadas de los hogares individuales como productores de servicios para uso propio',},
{label: '9900 Actividades de organizaciones y entidades extraterritoriales',value: '9900 Actividades de organizaciones y entidades extraterritoriales',},
{label: '0010 Asalariados',value: '0010 Asalariados',},
{label: '0020 Pensionados',value: '0020 Pensionados',},
{label: '0081 Personas Naturales sin Actividad Económica',value: '0081 Personas Naturales sin Actividad Económica',},
{label: '0082 Personas Naturales Subsidiadas por Terceros',value: '0082 Personas Naturales Subsidiadas por Terceros',},
{label: '0090 Rentistas de Capital, solo para personas naturales',value: '0090 Rentistas de Capital, solo para personas naturales',},

],
			'Validation': (input) => {
				// We'll receive the 'value' property of the option
				// the player selected.
				return input.trim ().length > 0;
			},
			'Save': (input) => {
				// Save the favorite color in the storage
				//monogatari.storage ({ player: { actividad_economica_codigo: input }});
				monogatari.storage().actividad_economica_codigo = input;
			},
			'Revert': () => {
				// Reset the favorite color property
				//monogatari.storage ({ player: { actividad_economica_codigo: '' }});
				monogatari.storage().actividad_economica_codigo = ' ';
			},
			'Warning': 'Debes seleccionar una actividad!'
		}}, //Input Actividad Economica

		't: Has escogido "{{actividad_economica_codigo}}"',

		'jump logodelaempresa',

	],
	
//Paso3:	
	'logodelaempresa': [
		't: Querido aprendiz, teniendo en cuenta la actividad económica,',
		't: seleccionada y el nombre escogido, debes diseñar, una imagen',
		't: que identifique tu empresa, que a donde quiera que esté presente,',
		't: tu producto, lleve consigo esa imagen que solo lo identifica a él ,',
		't: por su calidad, color o presentación,',
		
		// 't: te recomendamos el siguiente enlace',	
		// 't: https://www.brandcrowd.com/maker/logos?text=ice+cream+&SearchText=&LogoStyle=0&LogoLayoutOrientation=&Colors=&FontStyles=',	
		// 't: te puede servir de gran ayuda para poder construir el logotipo,', 
        // 't: juega con los colores, pero ante todo maneja sobriedad. ¡Adelante!',

		'show message ConsultarPaginaLogo',


		'jump clasificaciondetuempresa',
		
		
	],
		


//Paso 4
      'clasificaciondetuempresa': [
		't: Querido empresario (Aprendiz), usted debe clasificar su empresa,',
		't: de acuerdo con las diferentes opciones estudiadas de clasificación',
		't: ejemplo, si su empresa es una distribuidora de helados,',
		't: deben hacer la clasificación respectiva para tu empresa,',
		't: para este caso la clasificación según su actividad económica sería, comercial,',
		't: porque compra productos terminados y los vende de la misma manera,',
		't: según la procedencia de capital, sería privado, porque todo el capital',
		't: proviene de fuentes privadas, según el número de propietarios, sería sociedad', 
        't: porque se va constituir con 2 o más personas y según el objetivo, sería con animo de lucro,',
		't: porque su finalidad es obtener una utilidad',
		't: se sugiere construir un esquema clasificatorio',
		't: o mapa mental para dejar claridad en esta clasificación',
	    
		'jump clasificacionObjetivo',
		
	],
	
//Paso 4.1
	'clasificacionObjetivo': [
		
		{'Choice': {	
				'Dialog':  't: ¿Según el objetivo cómo clasificarías tu empresa?',
				'p1': {
					'Text': 'Comercial',
					"onChosen": function(){monogatari.storage().empresaObjetivo = "Comercial";},
					'Do': '...',
				},
				'p2': {
					'Text': 'No comercial',
					"onChosen": function(){monogatari.storage().empresaObjetivo = "No Comercial";},
					'Do': '...',
				},
		}},//Choice

		't: Has escogido {{empresaObjetivo}}',
	
		{'Choice': {
				'Dialog':  't: ¿Según la actividad cómo clasificarías tu empresa?',
				'p1': {
					'Text': 'Comercial',
					"onChosen": function(){monogatari.storage().empresaClaseActividad = "Comercial";},
					'Do': '...',
				},
				'p2': {
					'Text': 'De servicios',
					"onChosen": function(){monogatari.storage().empresaClaseActividad = "De servicios";},
					'Do': '...',
				},
				'p3': {
					'Text': 'Industrial',
					"onChosen": function(){monogatari.storage().empresaClaseActividad = "Industrial";},
					'Do': '...',
				},
		}},//Choice
		't: Has escogido {{empresaClaseActividad}}',

		{'Choice': {		
				'Dialog':  't: ¿Según el número de propietarios cómo clasificarías tu empresa?',
				'p1': {
					'Text': 'Individual',
					"onChosen": function(){monogatari.storage().empresaClasePropietario = "Individual";},
					'Do': '...',
				},
				'p2': {
					'Text': 'Sociedad',
					"onChosen": function(){monogatari.storage().empresaClasePropietario = "Sociedad";},
					'Do': '...',
				},
		}},//Choice
		't: Has escogido {{empresaClasePropietario}}',

		{'Choice': {
				
				'Dialog':  't: ¿Según la procedencia de capital cómo clasificarías tu empresa?',
				'p1': {
					'Text': 'Pública',
					'Do': '...',
					"onChosen": function(){monogatari.storage().empresaClaseCapital = "Pública";},
				},
				'p2': {
					'Text': 'Privada',
					'Do': '...',
					"onChosen": function(){monogatari.storage().empresaClaseCapital = "Privada";},
				},
				'p3': {
					'Text': 'Mixta',
					'Do': '...',
					"onChosen": function(){monogatari.storage().empresaClaseCapital = "Mixta";},
				},
		}},

		't: Has escogido {{empresaClaseCapital}}',

		'jump Actadeconstituciónyregistromercantil',

	],

	
	'Actadeconstituciónyregistromercantil': [
		't: Señor empresario (Aprendiz),',
		't: usted deberá constituir una empresa,',
		't: dándole forma legal con el acta de constitución,',
		't: Tereis, les dará un modelo de acta de constitución,',
		't: para que ustedes lo diligencien y lo presenten',
		't: ante la cámara de comercio de su ciudad,',
		't: recuerde que debe constituirla con máximo 6 accionistas,',
		't: donde cada uno debe aportar dinero o bienes que tengan,', 
        't: relación con la actividad económica seleccionada,',
		't: por ejemplo, para la heladería, se necesitaría una nevera industrial de alta capacidad.',
		't: Con este trámite, el funcionario de la cámara de comercio,',
		't: les debe entregar certificado de existencia y representación legal',
		't: y por su puesto el Rut (Registro único tributario)',
		't: Con esa documentación pueden empezar a operar como empresa',
		't: solicitando la resolución de facturación y la apertura de la cuenta bancaria',
		't: en donde harán el depósito del dinero aportado en efectivo',
		't: por los accionistas de la empresa',
		't: Tengan en cuenta que deben elegir a un representante legal.',
		'jump cuentabancaria',	
		
	],	
	

	'cuentabancaria': [
		
		't: Estimado empresario, te daré un formato de apertura de la cuenta bancaria',
		't: desde está cuenta deben manejar todos los pagos e ingresos,',
		't: dado que, por norma tributaria, todas las transacciones',
		't: deben realizarse por el sistema financiero', 
		't: se exceptúan las cajas menores que deben manejar las empresas',
		
		
		{'Input': {
			'Text': 'Selecciona el banco donde deseas abrir tu cuenta:',
			'Type': 'select',
			'Options': [
				{
					label: 'Bancolombia',
					value: 'Bancolombia',
				},
				{
					label: 'Banco de Bogotá',
					value: 'Banco de Bogotá',
				},
				{
					label: 'Davivienda',
					value: 'Davivienda',
				},
				{
					label: 'BBVA',
					value: 'BBVA',
				},
				{
					label: 'Banco de Occidente',
					value: 'Banco de Occidente',
				},
				
			],
			'Validation': (input) => {
				// We'll receive the 'value' property of the option
				// the player selected.
				return input.trim ().length > 0;
			},
			'Save': (input) => {
				// Save the favorite color in the storage
				monogatari.storage().empresaBanco = input;
			},
			'Revert': () => {
				// Reset the favorite color property
				monogatari.storage().empresaBanco = '';
			},
			'Warning': 'You must select a color.'
		}},
		
		't: Has escogido {{empresaBanco}}',
		
		'jump Resoluciondefacturacion',		
		
      
	],
	
	
	'Resoluciondefacturacion': [
	
		't: Querido empresario, te orientaré en el diligenciamiento',
		't: de la solicitud de resolución de facturación,',
		't: si los productos que ustedes van ofrecer son de consumo masivo,',
		't: recomendamos que soliciten además de la resolución de facturación',
		't: electrónica, una resolución de facturación Pos,',
		't: tenga en cuenta este documento cuando veamos el modulo de soportes de contabilidad,',
		't: por el momento te invito a que consultes sobre este tema aplicable desde el 2019 en las empresas.',

		{'Input': {
			'Text': 'Ingresa rango máximo de facturación para tu empresa. Desde 1 hasta:',
			'Type': 'number',
			'Validation': (input) => {
				// Check if the input wasn't empty
				if (input.trim ().length === 0) {
					return false;
				}
				
				// Transform the input string to an integer number
				const age = parseInt (input);
				
				return age > 1;
			},
			'Save': (input) => {
				//monogatari.storage ({ player: { age: parseInt (input) }});
				monogatari.storage().rangoFacturacion = parseInt (input);
			},
			'Revert': () => {
				//monogatari.storage ({ player: { name: '' }});
				monogatari.storage().rangoFacturacion = 2;
			},
			'Warning': 'El valor debe ser mayor a 1.'
		}},

		't: Has escogido {{rangoFacturacion}}',

		'end',
      
	],
	
	
	
	
	
  });
  
