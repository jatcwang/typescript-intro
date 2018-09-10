// Import the whole module
import * as Source from './Source'

Source.exported()



import { exported } from './Source'

exported()




import { exported as renamedExport } from './Source'

renamedExport()




// Default import. In this case defaultE is the defaultExported function in our SourceWithDefaultExport.ts
import defaultE from './SourceWithDefaultExport'

defaultE()

