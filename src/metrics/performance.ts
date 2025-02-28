interface Metrics {
  result: any;
  time: string;
  memory: string;
}

function formatTime(ms: number): string {
  if (ms < 1) return `${(ms * 1000).toFixed(2)}μs`;
  if (ms < 1000) return `${ms.toFixed(2)}ms`;
  return `${(ms / 1000).toFixed(2)}s`;
}

function formatMemory(mb: number): string {
  if (mb < 1) return `${(mb * 1024).toFixed(2)}KB`;
  return `${mb.toFixed(2)}MB`;
}

export function measurePerformance(fn: () => any): Metrics {
  const startMem = process.memoryUsage().heapUsed;
  const start = process.hrtime.bigint();

  const result = fn();

  const endMem = process.memoryUsage().heapUsed;
  const end = process.hrtime.bigint();

  return {
    result,
    time: formatTime(Number(end - start) / 1_000_000),
    memory: formatMemory((endMem - startMem) / 1024 / 1024),
  };
}

export function logResults(
  problemNumber: number,
  { result, time, memory }: Metrics
) {
  console.log('\n' + '='.repeat(40));
  console.log(`Problem ${problemNumber} Results`);
  console.log('='.repeat(40));
  console.log(`Result: ${result}`);
  console.log(`Time:   ${time}`);
  console.log(`Memory: ${memory}`);
  console.log('='.repeat(40) + '\n');
}
