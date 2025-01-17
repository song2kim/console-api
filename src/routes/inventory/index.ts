import express from 'express';

import changeHistoryRouter from './change-history';
import cloudServiceRouter from './cloud-service';
import cloudServiceTypeRouter from './cloud-service-type';
import collectorRouter from './collector';
import jobRouter from './job';
import jobTaskRouter from './job-task';
import noteRouter from './note';
import regionRouter from './region';
import resourceGroupRouter from './resource-group';

const router = express.Router();

router.use('/region', regionRouter);
router.use('/cloud-service', cloudServiceRouter);
router.use('/cloud-service-type', cloudServiceTypeRouter);
router.use('/resource-group', resourceGroupRouter);
router.use('/collector', collectorRouter);
router.use('/job', jobRouter);
router.use('/job-task', jobTaskRouter);
router.use('/change-history', changeHistoryRouter);
router.use('/note', noteRouter);

export default router;
