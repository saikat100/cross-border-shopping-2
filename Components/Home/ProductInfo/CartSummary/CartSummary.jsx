import "../CartSummary/CartSummary.module.css";
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
export default function CartSummary() {
    return (
        <>
        <div  className="max-w-7xl px-4 mx-auto sm:px-6 pt-8 pb-8 font-black border-b-4 border-light-blue-500 border-opacity-100">
        Item Details
        </div>
        <div className="max-w-7xl px-4 mx-auto sm:px-6 pt-8 pb-8">
            <table  className="table-auto border-4 border-light-blue-500 border-opacity-75">
            <thead>
                <tr>
                    <th className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">Item</th>
                    <th className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">Description/Size</th>
                    <th className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">Image</th>
                    <th className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">Quantity</th>
                    <th className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">Price</th>
                    <th className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">Total</th>
                    <th className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">https://www.amazon.com/Apple-MWP22AM-A-AirPods-Pro/dp/B07ZPC9QD4/ref=lp_16225009011_1_1?dchild=1</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">S</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">Image</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">1</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">¥55($0.51)</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">¥55($0.51)</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5"><FaEdit className="inline"/><MdDelete className="inline"/></td>
                </tr>
                <tr className="bg-blue-200">
                <td>https://www.amazon.com/Apple-MWP22AM-A-AirPods-Pro/dp/B07ZPC9QD4/ref=lp_16225009011_1_1?dchild=1</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">S</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">Image</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">1</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">¥55($0.51)</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">¥55($0.51)</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5"><FaEdit className="inline"/><MdDelete className="inline"/></td>
                </tr>
                <tr>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">https://www.amazon.com/Apple-MWP22AM-A-AirPods-Pro/dp/B07ZPC9QD4/ref=lp_16225009011_1_1?dchild=1</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">XL</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">Image</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">2</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">¥55($0.51)</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">¥55($0.51)</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5"><FaEdit className="inline"/><MdDelete className="inline"/></td>
                </tr>
                <tr className="bg-blue-200">
                <td>https://www.amazon.com/Apple-MWP22AM-A-AirPods-Pro/dp/B07ZPC9QD4/ref=lp_16225009011_1_1?dchild=1</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">S</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">Image</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">3</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">¥55($0.51)</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">¥55($0.51)</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5"><FaEdit className="inline"/><MdDelete className="inline"/></td>
                </tr>
                <tr>
                <td>https://www.amazon.com/Apple-MWP22AM-A-AirPods-Pro/dp/B07ZPC9QD4/ref=lp_16225009011_1_1?dchild=1</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">S</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">Image</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">3</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">¥55($0.51)</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5">¥55($0.51)</td>
                    <td className="w-2/12 border-4 border-light-blue-500 border-opacity-100 p-0.5"><FaEdit className="inline"/><MdDelete className="inline"/></td>
                </tr>
            </tbody>
        </table>
        </div>
    </>
    )
}
