afterAll(async () => {
  await (service as any).prismaService.onModuleDestroy();
});
