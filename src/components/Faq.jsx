const Faq = () => {
	return (
		<section className="bg-white-800 text-gray-900 mt-20 mb-20">
			<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
				<h2 className="text-2xl font-semibold sm:text-4xl">
					¿En qué te ayudamos? Revisa los temas más preguntados
				</h2>
				<p className="mt-4 mb-8 text-gray-400">
					Queremos ayudarle en su compra. A continuación encontrará un listado
					de preguntas y respuestas que le ayudarán a resolver sus inquietudes y
					facilitarán su compra a través de Blotion.
				</p>
				<div className="space-y-4">
					<details className="w-full border rounded-lg">
						<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
							Que puedo comprar en Blotion?
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
							Blotion propone a sus usuarios principalmente productos de salud y
							belleza, productos digitales, implementos electrónicos,
							electrodomésticos, equipos de sonido, productos de cuidado
							personal, muebles de exterior e interior, implementos para el
							hogar y la decoración, juguetes, implementos deportivos, ropa y
							accesorios, productos de ferretería, productos culturales entre
							otros.
						</p>
					</details>
					<details className="w-full border rounded-lg">
						<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
							Puedo comprar productos desde cualquier parte de Colombia?
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
							Sí. A través de nuestra pagina web nuestros clientes en el
							exterior pueden enviar desde cualquier parte del mundo cualquier
							tipo de producto, a sus familiares o amigos en Colombia. <br />{' '}
							<br /> Productos de tecnología, vestuario, ropa hogar y
							electrohogar, se entregan a más 1.200 poblaciones colombianas.
							Productos de mercado sólo se entregan en las áreas metropolitanas
							de Armenia, Bogotá, Bucaramanga, Barranquilla, Cartagena, Cali,
							Cúcuta, Ibague, Medellín, Montería, Manizales, Neiva, Pereira,
							Rionegro (Antioquia), Sincelejo, Santa Marta, Valledupar y
							Villavicencio.
						</p>
					</details>
					<details className="w-full border rounded-lg">
						<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
							Puedo devolver un producto?
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
							<strong>Si es un producto pequeño o mediano: </strong>tienes 30
							días desde que recibes el producto para ir a cualquier tienda
							física de Blotion con la factura o documento que acredite la
							compra. Ten en cuenta que lo debes entregar tal y como lo
							recibiste, con todas sus etiquetas y regalos promocionales. <br />
							<br />
							<strong>Si es un producto grande o muy grande: </strong> llama al
							+57 608 342 8001 y agendaremos el retiro en tu domicilio.
						</p>
					</details>

					<details className="w-full border rounded-lg">
						<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
							Donde puedo cancelar mi pedido?
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
							Si cambias de opinión sobre tu pedido, lo puedes cancelar desde
							Mis compras. La opción estará disponible en distintos momentos
							dependiendo del estado en que se encuentre tu pedido y el tipo de
							entrega.
						</p>
					</details>

					<details className="w-full border rounded-lg">
						<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
							Envios a domicilio
						</summary>
						<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
							Enviamos tu compra a la dirección que ingreses en un rango de
							fecha estimado que te informaremos antes de finalizar el pago. Por
							temas de seguridad, después de terminar la compra no podrás
							cambiar tus datos de envío. <br />
							<br />Si necesitas cambiar la fecha o dirección, puedes cancelar
							el pedido desde Mis compras antes de que esté en camino y volver a
							realizar la compra con los datos de envío correctos.
						</p>
					</details>
				</div>
			</div>
		</section>
	);
};

export default Faq;
