import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useSQLiteContext } from 'expo-sqlite'
import * as schema from '@/db/schema'
import { useQuery } from '@tanstack/react-query'
import ProfileView from '@/src/modules/profile/profile.view'

const ProfileScreen = () => {
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema })

    const { data: user, isLoading } = useQuery({
        queryKey: ['get-user'],
        queryFn: async () => {
            const user = drizzleDb.query.users.findFirst()
            return user
        },
    })

    return <ProfileView user={user} isLoading={isLoading} />
}

export default ProfileScreen
