import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options
        ? options.map((el, index) => {
            return (
                <option key={el + '-' + index} className={s.option} value={el}>{el}</option>)
        })
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        let newValue = e.currentTarget.value
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }

    return (
        <select onChange={onChangeCallback} {...restProps} className={s.select}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
