export default function FormField({
    labelText,
    inputName,
    inputValue,
    inputType="text",
    onChange
}) {
    return (
        <div className='formData'>
            <label>{labelText}</label>
            <input
                name={inputName}
                value={inputValue}
                onChange={onChange}
                type={inputType}
                />
        </div>
    )
}

{/*}
Aquí tenía un error que me ha costado pillar. 
Desde Form estaba mandando lo siguiente:
<FormField>
    ...,
    onChange={handleDataUpdate}
</FormField>

Y aquí estaba haciendo:
FormField({..., handleDataUpdate})
...
<input onChange={handleDataChange}/>

Sin embargo, si en Form estoy mandando un parámetro
llamado onChange, aquí es lo que debería estar usando
también. 

{*/}