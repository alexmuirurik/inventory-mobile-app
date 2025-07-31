// This file is required for Expo/React Native SQLite migrations - https://orm.drizzle.team/quick-sqlite/expo

import journal from './meta/_journal.json';
import m0000 from './0000_fast_killer_shrike.sql';
import m0001 from './0001_lyrical_nemesis.sql';
import m0002 from './0002_aberrant_kulan_gath.sql';
import m0003 from './0003_flat_fat_cobra.sql';
import m0004 from './0004_low_thena.sql';

  export default {
    journal,
    migrations: {
      m0000,
m0001,
m0002,
m0003,
m0004
    }
  }
  