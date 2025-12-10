#!/bin/bash

# Array di progetti
projects=(
  "CasaVacanze:casa-vacanze"
  "Contaspicci:contaspicci"
  "DiarioPersonale:diario-personale"
  "GloboRicambi:globo-ricambi"
  "Hostpilot:hostpilot"
  "InZona:in-zona"
  "MarafoneRomagnolo:marafone-romagnolo"
  "Scadenzario:scadenzario"
  "ToolKit:toolkit"
)

for project in "${projects[@]}"; do
  IFS=':' read -r component slug <<< "$project"
  
  # Copia il file originale
  cp "src_old/pages/projects/${component}.tsx" "src/pages/projects/${component}.tsx"
  
  # Aggiungi 'use client' all'inizio
  sed -i "1i'use client';\n" "src/pages/projects/${component}.tsx"
  
  # Sostituisci useNavigate con useRouter
  sed -i 's/import { useNavigate } from "react-router-dom";/import { useRouter } from "next\/navigation";/g' "src/pages/projects/${component}.tsx"
  sed -i 's/const navigate = useNavigate();/const router = useRouter();/g' "src/pages/projects/${component}.tsx"
  sed -i 's/navigate(/router.push(/g' "src/pages/projects/${component}.tsx"
  
  # Crea la page.tsx Next.js
  cat > "app/progetti/${slug}/page.tsx" << NEXTJS
import ${component} from '@/pages/projects/${component}';

export default function Page() {
  return <${component} />;
}
NEXTJS

done

echo "Tutti i progetti sono stati convertiti!"
