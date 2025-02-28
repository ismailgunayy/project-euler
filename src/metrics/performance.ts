import { appendFileSync, existsSync, mkdirSync, readFileSync } from 'fs';

const mode = process.argv[2];
interface Metrics {
  result: any;
  time: string;
  memory: string;
  cpu: string;
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
  const startMem = process.memoryUsage();
  const start = process.hrtime.bigint();
  const startCPU = process.cpuUsage();

  const result = fn();

  const endMem = process.memoryUsage();
  const end = process.hrtime.bigint();
  const endCPU = process.cpuUsage();

  const userCPUTime = (endCPU.user - startCPU.user) / 1000;
  const systemCPUTime = (endCPU.system - startCPU.system) / 1000;

  return {
    result,
    time: formatTime(Number(end - start) / 1_000_000),
    memory: `
      RSS: ${formatMemory(
        Math.max(0, (endMem.rss - startMem.rss) / 1024 / 1024)
      )},
      Heap Total: ${formatMemory(
        Math.max(0, (endMem.heapTotal - startMem.heapTotal) / 1024 / 1024)
      )},
      Heap Used: ${formatMemory(
        Math.max(0, (endMem.heapUsed - startMem.heapUsed) / 1024 / 1024)
      )},
      External: ${formatMemory(
        Math.max(0, (endMem.external - startMem.external) / 1024 / 1024)
      )}
    `,
    cpu: `
      User: ${userCPUTime.toFixed(2)}ms,
      System: ${systemCPUTime.toFixed(2)}ms
    `,
  };
}

export function logResults(
  problemNumber: number,
  { result, time, memory, cpu }: Metrics
) {
  const logDir = 'logs';
  if (!existsSync(logDir)) {
    mkdirSync(logDir);
  }

  const logFilePath = `${logDir}/performance_logs_problem_${problemNumber}.txt`;

  let trialNumber = 1;
  if (existsSync(logFilePath)) {
    const fileContent = readFileSync(logFilePath, 'utf-8');
    trialNumber = (fileContent.match(/Trial \d+/g) || []).length + 1;
  }

  const timestamp = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(new Date());

  const logMessage = `
    Problem ${problemNumber} | ${
    mode === 'solve' ? `Trial ${trialNumber}` : 'Test'
  }
    =================================
    Timestamp: ${timestamp}
    Result: ${result}
    Time:   ${time}
    Memory: ${memory}
    CPU:    ${cpu}
    =================================
  `;

  console.log(logMessage);

  if (mode === 'solve') {
    appendFileSync(logFilePath, logMessage);
  }
}
