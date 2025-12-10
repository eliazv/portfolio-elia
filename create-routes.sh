#!/bin/bash

cat > "app/progetti/hostpilot/page.tsx" << 'NEXTJS'
import Hostpilot from '@/pages/projects/Hostpilot';
export default function Page() { return <Hostpilot />; }
NEXTJS

cat > "app/progetti/casa-vacanze/page.tsx" << 'NEXTJS'
import CasaVacanze from '@/pages/projects/CasaVacanze';
export default function Page() { return <CasaVacanze />; }
NEXTJS

cat > "app/progetti/contaspicci/page.tsx" << 'NEXTJS'
import Contaspicci from '@/pages/projects/Contaspicci';
export default function Page() { return <Contaspicci />; }
NEXTJS

cat > "app/progetti/diario-personale/page.tsx" << 'NEXTJS'
import DiarioPersonale from '@/pages/projects/DiarioPersonale';
export default function Page() { return <DiarioPersonale />; }
NEXTJS

cat > "app/progetti/globo-ricambi/page.tsx" << 'NEXTJS'
import GloboRicambi from '@/pages/projects/GloboRicambi';
export default function Page() { return <GloboRicambi />; }
NEXTJS

cat > "app/progetti/in-zona/page.tsx" << 'NEXTJS'
import InZona from '@/pages/projects/InZona';
export default function Page() { return <InZona />; }
NEXTJS

cat > "app/progetti/marafone-romagnolo/page.tsx" << 'NEXTJS'
import MarafoneRomagnolo from '@/pages/projects/MarafoneRomagnolo';
export default function Page() { return <MarafoneRomagnolo />; }
NEXTJS

cat > "app/progetti/scadenzario/page.tsx" << 'NEXTJS'
import Scadenzario from '@/pages/projects/Scadenzario';
export default function Page() { return <Scadenzario />; }
NEXTJS

cat > "app/progetti/toolkit/page.tsx" << 'NEXTJS'
import ToolKit from '@/pages/projects/ToolKit';
export default function Page() { return <ToolKit />; }
NEXTJS

echo "Tutte le route create!"
