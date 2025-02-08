
import CartAlert from "@/components/CartAlrt/CartAlt"
import CompanyBar from "@/components/CompanyBar/CompanyBar"
import EmptyAlert from "@/components/EmpAlert/EmpAlert"
import OtherProduct from "@/components/OtherProduct/OtherProduct"
import OtherSeller from "@/components/OtherSeller/OtherSeller"
import ProdDetail from "@/components/ProdDetail/ProdDetail"
function ProductDetail({params}:{params:{productdetail:string}}) {
  return (
    <main>
      <ProdDetail id={params.productdetail} />
      <OtherProduct/>
      <OtherSeller/>
      <EmptyAlert/>
      <CartAlert/>
      <CompanyBar/>
      
    </main>
  )
}

export default ProductDetail