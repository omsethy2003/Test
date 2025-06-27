import { FaExclamationTriangle } from "@react-icons/all-files/fa/FaExclamationTriangle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/actions";
import useProductFilter from "../../hooks/useProductFilter";
import Paginations from "../shared/Pagination";
import ProductCard from "../shared/ProductCard";
import Filter from "./Filter";
import Loader from "../shared/Loader";

const Products = () => {

    const { isLoading, errorMessage } = useSelector(
        (state) => state.errors
    );
    const {products, categories, pagination} = useSelector(
        (state) => state.products
    )
    const dispatch = useDispatch();
    useProductFilter();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w[90%] 2xl:mx-auto">
            <Filter categories={categories ? categories : []}/>
            {isLoading ? (
               <p className="flex justify-center items-center py-30 font-extrabold">is loading...</p>
            ) : errorMessage ? (
                <div className="flex justify-center items-center h-[200px]">
                    <FaExclamationTriangle className="text-slate-800" text-3xl mr-2/>
                    <span className="text-slate-800 text-lg font-medium">
                        {errorMessage}
                    </span>
                </div>
            ) : (
                <div className="min-h-[700px]">
                    <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                        {products &&
                        products.map((item, i) => <ProductCard key={i} {...item}/>
                        )}
                    </div>
                    <div className="flex justify-center pt-10">
                        <Paginations numberOfPage = {pagination?.totalPages}
                                     totalProfucts = {pagination?.totalElements}       
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Products;