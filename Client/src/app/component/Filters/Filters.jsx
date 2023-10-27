"use client";
import useStore from "@/store/store";
import { useEffect } from "react";
import {
  Select,
  Radio,
  RadioGroup,
  SelectItem,
  Input,
} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import "./style.css"
const Filters = () => {
  useEffect(() => {
    useStore.getState().getCategory();
  }, []);
  const { filters, categories } = useStore();

  const handleRangeChange = (e) => {
    const minPrice = e.target.value;
    useStore.setState((state) => ({
      filters: {
        ...state.filters,
        minPrice,
      },
    }));
  };
  const handleCategoryChange = (e) => {
    // const category = e.target.value;
    // console.log(category);
    useStore.setState((state) => ({
      filters: {
        ...state.filters,
        category: e.target.value,
      },
    }));
  };
  const handleOrder = (e) => {
    useStore.setState((state) => ({
      filters: {
        ...state.filters,
        order: [{ value: e.target.value }, { value: e.target.value }],
      },
    }));
  };
  return (
    <section>
      <div
        class="fixed top-[8rem] left-4 bottom-0  w-64"
      >
        <nav >
        <Divider orientation="vertical" className="z-[100] h-[50rem] fixed left-[12rem] top-[5rem] custom-gradient"/>
          <div className="flex flex-col justify-start items-start gap-5 ml-5">
            <div className="w-26">
              {/* <label>Price</label>
          <input
            type="range"
            id="price"
            min="0"
            max="10000"
            onChange={handleRangeChange}
            value={filters.minPrice}
            />
          <span>${filters.minPrice}</span> */}
              <Input
                type="number"
                label="Desde:"
                placeholder="0.00"
                labelPlacement="outside"
                onChange={handleRangeChange}
                value={filters.minPrice}
                size="sm"
                className="w-32 "
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                  </div>
                }
              />
            </div>
              

            <div className="mt-5 text-white gap-5  ">
              <Select
                onChange={handleCategoryChange}
                label="Categoria"
                labelPlacement="outside"
                variant="flat"
                size="sm"
                className="text-white w-32 "
              >
                <SelectItem key="all" value="all">
                  all
                </SelectItem>
                {categories.map(({ id, attributes }) => (
                  <SelectItem key={attributes.name} value={attributes.name}>
                    {attributes.name}
                  </SelectItem>
                ))}
              </Select>
              {/* <Select
          onChange={handleOrder}
          label="Orden"
          labelPlacement="outside"
          variant="flat"
          size="sm"
          className="text-white w-52 max-w-xs">
            <SelectItem key="mayor" value="mayor">
              Mayor precio
            </SelectItem>
            <SelectItem key="menor" value="menor">
              Menor precio
            </SelectItem>            
            </Select> */}
            </div>
            <div className="flex flex-row">
              <RadioGroup className="flex flex-row mt-5">
                <Radio
                  onChange={handleOrder}
                  value="mayor"
                  key="mayor"
                  size="md"
                >
                  Mayor precio
                </Radio>
                <Radio
                  onChange={handleOrder}
                  value="menor"
                  key="menor"
                  size="md"
                >
                  Menor precio
                </Radio>
              </RadioGroup>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};
export default Filters;
