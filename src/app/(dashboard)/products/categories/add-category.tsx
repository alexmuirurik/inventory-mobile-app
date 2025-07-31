import AddCategoryView from '@/src/modules/categories/add-category.view'
import { useSQLiteContext } from 'expo-sqlite'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { schema } from '@/db/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { router } from 'expo-router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { addCategorySchema } from '@/db/schemas'

const AddCategory = () => {
    const queryClient = useQueryClient()
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema: schema })

    const form = useForm<z.infer<typeof addCategorySchema>>({
        resolver: zodResolver(addCategorySchema),
    })

    const { mutate: createCategory, isPending } = useMutation({
        mutationKey: ['create-category'],
        mutationFn: async ({ name }: { name: string }) => {
            const cat = await drizzleDb.insert(schema.categories).values({
                userId: 1,
                name: name,
            })
            return cat
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['get-categories'] })
            router.navigate({
                pathname: '/(dashboard)/products/categories',
            })
        },
    })

    return (
        <AddCategoryView
            createCategory={createCategory}
            form={form}
            isPending={isPending}
        />
    )
}

export default AddCategory
