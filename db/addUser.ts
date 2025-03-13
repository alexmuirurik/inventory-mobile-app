import { ExpoSQLiteDatabase } from 'drizzle-orm/expo-sqlite'
import asyncStorage from 'expo-sqlite/kv-store'
import { users } from './schema'

export const addDummyUser = async (db: ExpoSQLiteDatabase) => {
    const stored = asyncStorage.getItemSync('dbInitialized')
    if (stored) return

    await db.insert(users).values([
        {
            firstName: 'David',
            lastName: 'Chao',
            businessName: 'Business Chao',
            location: 'Juja',
            createdAt: `${new Date()}`,
        },
    ])
}
