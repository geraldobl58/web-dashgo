/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  TextField
} from '@mui/material'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  orderIds: yup.array().of(yup.string()).required('Order Ids is required'),
  businessId: yup.array().of(yup.number()).required('Business Id is required')
})

const Home = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      orderIds: [],
      businessId: []
    }
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const flags = [
    {
      label: 'Opção 1',
      value: 2
    },
    {
      label: 'Opção 2',
      value: 11
    },
    {
      label: 'Opção 3',
      value: 5
    }
  ]

  return (
    <>
      <h3>Implementando CI/CD com Docker/Kubernetes e ArgoCd</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mt-32">
            <Controller
              name="orderIds"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  multiple
                  limitTags={1}
                  options={data}
                  getOptionLabel={(option) => option.title}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField {...params} label="ID" placeholder="ID" />
                  )}
                  onChange={(_, data) =>
                    field.onChange(data.map((item) => item.value))
                  }
                />
              )}
            />

            <div className="flex items-center justify-center">
              {flags.map((item) => (
                <div key={item.label}>
                  <Controller
                    name="businessId"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            required={Boolean(errors.businessId)}
                            value={item.value}
                            checked={field.value.includes(item.value)}
                            onChange={() => {
                              const currentValues = field.value || []
                              if (currentValues.includes(item.value)) {
                                field.onChange(
                                  currentValues.filter(
                                    (val) => val !== item.value
                                  )
                                )
                              } else {
                                field.onChange([...currentValues, item.value])
                              }
                            }}
                          />
                        }
                        label={item.label}
                      />
                    )}
                  />
                </div>
              ))}
            </div>
            <Button type="submit" variant="contained">
              Pesquisar
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}

const data = [
  { title: 'The Shawshank Redemption', value: 1994 },
  { title: 'The Godfather', value: 1972 }
]

export default Home
