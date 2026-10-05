// Локальный технический аудит собранного dist/ (без внешних API): on-page, schema, качество контента.
// Запуск: node scripts/local-audit.mjs
import { auditDist, onpageReportLine } from './seo-agent/lib/onpage-audit.mjs';
import { validateDist, schemaReportLine } from './seo-agent/lib/schema-validate.mjs';
import { auditQualityFromDist, qualityReportLine } from './seo-agent/lib/quality-gates.mjs';

const onpage = auditDist('dist');
console.log('=== On-page ===');
console.log(onpageReportLine(onpage));
for (const i of onpage.issues) console.log(`  [${i.sev}] ${i.url} — ${i.msg}`);

const schema = validateDist('dist');
console.log('\n=== Schema ===');
console.log(schemaReportLine(schema));

const quality = auditQualityFromDist('dist');
console.log('\n=== Качество контента ===');
console.log(qualityReportLine(quality));
