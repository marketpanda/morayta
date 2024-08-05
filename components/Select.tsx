import React, { useEffect, useState } from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import SelectItem from './SelectItem';

const SelectDemo = () => {
    const [value, setValue] = useState("")
    
    useEffect(() => {
        console.log("value ", value)
    }, [value])
    return (
      <Select.Root value={value} onValueChange={setValue}>
        <Select.Trigger
          className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
          aria-label="Food"
        >
          <Select.Value placeholder="Select your profession" />
          <Select.Icon className="text-violet11">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-[5px]">
              <Select.Group>
                <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                  Architecture
                </Select.Label>
                <SelectItem value="history_of_architecture">History of Architecture</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="building_laws">Building Laws</SelectItem>
                <SelectItem value="professional_practice">Professional Practice</SelectItem>
                <SelectItem value="building_materials_and_technology">Building Materials and Technology</SelectItem>
              </Select.Group>
    
              <Select.Separator className="h-[1px] bg-violet6 m-[5px]" />
    
              <Select.Group>
                <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                  Engineering
                </Select.Label>
                <SelectItem value="plumbing">Plumbing</SelectItem>
                <SelectItem value="electrical">Electrical</SelectItem>
                 
              </Select.Group>
     
    
              
            </Select.Viewport>
            <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    );
} 



export default SelectDemo;