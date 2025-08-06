import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useSQLiteContext } from 'expo-sqlite'
import * as schema from '@/db/schema'
import { useMutation, useQuery } from '@tanstack/react-query'
import ProfileView from '@/src/modules/profile/profile.view'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateProfileSchema } from '@/db/zod-schemas'

const ProfileScreen = () => {
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema })

    const { data: user, isLoading } = useQuery({
        queryKey: ['get-user'],
        queryFn: async () => {
            const user = await drizzleDb.query.users.findFirst()
            return user ? user : null
        },
    })

    const { mutate: updateUser, isPending } = useMutation({
        mutationKey: ['update-user'],
        mutationFn: async (data: z.infer<typeof updateProfileSchema>) => {
            if (user) {
                const update = await drizzleDb.update(schema.users).set(data)
                return update
            }

            const newUser = await drizzleDb.insert(schema.users).values(data)
            return newUser
        },
    })

    const form = useForm<z.infer<typeof updateProfileSchema>>({
        resolver: zodResolver(updateProfileSchema),
        defaultValues: {
            firstName: user?.firstName,
            lastName: user?.lastName,
            businessName: user?.businessName,
            location: user?.location
        }
        
    })

    return (
        <ProfileView
            isPending={isPending}
            form={form}
            user={user}
            isLoading={isLoading}
            updateUser={updateUser}
        />
    )
}

export default ProfileScreen
