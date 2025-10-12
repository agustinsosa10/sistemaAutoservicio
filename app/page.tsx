//pagina principal

import { redirect } from "next/navigation";
export default function Home() {
  redirect('/order/cafe') //cuando levantamos la app nos redirige a la pagina de ordenes con la categoria "cafe"
}
