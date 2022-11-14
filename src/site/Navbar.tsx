import React from "react";
type CarsType = {
    cars: Array<UniqueCarsType>
}
type UniqueCarsType = {
    id: number
    manufacturer: string
    model: string
}
export const Navbar = (props:CarsType) => {
    return (
        <ul>
            {props.cars.map((objesctFromCarsType,index ) => {

                return (
                    <li key={objesctFromCarsType.id}>
                    <span>{objesctFromCarsType.manufacturer}</span>
                    <span> model: {objesctFromCarsType.model}</span>
                    </li>
                )
                })}
        </ul>
    );
};