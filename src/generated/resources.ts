import { BaseClient } from '../base';
import type { ApiResult, GeneratedMethodArgs } from '../types';
import { OPERATION_DEFINITIONS } from './operations';

export interface GeneratedResourceConstructors {
  accountantDashboard: AccountantDashboardResource;
  accountingOffice: AccountingOfficeResource;
  activity: ActivityResource;
  asset: AssetResource;
  attestation: AttestationResource;
  balance: BalanceResource;
  balanceSheet: BalanceSheetResource;
  bank: BankResource;
  company: CompanyResource;
  contact: ContactResource;
  country: CountryResource;
  crm: CrmResource;
  currency: CurrencyResource;
  customer: CustomerResource;
  deliveryAddress: DeliveryAddressResource;
  department: DepartmentResource;
  division: DivisionResource;
  document: DocumentResource;
  documentArchive: DocumentArchiveResource;
  employee: EmployeeResource;
  event: EventResource;
  incomingInvoice: IncomingInvoiceResource;
  internal: InternalResource;
  inventory: InventoryResource;
  invoice: InvoiceResource;
  invoiceRemark: InvoiceRemarkResource;
  ledger: LedgerResource;
  municipality: MunicipalityResource;
  order: OrderResource;
  pension: PensionResource;
  pickupPoint: PickupPointResource;
  platformAgnostic: PlatformAgnosticResource;
  product: ProductResource;
  project: ProjectResource;
  purchaseOrder: PurchaseOrderResource;
  reminder: ReminderResource;
  resultbudget: ResultbudgetResource;
  saft: SaftResource;
  salary: SalaryResource;
  subscription: SubscriptionResource;
  supplier: SupplierResource;
  supplierCustomer: SupplierCustomerResource;
  supplierInvoice: SupplierInvoiceResource;
  supportDashboard: SupportDashboardResource;
  timesheet: TimesheetResource;
  token: TokenResource;
  transportType: TransportTypeResource;
  travelExpense: TravelExpenseResource;
  userLicense: UserLicenseResource;
  vatReturns: VatReturnsResource;
  vatTermSizeSettings: VatTermSizeSettingsResource;
  voucherApprovalListElement: VoucherApprovalListElementResource;
  voucherInbox: VoucherInboxResource;
  voucherMessage: VoucherMessageResource;
  voucherStatus: VoucherStatusResource;
  yearEnd: YearEndResource;
}

export class AccountantDashboardResource extends BaseClient {
  AccountantDashboardNews_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AccountantDashboardNews_get, args);
  }

  AccountantDashboardNews_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AccountantDashboardNews_get, args);
  }

  AccountantDashboardNewsTags_getTags(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AccountantDashboardNewsTags_getTags, args);
  }

  AccountantDashboardNewsTags_getTagsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AccountantDashboardNewsTags_getTags, args);
  }

}

export class AccountingOfficeResource extends BaseClient {
  AccountingOfficeReconciliationsControl_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControl_get, args);
  }

  AccountingOfficeReconciliationsControl_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControl_get, args);
  }

  AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliation(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliation, args);
  }

  AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliationWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliation, args);
  }

  AccountingOfficeReconciliationsControlReconcile_reconcile(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControlReconcile_reconcile, args);
  }

  AccountingOfficeReconciliationsControlReconcile_reconcileWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControlReconcile_reconcile, args);
  }

  AccountingOfficeReconciliationsControlRequestControl_requestControl(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControlRequestControl_requestControl, args);
  }

  AccountingOfficeReconciliationsControlRequestControl_requestControlWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AccountingOfficeReconciliationsControlRequestControl_requestControl, args);
  }

}

export class ActivityResource extends BaseClient {
  Activity_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Activity_get, args);
  }

  Activity_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Activity_get, args);
  }

  Activity_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Activity_post, args);
  }

  Activity_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Activity_post, args);
  }

  Activity_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Activity_search, args);
  }

  Activity_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Activity_search, args);
  }

  ActivityForTimeSheet_getForTimeSheet(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ActivityForTimeSheet_getForTimeSheet, args);
  }

  ActivityForTimeSheet_getForTimeSheetWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ActivityForTimeSheet_getForTimeSheet, args);
  }

  ActivityList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ActivityList_postList, args);
  }

  ActivityList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ActivityList_postList, args);
  }

}

export class AssetResource extends BaseClient {
  Asset_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Asset_delete, args);
  }

  Asset_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Asset_delete, args);
  }

  Asset_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Asset_get, args);
  }

  Asset_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Asset_get, args);
  }

  Asset_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Asset_post, args);
  }

  Asset_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Asset_post, args);
  }

  Asset_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Asset_put, args);
  }

  Asset_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Asset_put, args);
  }

  Asset_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Asset_search, args);
  }

  Asset_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Asset_search, args);
  }

  AssetAssetsExist_getAssetsExist(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AssetAssetsExist_getAssetsExist, args);
  }

  AssetAssetsExist_getAssetsExistWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AssetAssetsExist_getAssetsExist, args);
  }

  AssetBalanceAccountsSum_balanceAccountsSum(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AssetBalanceAccountsSum_balanceAccountsSum, args);
  }

  AssetBalanceAccountsSum_balanceAccountsSumWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AssetBalanceAccountsSum_balanceAccountsSum, args);
  }

  AssetCanDelete_canDelete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AssetCanDelete_canDelete, args);
  }

  AssetCanDelete_canDeleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AssetCanDelete_canDelete, args);
  }

  AssetDeleteImport_deleteImport(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AssetDeleteImport_deleteImport, args);
  }

  AssetDeleteImport_deleteImportWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AssetDeleteImport_deleteImport, args);
  }

  AssetDeleteStartingBalance_deleteStartingBalance(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AssetDeleteStartingBalance_deleteStartingBalance, args);
  }

  AssetDeleteStartingBalance_deleteStartingBalanceWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AssetDeleteStartingBalance_deleteStartingBalance, args);
  }

  AssetDuplicate_postDuplicate(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AssetDuplicate_postDuplicate, args);
  }

  AssetDuplicate_postDuplicateWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AssetDuplicate_postDuplicate, args);
  }

  AssetList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AssetList_postList, args);
  }

  AssetList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AssetList_postList, args);
  }

  AssetPostings_getPostings(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AssetPostings_getPostings, args);
  }

  AssetPostings_getPostingsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AssetPostings_getPostings, args);
  }

  AssetUpload_upload(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AssetUpload_upload, args);
  }

  AssetUpload_uploadWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AssetUpload_upload, args);
  }

}

export class AttestationResource extends BaseClient {
  AttestationAddApprover_addApprover(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AttestationAddApprover_addApprover, args);
  }

  AttestationAddApprover_addApproverWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AttestationAddApprover_addApprover, args);
  }

  AttestationAddApproverPermission_addApproverPermission(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AttestationAddApproverPermission_addApproverPermission, args);
  }

  AttestationAddApproverPermission_addApproverPermissionWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AttestationAddApproverPermission_addApproverPermission, args);
  }

  AttestationCompanyModules_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.AttestationCompanyModules_get, args);
  }

  AttestationCompanyModules_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.AttestationCompanyModules_get, args);
  }

}

export class BalanceResource extends BaseClient {
  BalanceReconciliationAccountVouchers_getVouchers(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BalanceReconciliationAccountVouchers_getVouchers, args);
  }

  BalanceReconciliationAccountVouchers_getVouchersWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BalanceReconciliationAccountVouchers_getVouchers, args);
  }

  BalanceReconciliationAnnualContext_postAnnualContext(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BalanceReconciliationAnnualContext_postAnnualContext, args);
  }

  BalanceReconciliationAnnualContext_postAnnualContextWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BalanceReconciliationAnnualContext_postAnnualContext, args);
  }

  BalanceReconciliationAttachmentPdf_getAttachment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BalanceReconciliationAttachmentPdf_getAttachment, args);
  }

  BalanceReconciliationAttachmentPdf_getAttachmentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BalanceReconciliationAttachmentPdf_getAttachment, args);
  }

}

export class BalanceSheetResource extends BaseClient {
  BalanceSheet_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BalanceSheet_search, args);
  }

  BalanceSheet_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BalanceSheet_search, args);
  }

}

export class BankResource extends BaseClient {
  Bank_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Bank_get, args);
  }

  Bank_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Bank_get, args);
  }

  Bank_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Bank_search, args);
  }

  Bank_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Bank_search, args);
  }

  BankReconciliation_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliation_delete, args);
  }

  BankReconciliation_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliation_delete, args);
  }

  BankReconciliation_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliation_get, args);
  }

  BankReconciliation_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliation_get, args);
  }

  BankReconciliation_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliation_post, args);
  }

  BankReconciliation_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliation_post, args);
  }

  BankReconciliation_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliation_put, args);
  }

  BankReconciliation_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliation_put, args);
  }

  BankReconciliation_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliation_search, args);
  }

  BankReconciliation_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliation_search, args);
  }

  BankReconciliationAdjustment_adjustment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationAdjustment_adjustment, args);
  }

  BankReconciliationAdjustment_adjustmentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationAdjustment_adjustment, args);
  }

  BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactions(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactions, args);
  }

  BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactionsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactions, args);
  }

  BankReconciliationLast_last(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationLast_last, args);
  }

  BankReconciliationLast_lastWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationLast_last, args);
  }

  BankReconciliationLastClosed_lastClosed(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationLastClosed_lastClosed, args);
  }

  BankReconciliationLastClosed_lastClosedWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationLastClosed_lastClosed, args);
  }

  BankReconciliationMatch_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatch_delete, args);
  }

  BankReconciliationMatch_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatch_delete, args);
  }

  BankReconciliationMatch_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatch_get, args);
  }

  BankReconciliationMatch_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatch_get, args);
  }

  BankReconciliationMatch_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatch_post, args);
  }

  BankReconciliationMatch_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatch_post, args);
  }

  BankReconciliationMatch_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatch_put, args);
  }

  BankReconciliationMatch_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatch_put, args);
  }

  BankReconciliationMatch_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatch_search, args);
  }

  BankReconciliationMatch_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatch_search, args);
  }

  BankReconciliationMatchCount_count(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatchCount_count, args);
  }

  BankReconciliationMatchCount_countWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatchCount_count, args);
  }

  BankReconciliationMatchesCounter_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatchesCounter_get, args);
  }

  BankReconciliationMatchesCounter_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatchesCounter_get, args);
  }

  BankReconciliationMatchesCounter_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatchesCounter_post, args);
  }

  BankReconciliationMatchesCounter_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatchesCounter_post, args);
  }

  BankReconciliationMatchQuery_query(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatchQuery_query, args);
  }

  BankReconciliationMatchQuery_queryWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatchQuery_query, args);
  }

  BankReconciliationMatchSuggest_suggest(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatchSuggest_suggest, args);
  }

  BankReconciliationMatchSuggest_suggestWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationMatchSuggest_suggest, args);
  }

  BankReconciliationPaymentType_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationPaymentType_get, args);
  }

  BankReconciliationPaymentType_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationPaymentType_get, args);
  }

  BankReconciliationPaymentType_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationPaymentType_search, args);
  }

  BankReconciliationPaymentType_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationPaymentType_search, args);
  }

  BankReconciliationSettings_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationSettings_get, args);
  }

  BankReconciliationSettings_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationSettings_get, args);
  }

  BankReconciliationSettings_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationSettings_post, args);
  }

  BankReconciliationSettings_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationSettings_post, args);
  }

  BankReconciliationSettings_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationSettings_put, args);
  }

  BankReconciliationSettings_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationSettings_put, args);
  }

  BankReconciliationTransactionsUnmatchedcsv_csvTransactions(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankReconciliationTransactionsUnmatchedcsv_csvTransactions, args);
  }

  BankReconciliationTransactionsUnmatchedcsv_csvTransactionsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankReconciliationTransactionsUnmatchedcsv_csvTransactions, args);
  }

  BankStatement_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankStatement_delete, args);
  }

  BankStatement_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankStatement_delete, args);
  }

  BankStatement_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankStatement_get, args);
  }

  BankStatement_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankStatement_get, args);
  }

  BankStatement_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankStatement_search, args);
  }

  BankStatement_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankStatement_search, args);
  }

  BankStatementImport_importBankStatement(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankStatementImport_importBankStatement, args);
  }

  BankStatementImport_importBankStatementWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankStatementImport_importBankStatement, args);
  }

  BankStatementTransaction_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankStatementTransaction_get, args);
  }

  BankStatementTransaction_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankStatementTransaction_get, args);
  }

  BankStatementTransaction_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankStatementTransaction_search, args);
  }

  BankStatementTransaction_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankStatementTransaction_search, args);
  }

  BankStatementTransactionDetails_getDetails(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.BankStatementTransactionDetails_getDetails, args);
  }

  BankStatementTransactionDetails_getDetailsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.BankStatementTransactionDetails_getDetails, args);
  }

}

export class CompanyResource extends BaseClient {
  Company_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Company_get, args);
  }

  Company_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Company_get, args);
  }

  Company_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Company_put, args);
  }

  Company_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Company_put, args);
  }

  CompanyDivisions_getDivisions(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CompanyDivisions_getDivisions, args);
  }

  CompanyDivisions_getDivisionsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CompanyDivisions_getDivisions, args);
  }

  CompanySalesmodules_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CompanySalesmodules_get, args);
  }

  CompanySalesmodules_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CompanySalesmodules_get, args);
  }

  CompanySalesmodules_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CompanySalesmodules_post, args);
  }

  CompanySalesmodules_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CompanySalesmodules_post, args);
  }

  CompanySettingsAltinn_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CompanySettingsAltinn_put, args);
  }

  CompanySettingsAltinn_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CompanySettingsAltinn_put, args);
  }

  CompanySettingsAltinn_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CompanySettingsAltinn_search, args);
  }

  CompanySettingsAltinn_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CompanySettingsAltinn_search, args);
  }

  CompanyWithLoginAccess_getWithLoginAccess(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CompanyWithLoginAccess_getWithLoginAccess, args);
  }

  CompanyWithLoginAccess_getWithLoginAccessWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CompanyWithLoginAccess_getWithLoginAccess, args);
  }

}

export class ContactResource extends BaseClient {
  Contact_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Contact_get, args);
  }

  Contact_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Contact_get, args);
  }

  Contact_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Contact_post, args);
  }

  Contact_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Contact_post, args);
  }

  Contact_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Contact_put, args);
  }

  Contact_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Contact_put, args);
  }

  Contact_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Contact_search, args);
  }

  Contact_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Contact_search, args);
  }

  ContactList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ContactList_deleteByIds, args);
  }

  ContactList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ContactList_deleteByIds, args);
  }

  ContactList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ContactList_postList, args);
  }

  ContactList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ContactList_postList, args);
  }

}

export class CountryResource extends BaseClient {
  Country_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Country_get, args);
  }

  Country_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Country_get, args);
  }

  Country_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Country_search, args);
  }

  Country_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Country_search, args);
  }

}

export class CrmResource extends BaseClient {
  CrmProspect_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CrmProspect_get, args);
  }

  CrmProspect_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CrmProspect_get, args);
  }

  CrmProspect_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CrmProspect_search, args);
  }

  CrmProspect_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CrmProspect_search, args);
  }

}

export class CurrencyResource extends BaseClient {
  Currency_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Currency_get, args);
  }

  Currency_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Currency_get, args);
  }

  Currency_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Currency_search, args);
  }

  Currency_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Currency_search, args);
  }

  CurrencyExchangeRate_convertCurrencyAmount(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CurrencyExchangeRate_convertCurrencyAmount, args);
  }

  CurrencyExchangeRate_convertCurrencyAmountWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CurrencyExchangeRate_convertCurrencyAmount, args);
  }

  CurrencyExchangeRate_getAmountCurrency(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CurrencyExchangeRate_getAmountCurrency, args);
  }

  CurrencyExchangeRate_getAmountCurrencyWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CurrencyExchangeRate_getAmountCurrency, args);
  }

  CurrencyRate_getRate(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CurrencyRate_getRate, args);
  }

  CurrencyRate_getRateWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CurrencyRate_getRate, args);
  }

}

export class CustomerResource extends BaseClient {
  Customer_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Customer_delete, args);
  }

  Customer_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Customer_delete, args);
  }

  Customer_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Customer_get, args);
  }

  Customer_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Customer_get, args);
  }

  Customer_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Customer_post, args);
  }

  Customer_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Customer_post, args);
  }

  Customer_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Customer_put, args);
  }

  Customer_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Customer_put, args);
  }

  Customer_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Customer_search, args);
  }

  Customer_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Customer_search, args);
  }

  CustomerCategory_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CustomerCategory_get, args);
  }

  CustomerCategory_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CustomerCategory_get, args);
  }

  CustomerCategory_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CustomerCategory_post, args);
  }

  CustomerCategory_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CustomerCategory_post, args);
  }

  CustomerCategory_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CustomerCategory_put, args);
  }

  CustomerCategory_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CustomerCategory_put, args);
  }

  CustomerCategory_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CustomerCategory_search, args);
  }

  CustomerCategory_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CustomerCategory_search, args);
  }

  CustomerList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CustomerList_postList, args);
  }

  CustomerList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CustomerList_postList, args);
  }

  CustomerList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.CustomerList_putList, args);
  }

  CustomerList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.CustomerList_putList, args);
  }

}

export class DeliveryAddressResource extends BaseClient {
  DeliveryAddress_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DeliveryAddress_get, args);
  }

  DeliveryAddress_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DeliveryAddress_get, args);
  }

  DeliveryAddress_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DeliveryAddress_put, args);
  }

  DeliveryAddress_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DeliveryAddress_put, args);
  }

  DeliveryAddress_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DeliveryAddress_search, args);
  }

  DeliveryAddress_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DeliveryAddress_search, args);
  }

}

export class DepartmentResource extends BaseClient {
  Department_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Department_delete, args);
  }

  Department_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Department_delete, args);
  }

  Department_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Department_get, args);
  }

  Department_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Department_get, args);
  }

  Department_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Department_post, args);
  }

  Department_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Department_post, args);
  }

  Department_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Department_put, args);
  }

  Department_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Department_put, args);
  }

  Department_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Department_search, args);
  }

  Department_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Department_search, args);
  }

  DepartmentList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DepartmentList_postList, args);
  }

  DepartmentList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DepartmentList_postList, args);
  }

  DepartmentList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DepartmentList_putList, args);
  }

  DepartmentList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DepartmentList_putList, args);
  }

  DepartmentQuery_query(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DepartmentQuery_query, args);
  }

  DepartmentQuery_queryWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DepartmentQuery_query, args);
  }

}

export class DivisionResource extends BaseClient {
  Division_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Division_post, args);
  }

  Division_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Division_post, args);
  }

  Division_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Division_put, args);
  }

  Division_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Division_put, args);
  }

  Division_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Division_search, args);
  }

  Division_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Division_search, args);
  }

  DivisionList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DivisionList_postList, args);
  }

  DivisionList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DivisionList_postList, args);
  }

  DivisionList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DivisionList_putList, args);
  }

  DivisionList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DivisionList_putList, args);
  }

}

export class DocumentResource extends BaseClient {
  Document_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Document_get, args);
  }

  Document_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Document_get, args);
  }

  DocumentContent_downloadContent(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentContent_downloadContent, args);
  }

  DocumentContent_downloadContentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentContent_downloadContent, args);
  }

}

export class DocumentArchiveResource extends BaseClient {
  DocumentArchive_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchive_delete, args);
  }

  DocumentArchive_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchive_delete, args);
  }

  DocumentArchive_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchive_put, args);
  }

  DocumentArchive_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchive_put, args);
  }

  DocumentArchiveAccount_accountPost(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveAccount_accountPost, args);
  }

  DocumentArchiveAccount_accountPostWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveAccount_accountPost, args);
  }

  DocumentArchiveAccount_getAccount(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveAccount_getAccount, args);
  }

  DocumentArchiveAccount_getAccountWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveAccount_getAccount, args);
  }

  DocumentArchiveCustomer_customerPost(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveCustomer_customerPost, args);
  }

  DocumentArchiveCustomer_customerPostWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveCustomer_customerPost, args);
  }

  DocumentArchiveCustomer_getCustomer(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveCustomer_getCustomer, args);
  }

  DocumentArchiveCustomer_getCustomerWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveCustomer_getCustomer, args);
  }

  DocumentArchiveDynamicControlForm_dynamicControlFormPost(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveDynamicControlForm_dynamicControlFormPost, args);
  }

  DocumentArchiveDynamicControlForm_dynamicControlFormPostWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveDynamicControlForm_dynamicControlFormPost, args);
  }

  DocumentArchiveDynamicControlForm_getDynamicControlForm(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveDynamicControlForm_getDynamicControlForm, args);
  }

  DocumentArchiveDynamicControlForm_getDynamicControlFormWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveDynamicControlForm_getDynamicControlForm, args);
  }

  DocumentArchiveEmployee_employeePost(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveEmployee_employeePost, args);
  }

  DocumentArchiveEmployee_employeePostWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveEmployee_employeePost, args);
  }

  DocumentArchiveEmployee_getEmployee(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveEmployee_getEmployee, args);
  }

  DocumentArchiveEmployee_getEmployeeWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveEmployee_getEmployee, args);
  }

  DocumentArchiveProduct_getProduct(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveProduct_getProduct, args);
  }

  DocumentArchiveProduct_getProductWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveProduct_getProduct, args);
  }

  DocumentArchiveProduct_productPost(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveProduct_productPost, args);
  }

  DocumentArchiveProduct_productPostWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveProduct_productPost, args);
  }

  DocumentArchiveProject_getProject(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveProject_getProject, args);
  }

  DocumentArchiveProject_getProjectWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveProject_getProject, args);
  }

  DocumentArchiveProject_projectPost(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveProject_projectPost, args);
  }

  DocumentArchiveProject_projectPostWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveProject_projectPost, args);
  }

  DocumentArchiveReception_receptionPost(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveReception_receptionPost, args);
  }

  DocumentArchiveReception_receptionPostWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveReception_receptionPost, args);
  }

  DocumentArchiveSupplier_getSupplier(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveSupplier_getSupplier, args);
  }

  DocumentArchiveSupplier_getSupplierWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveSupplier_getSupplier, args);
  }

  DocumentArchiveSupplier_supplierPost(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.DocumentArchiveSupplier_supplierPost, args);
  }

  DocumentArchiveSupplier_supplierPostWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.DocumentArchiveSupplier_supplierPost, args);
  }

}

export class EmployeeResource extends BaseClient {
  Employee_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Employee_get, args);
  }

  Employee_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Employee_get, args);
  }

  Employee_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Employee_post, args);
  }

  Employee_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Employee_post, args);
  }

  Employee_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Employee_put, args);
  }

  Employee_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Employee_put, args);
  }

  Employee_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Employee_search, args);
  }

  Employee_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Employee_search, args);
  }

  EmployeeCategory_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeCategory_delete, args);
  }

  EmployeeCategory_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeCategory_delete, args);
  }

  EmployeeCategory_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeCategory_get, args);
  }

  EmployeeCategory_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeCategory_get, args);
  }

  EmployeeCategory_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeCategory_post, args);
  }

  EmployeeCategory_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeCategory_post, args);
  }

  EmployeeCategory_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeCategory_put, args);
  }

  EmployeeCategory_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeCategory_put, args);
  }

  EmployeeCategory_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeCategory_search, args);
  }

  EmployeeCategory_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeCategory_search, args);
  }

  EmployeeCategoryList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeCategoryList_deleteByIds, args);
  }

  EmployeeCategoryList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeCategoryList_deleteByIds, args);
  }

  EmployeeCategoryList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeCategoryList_postList, args);
  }

  EmployeeCategoryList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeCategoryList_postList, args);
  }

  EmployeeCategoryList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeCategoryList_putList, args);
  }

  EmployeeCategoryList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeCategoryList_putList, args);
  }

  EmployeeEmployment_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmployment_get, args);
  }

  EmployeeEmployment_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmployment_get, args);
  }

  EmployeeEmployment_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmployment_post, args);
  }

  EmployeeEmployment_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmployment_post, args);
  }

  EmployeeEmployment_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmployment_put, args);
  }

  EmployeeEmployment_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmployment_put, args);
  }

  EmployeeEmployment_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmployment_search, args);
  }

  EmployeeEmployment_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmployment_search, args);
  }

  EmployeeEmploymentDetails_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_get, args);
  }

  EmployeeEmploymentDetails_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_get, args);
  }

  EmployeeEmploymentDetails_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_post, args);
  }

  EmployeeEmploymentDetails_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_post, args);
  }

  EmployeeEmploymentDetails_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_put, args);
  }

  EmployeeEmploymentDetails_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_put, args);
  }

  EmployeeEmploymentDetails_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_search, args);
  }

  EmployeeEmploymentDetails_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentDetails_search, args);
  }

  EmployeeEmploymentEmploymentType_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentType_search, args);
  }

  EmployeeEmploymentEmploymentType_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentType_search, args);
  }

  EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonType(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonType, args);
  }

  EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonTypeWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonType, args);
  }

  EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormType(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormType, args);
  }

  EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormTypeWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormType, args);
  }

  EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentType(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentType, args);
  }

  EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentTypeWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentType, args);
  }

  EmployeeEmploymentEmploymentTypeSalaryType_getSalaryType(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeSalaryType_getSalaryType, args);
  }

  EmployeeEmploymentEmploymentTypeSalaryType_getSalaryTypeWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeSalaryType_getSalaryType, args);
  }

  EmployeeEmploymentEmploymentTypeScheduleType_getScheduleType(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeScheduleType_getScheduleType, args);
  }

  EmployeeEmploymentEmploymentTypeScheduleType_getScheduleTypeWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentEmploymentTypeScheduleType_getScheduleType, args);
  }

  EmployeeEmploymentLeaveOfAbsence_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_get, args);
  }

  EmployeeEmploymentLeaveOfAbsence_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_get, args);
  }

  EmployeeEmploymentLeaveOfAbsence_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_post, args);
  }

  EmployeeEmploymentLeaveOfAbsence_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_post, args);
  }

  EmployeeEmploymentLeaveOfAbsence_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_put, args);
  }

  EmployeeEmploymentLeaveOfAbsence_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_put, args);
  }

  EmployeeEmploymentLeaveOfAbsence_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_search, args);
  }

  EmployeeEmploymentLeaveOfAbsence_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsence_search, args);
  }

  EmployeeEmploymentLeaveOfAbsenceList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsenceList_postList, args);
  }

  EmployeeEmploymentLeaveOfAbsenceList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsenceList_postList, args);
  }

  EmployeeEmploymentLeaveOfAbsenceType_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsenceType_search, args);
  }

  EmployeeEmploymentLeaveOfAbsenceType_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentLeaveOfAbsenceType_search, args);
  }

  EmployeeEmploymentOccupationCode_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentOccupationCode_get, args);
  }

  EmployeeEmploymentOccupationCode_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentOccupationCode_get, args);
  }

  EmployeeEmploymentOccupationCode_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentOccupationCode_search, args);
  }

  EmployeeEmploymentOccupationCode_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentOccupationCode_search, args);
  }

  EmployeeEmploymentRemunerationType_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentRemunerationType_search, args);
  }

  EmployeeEmploymentRemunerationType_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentRemunerationType_search, args);
  }

  EmployeeEmploymentWorkingHoursScheme_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentWorkingHoursScheme_search, args);
  }

  EmployeeEmploymentWorkingHoursScheme_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEmploymentWorkingHoursScheme_search, args);
  }

  EmployeeEntitlement_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEntitlement_get, args);
  }

  EmployeeEntitlement_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEntitlement_get, args);
  }

  EmployeeEntitlement_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEntitlement_search, args);
  }

  EmployeeEntitlement_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEntitlement_search, args);
  }

  EmployeeEntitlementClient_client(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEntitlementClient_client, args);
  }

  EmployeeEntitlementClient_clientWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEntitlementClient_client, args);
  }

  EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplate(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplate, args);
  }

  EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplateWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplate, args);
  }

  EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplate(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplate, args);
  }

  EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplateWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplate, args);
  }

  EmployeeHourlyCostAndRate_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_get, args);
  }

  EmployeeHourlyCostAndRate_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_get, args);
  }

  EmployeeHourlyCostAndRate_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_post, args);
  }

  EmployeeHourlyCostAndRate_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_post, args);
  }

  EmployeeHourlyCostAndRate_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_put, args);
  }

  EmployeeHourlyCostAndRate_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_put, args);
  }

  EmployeeHourlyCostAndRate_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_search, args);
  }

  EmployeeHourlyCostAndRate_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeHourlyCostAndRate_search, args);
  }

  EmployeeList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeList_postList, args);
  }

  EmployeeList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeList_postList, args);
  }

  EmployeeNextOfKin_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeNextOfKin_get, args);
  }

  EmployeeNextOfKin_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeNextOfKin_get, args);
  }

  EmployeeNextOfKin_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeNextOfKin_post, args);
  }

  EmployeeNextOfKin_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeNextOfKin_post, args);
  }

  EmployeeNextOfKin_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeNextOfKin_put, args);
  }

  EmployeeNextOfKin_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeNextOfKin_put, args);
  }

  EmployeeNextOfKin_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeNextOfKin_search, args);
  }

  EmployeeNextOfKin_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeNextOfKin_search, args);
  }

  EmployeePreferences_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeePreferences_put, args);
  }

  EmployeePreferences_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeePreferences_put, args);
  }

  EmployeePreferences_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeePreferences_search, args);
  }

  EmployeePreferences_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeePreferences_search, args);
  }

  EmployeePreferencesChangeLanguage_changeLanguage(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeePreferencesChangeLanguage_changeLanguage, args);
  }

  EmployeePreferencesChangeLanguage_changeLanguageWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeePreferencesChangeLanguage_changeLanguage, args);
  }

  EmployeePreferencesList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeePreferencesList_putList, args);
  }

  EmployeePreferencesList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeePreferencesList_putList, args);
  }

  EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferences(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferences, args);
  }

  EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferencesWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferences, args);
  }

  EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContacts(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContacts, args);
  }

  EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContactsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContacts, args);
  }

  EmployeeStandardTime_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeStandardTime_get, args);
  }

  EmployeeStandardTime_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeStandardTime_get, args);
  }

  EmployeeStandardTime_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeStandardTime_post, args);
  }

  EmployeeStandardTime_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeStandardTime_post, args);
  }

  EmployeeStandardTime_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeStandardTime_put, args);
  }

  EmployeeStandardTime_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeStandardTime_put, args);
  }

  EmployeeStandardTime_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeStandardTime_search, args);
  }

  EmployeeStandardTime_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeStandardTime_search, args);
  }

  EmployeeStandardTimeByDate_getByDate(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EmployeeStandardTimeByDate_getByDate, args);
  }

  EmployeeStandardTimeByDate_getByDateWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EmployeeStandardTimeByDate_getByDate, args);
  }

}

export class EventResource extends BaseClient {
  Event_example(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Event_example, args);
  }

  Event_exampleWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Event_example, args);
  }

  Event_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Event_get, args);
  }

  Event_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Event_get, args);
  }

  EventSubscription_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EventSubscription_delete, args);
  }

  EventSubscription_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EventSubscription_delete, args);
  }

  EventSubscription_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EventSubscription_get, args);
  }

  EventSubscription_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EventSubscription_get, args);
  }

  EventSubscription_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EventSubscription_post, args);
  }

  EventSubscription_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EventSubscription_post, args);
  }

  EventSubscription_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EventSubscription_put, args);
  }

  EventSubscription_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EventSubscription_put, args);
  }

  EventSubscription_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EventSubscription_search, args);
  }

  EventSubscription_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EventSubscription_search, args);
  }

  EventSubscriptionList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EventSubscriptionList_deleteByIds, args);
  }

  EventSubscriptionList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EventSubscriptionList_deleteByIds, args);
  }

  EventSubscriptionList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EventSubscriptionList_postList, args);
  }

  EventSubscriptionList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EventSubscriptionList_postList, args);
  }

  EventSubscriptionList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.EventSubscriptionList_putList, args);
  }

  EventSubscriptionList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.EventSubscriptionList_putList, args);
  }

}

export class IncomingInvoiceResource extends BaseClient {
  IncomingInvoice_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.IncomingInvoice_get, args);
  }

  IncomingInvoice_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.IncomingInvoice_get, args);
  }

  IncomingInvoice_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.IncomingInvoice_post, args);
  }

  IncomingInvoice_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.IncomingInvoice_post, args);
  }

  IncomingInvoice_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.IncomingInvoice_put, args);
  }

  IncomingInvoice_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.IncomingInvoice_put, args);
  }

  IncomingInvoiceAddPayment_addPayment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.IncomingInvoiceAddPayment_addPayment, args);
  }

  IncomingInvoiceAddPayment_addPaymentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.IncomingInvoiceAddPayment_addPayment, args);
  }

  IncomingInvoiceSearch_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.IncomingInvoiceSearch_search, args);
  }

  IncomingInvoiceSearch_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.IncomingInvoiceSearch_search, args);
  }

}

export class InternalResource extends BaseClient {
  InternalDebtCollector_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InternalDebtCollector_get, args);
  }

  InternalDebtCollector_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InternalDebtCollector_get, args);
  }

  InternalDebtCollectorDeactivate_deactivate(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InternalDebtCollectorDeactivate_deactivate, args);
  }

  InternalDebtCollectorDeactivate_deactivateWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InternalDebtCollectorDeactivate_deactivate, args);
  }

  InternalNhoAdminAbort_abort(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InternalNhoAdminAbort_abort, args);
  }

  InternalNhoAdminAbort_abortWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InternalNhoAdminAbort_abort, args);
  }

}

export class InventoryResource extends BaseClient {
  Inventory_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Inventory_delete, args);
  }

  Inventory_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Inventory_delete, args);
  }

  Inventory_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Inventory_get, args);
  }

  Inventory_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Inventory_get, args);
  }

  Inventory_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Inventory_post, args);
  }

  Inventory_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Inventory_post, args);
  }

  Inventory_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Inventory_put, args);
  }

  Inventory_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Inventory_put, args);
  }

  Inventory_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Inventory_search, args);
  }

  Inventory_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Inventory_search, args);
  }

  InventoryInventories_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryInventories_search, args);
  }

  InventoryInventories_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryInventories_search, args);
  }

  InventoryLocation_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryLocation_delete, args);
  }

  InventoryLocation_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryLocation_delete, args);
  }

  InventoryLocation_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryLocation_get, args);
  }

  InventoryLocation_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryLocation_get, args);
  }

  InventoryLocation_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryLocation_post, args);
  }

  InventoryLocation_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryLocation_post, args);
  }

  InventoryLocation_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryLocation_put, args);
  }

  InventoryLocation_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryLocation_put, args);
  }

  InventoryLocation_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryLocation_search, args);
  }

  InventoryLocation_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryLocation_search, args);
  }

  InventoryLocationList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryLocationList_deleteByIds, args);
  }

  InventoryLocationList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryLocationList_deleteByIds, args);
  }

  InventoryLocationList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryLocationList_postList, args);
  }

  InventoryLocationList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryLocationList_postList, args);
  }

  InventoryLocationList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryLocationList_putList, args);
  }

  InventoryLocationList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryLocationList_putList, args);
  }

  InventoryStocktaking_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryStocktaking_delete, args);
  }

  InventoryStocktaking_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryStocktaking_delete, args);
  }

  InventoryStocktaking_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryStocktaking_get, args);
  }

  InventoryStocktaking_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryStocktaking_get, args);
  }

  InventoryStocktaking_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryStocktaking_post, args);
  }

  InventoryStocktaking_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryStocktaking_post, args);
  }

  InventoryStocktaking_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryStocktaking_put, args);
  }

  InventoryStocktaking_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryStocktaking_put, args);
  }

  InventoryStocktaking_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryStocktaking_search, args);
  }

  InventoryStocktaking_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryStocktaking_search, args);
  }

  InventoryStocktakingProductline_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_delete, args);
  }

  InventoryStocktakingProductline_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_delete, args);
  }

  InventoryStocktakingProductline_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_get, args);
  }

  InventoryStocktakingProductline_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_get, args);
  }

  InventoryStocktakingProductline_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_post, args);
  }

  InventoryStocktakingProductline_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_post, args);
  }

  InventoryStocktakingProductline_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_put, args);
  }

  InventoryStocktakingProductline_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_put, args);
  }

  InventoryStocktakingProductline_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_search, args);
  }

  InventoryStocktakingProductline_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryStocktakingProductline_search, args);
  }

  InventoryStocktakingProductlineChangeLocation_changeLocation(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InventoryStocktakingProductlineChangeLocation_changeLocation, args);
  }

  InventoryStocktakingProductlineChangeLocation_changeLocationWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InventoryStocktakingProductlineChangeLocation_changeLocation, args);
  }

}

export class InvoiceResource extends BaseClient {
  Invoice_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Invoice_get, args);
  }

  Invoice_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Invoice_get, args);
  }

  Invoice_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Invoice_post, args);
  }

  Invoice_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Invoice_post, args);
  }

  Invoice_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Invoice_search, args);
  }

  Invoice_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Invoice_search, args);
  }

  InvoiceCreateCreditNote_createCreditNote(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InvoiceCreateCreditNote_createCreditNote, args);
  }

  InvoiceCreateCreditNote_createCreditNoteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InvoiceCreateCreditNote_createCreditNote, args);
  }

  InvoiceCreateReminder_createReminder(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InvoiceCreateReminder_createReminder, args);
  }

  InvoiceCreateReminder_createReminderWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InvoiceCreateReminder_createReminder, args);
  }

  InvoiceDetails_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InvoiceDetails_get, args);
  }

  InvoiceDetails_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InvoiceDetails_get, args);
  }

  InvoiceDetails_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InvoiceDetails_search, args);
  }

  InvoiceDetails_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InvoiceDetails_search, args);
  }

  InvoiceList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InvoiceList_postList, args);
  }

  InvoiceList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InvoiceList_postList, args);
  }

  InvoicePayment_payment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InvoicePayment_payment, args);
  }

  InvoicePayment_paymentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InvoicePayment_payment, args);
  }

  InvoicePaymentType_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InvoicePaymentType_get, args);
  }

  InvoicePaymentType_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InvoicePaymentType_get, args);
  }

  InvoicePaymentType_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InvoicePaymentType_search, args);
  }

  InvoicePaymentType_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InvoicePaymentType_search, args);
  }

  InvoicePdf_downloadPdf(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InvoicePdf_downloadPdf, args);
  }

  InvoicePdf_downloadPdfWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InvoicePdf_downloadPdf, args);
  }

  InvoiceSend_send(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InvoiceSend_send, args);
  }

  InvoiceSend_sendWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InvoiceSend_send, args);
  }

}

export class InvoiceRemarkResource extends BaseClient {
  InvoiceRemark_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.InvoiceRemark_get, args);
  }

  InvoiceRemark_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.InvoiceRemark_get, args);
  }

}

export class LedgerResource extends BaseClient {
  Ledger_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Ledger_search, args);
  }

  Ledger_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Ledger_search, args);
  }

  LedgerAccount_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccount_delete, args);
  }

  LedgerAccount_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccount_delete, args);
  }

  LedgerAccount_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccount_get, args);
  }

  LedgerAccount_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccount_get, args);
  }

  LedgerAccount_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccount_post, args);
  }

  LedgerAccount_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccount_post, args);
  }

  LedgerAccount_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccount_put, args);
  }

  LedgerAccount_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccount_put, args);
  }

  LedgerAccount_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccount_search, args);
  }

  LedgerAccount_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccount_search, args);
  }

  LedgerAccountingDimensionName_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_delete, args);
  }

  LedgerAccountingDimensionName_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_delete, args);
  }

  LedgerAccountingDimensionName_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_get, args);
  }

  LedgerAccountingDimensionName_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_get, args);
  }

  LedgerAccountingDimensionName_getAll(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_getAll, args);
  }

  LedgerAccountingDimensionName_getAllWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_getAll, args);
  }

  LedgerAccountingDimensionName_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_post, args);
  }

  LedgerAccountingDimensionName_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_post, args);
  }

  LedgerAccountingDimensionName_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_put, args);
  }

  LedgerAccountingDimensionName_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionName_put, args);
  }

  LedgerAccountingDimensionNameSearch_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionNameSearch_search, args);
  }

  LedgerAccountingDimensionNameSearch_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionNameSearch_search, args);
  }

  LedgerAccountingDimensionValue_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValue_delete, args);
  }

  LedgerAccountingDimensionValue_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValue_delete, args);
  }

  LedgerAccountingDimensionValue_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValue_get, args);
  }

  LedgerAccountingDimensionValue_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValue_get, args);
  }

  LedgerAccountingDimensionValue_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValue_post, args);
  }

  LedgerAccountingDimensionValue_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValue_post, args);
  }

  LedgerAccountingDimensionValueList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValueList_putList, args);
  }

  LedgerAccountingDimensionValueList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValueList_putList, args);
  }

  LedgerAccountingDimensionValueSearch_searchAccountingDimensionValues(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValueSearch_searchAccountingDimensionValues, args);
  }

  LedgerAccountingDimensionValueSearch_searchAccountingDimensionValuesWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountingDimensionValueSearch_searchAccountingDimensionValues, args);
  }

  LedgerAccountingPeriod_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountingPeriod_get, args);
  }

  LedgerAccountingPeriod_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountingPeriod_get, args);
  }

  LedgerAccountingPeriod_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountingPeriod_search, args);
  }

  LedgerAccountingPeriod_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountingPeriod_search, args);
  }

  LedgerAccountList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountList_deleteByIds, args);
  }

  LedgerAccountList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountList_deleteByIds, args);
  }

  LedgerAccountList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountList_postList, args);
  }

  LedgerAccountList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountList_postList, args);
  }

  LedgerAccountList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAccountList_putList, args);
  }

  LedgerAccountList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAccountList_putList, args);
  }

  LedgerAnnualAccount_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAnnualAccount_get, args);
  }

  LedgerAnnualAccount_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAnnualAccount_get, args);
  }

  LedgerAnnualAccount_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerAnnualAccount_search, args);
  }

  LedgerAnnualAccount_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerAnnualAccount_search, args);
  }

  LedgerCloseGroup_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerCloseGroup_get, args);
  }

  LedgerCloseGroup_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerCloseGroup_get, args);
  }

  LedgerCloseGroup_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerCloseGroup_search, args);
  }

  LedgerCloseGroup_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerCloseGroup_search, args);
  }

  LedgerOpenPost_openPost(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerOpenPost_openPost, args);
  }

  LedgerOpenPost_openPostWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerOpenPost_openPost, args);
  }

  LedgerPaymentTypeOut_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_delete, args);
  }

  LedgerPaymentTypeOut_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_delete, args);
  }

  LedgerPaymentTypeOut_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_get, args);
  }

  LedgerPaymentTypeOut_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_get, args);
  }

  LedgerPaymentTypeOut_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_post, args);
  }

  LedgerPaymentTypeOut_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_post, args);
  }

  LedgerPaymentTypeOut_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_put, args);
  }

  LedgerPaymentTypeOut_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_put, args);
  }

  LedgerPaymentTypeOut_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_search, args);
  }

  LedgerPaymentTypeOut_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOut_search, args);
  }

  LedgerPaymentTypeOutList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOutList_postList, args);
  }

  LedgerPaymentTypeOutList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOutList_postList, args);
  }

  LedgerPaymentTypeOutList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOutList_putList, args);
  }

  LedgerPaymentTypeOutList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerPaymentTypeOutList_putList, args);
  }

  LedgerPosting_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerPosting_get, args);
  }

  LedgerPosting_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerPosting_get, args);
  }

  LedgerPosting_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerPosting_search, args);
  }

  LedgerPosting_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerPosting_search, args);
  }

  LedgerPostingByDate_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerPostingByDate_get, args);
  }

  LedgerPostingByDate_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerPostingByDate_get, args);
  }

  LedgerPostingClosePostings_closePostings(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerPostingClosePostings_closePostings, args);
  }

  LedgerPostingClosePostings_closePostingsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerPostingClosePostings_closePostings, args);
  }

  LedgerPostingOpenPost_openPost(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerPostingOpenPost_openPost, args);
  }

  LedgerPostingOpenPost_openPostWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerPostingOpenPost_openPost, args);
  }

  LedgerPostingRules_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerPostingRules_get, args);
  }

  LedgerPostingRules_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerPostingRules_get, args);
  }

  LedgerVatSettings_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVatSettings_get, args);
  }

  LedgerVatSettings_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVatSettings_get, args);
  }

  LedgerVatSettings_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVatSettings_put, args);
  }

  LedgerVatSettings_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVatSettings_put, args);
  }

  LedgerVatType_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVatType_get, args);
  }

  LedgerVatType_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVatType_get, args);
  }

  LedgerVatType_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVatType_search, args);
  }

  LedgerVatType_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVatType_search, args);
  }

  LedgerVatTypeCreateRelativeVatType_createRelativeVatType(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVatTypeCreateRelativeVatType_createRelativeVatType, args);
  }

  LedgerVatTypeCreateRelativeVatType_createRelativeVatTypeWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVatTypeCreateRelativeVatType_createRelativeVatType, args);
  }

  LedgerVoucher_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucher_delete, args);
  }

  LedgerVoucher_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucher_delete, args);
  }

  LedgerVoucher_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucher_get, args);
  }

  LedgerVoucher_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucher_get, args);
  }

  LedgerVoucher_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucher_post, args);
  }

  LedgerVoucher_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucher_post, args);
  }

  LedgerVoucher_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucher_put, args);
  }

  LedgerVoucher_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucher_put, args);
  }

  LedgerVoucher_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucher_search, args);
  }

  LedgerVoucher_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucher_search, args);
  }

  LedgerVoucherAttachment_deleteAttachment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherAttachment_deleteAttachment, args);
  }

  LedgerVoucherAttachment_deleteAttachmentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherAttachment_deleteAttachment, args);
  }

  LedgerVoucherAttachment_uploadAttachment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherAttachment_uploadAttachment, args);
  }

  LedgerVoucherAttachment_uploadAttachmentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherAttachment_uploadAttachment, args);
  }

  LedgerVoucherExternalVoucherNumber_externalVoucherNumber(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherExternalVoucherNumber_externalVoucherNumber, args);
  }

  LedgerVoucherExternalVoucherNumber_externalVoucherNumberWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherExternalVoucherNumber_externalVoucherNumber, args);
  }

  LedgerVoucherHistoricalAttachment_uploadAttachment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalAttachment_uploadAttachment, args);
  }

  LedgerVoucherHistoricalAttachment_uploadAttachmentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalAttachment_uploadAttachment, args);
  }

  LedgerVoucherHistoricalClosePostings_closePostings(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalClosePostings_closePostings, args);
  }

  LedgerVoucherHistoricalClosePostings_closePostingsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalClosePostings_closePostings, args);
  }

  LedgerVoucherHistoricalEmployee_postEmployee(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalEmployee_postEmployee, args);
  }

  LedgerVoucherHistoricalEmployee_postEmployeeWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalEmployee_postEmployee, args);
  }

  LedgerVoucherHistoricalHistorical_postHistorical(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalHistorical_postHistorical, args);
  }

  LedgerVoucherHistoricalHistorical_postHistoricalWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalHistorical_postHistorical, args);
  }

  LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchers(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchers, args);
  }

  LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchersWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchers, args);
  }

  LedgerVoucherImportDocument_importDocument(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherImportDocument_importDocument, args);
  }

  LedgerVoucherImportDocument_importDocumentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherImportDocument_importDocument, args);
  }

  LedgerVoucherImportGbat10_importGbat10(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherImportGbat10_importGbat10, args);
  }

  LedgerVoucherImportGbat10_importGbat10WithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherImportGbat10_importGbat10, args);
  }

  LedgerVoucherList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherList_putList, args);
  }

  LedgerVoucherList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherList_putList, args);
  }

  LedgerVoucherNonPosted_nonPosted(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherNonPosted_nonPosted, args);
  }

  LedgerVoucherNonPosted_nonPostedWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherNonPosted_nonPosted, args);
  }

  LedgerVoucherOpeningBalance_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalance_delete, args);
  }

  LedgerVoucherOpeningBalance_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalance_delete, args);
  }

  LedgerVoucherOpeningBalance_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalance_get, args);
  }

  LedgerVoucherOpeningBalance_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalance_get, args);
  }

  LedgerVoucherOpeningBalance_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalance_post, args);
  }

  LedgerVoucherOpeningBalance_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalance_post, args);
  }

  LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucher(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucher, args);
  }

  LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucherWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucher, args);
  }

  LedgerVoucherOptions_options(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherOptions_options, args);
  }

  LedgerVoucherOptions_optionsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherOptions_options, args);
  }

  LedgerVoucherPdf_downloadPdf(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherPdf_downloadPdf, args);
  }

  LedgerVoucherPdf_downloadPdfWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherPdf_downloadPdf, args);
  }

  LedgerVoucherPdf_uploadPdf(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherPdf_uploadPdf, args);
  }

  LedgerVoucherPdf_uploadPdfWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherPdf_uploadPdf, args);
  }

  LedgerVoucherReverse_reverse(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherReverse_reverse, args);
  }

  LedgerVoucherReverse_reverseWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherReverse_reverse, args);
  }

  LedgerVoucherSendToInbox_sendToInbox(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherSendToInbox_sendToInbox, args);
  }

  LedgerVoucherSendToInbox_sendToInboxWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherSendToInbox_sendToInbox, args);
  }

  LedgerVoucherSendToLedger_sendToLedger(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherSendToLedger_sendToLedger, args);
  }

  LedgerVoucherSendToLedger_sendToLedgerWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherSendToLedger_sendToLedger, args);
  }

  LedgerVoucherType_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherType_get, args);
  }

  LedgerVoucherType_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherType_get, args);
  }

  LedgerVoucherType_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherType_search, args);
  }

  LedgerVoucherType_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherType_search, args);
  }

  LedgerVoucherVoucherReception_voucherReception(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.LedgerVoucherVoucherReception_voucherReception, args);
  }

  LedgerVoucherVoucherReception_voucherReceptionWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.LedgerVoucherVoucherReception_voucherReception, args);
  }

}

export class MunicipalityResource extends BaseClient {
  Municipality_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Municipality_search, args);
  }

  Municipality_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Municipality_search, args);
  }

  MunicipalityQuery_query(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.MunicipalityQuery_query, args);
  }

  MunicipalityQuery_queryWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.MunicipalityQuery_query, args);
  }

}

export class OrderResource extends BaseClient {
  Order_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Order_delete, args);
  }

  Order_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Order_delete, args);
  }

  Order_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Order_get, args);
  }

  Order_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Order_get, args);
  }

  Order_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Order_post, args);
  }

  Order_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Order_post, args);
  }

  Order_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Order_put, args);
  }

  Order_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Order_put, args);
  }

  Order_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Order_search, args);
  }

  Order_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Order_search, args);
  }

  OrderApproveSubscriptionInvoice_approveSubscriptionInvoice(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderApproveSubscriptionInvoice_approveSubscriptionInvoice, args);
  }

  OrderApproveSubscriptionInvoice_approveSubscriptionInvoiceWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderApproveSubscriptionInvoice_approveSubscriptionInvoice, args);
  }

  OrderAttach_attach(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderAttach_attach, args);
  }

  OrderAttach_attachWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderAttach_attach, args);
  }

  OrderInvoice_invoice(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderInvoice_invoice, args);
  }

  OrderInvoice_invoiceWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderInvoice_invoice, args);
  }

  OrderInvoiceMultipleOrders_invoiceMultipleOrders(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderInvoiceMultipleOrders_invoiceMultipleOrders, args);
  }

  OrderInvoiceMultipleOrders_invoiceMultipleOrdersWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderInvoiceMultipleOrders_invoiceMultipleOrders, args);
  }

  OrderList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderList_postList, args);
  }

  OrderList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderList_postList, args);
  }

  OrderOrderConfirmationPdf_downloadPdf(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderConfirmationPdf_downloadPdf, args);
  }

  OrderOrderConfirmationPdf_downloadPdfWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderConfirmationPdf_downloadPdf, args);
  }

  OrderOrderGroup_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderGroup_delete, args);
  }

  OrderOrderGroup_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderGroup_delete, args);
  }

  OrderOrderGroup_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderGroup_get, args);
  }

  OrderOrderGroup_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderGroup_get, args);
  }

  OrderOrderGroup_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderGroup_post, args);
  }

  OrderOrderGroup_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderGroup_post, args);
  }

  OrderOrderGroup_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderGroup_put, args);
  }

  OrderOrderGroup_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderGroup_put, args);
  }

  OrderOrderGroup_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderGroup_search, args);
  }

  OrderOrderGroup_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderGroup_search, args);
  }

  OrderOrderline_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderline_delete, args);
  }

  OrderOrderline_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderline_delete, args);
  }

  OrderOrderline_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderline_get, args);
  }

  OrderOrderline_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderline_get, args);
  }

  OrderOrderline_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderline_post, args);
  }

  OrderOrderline_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderline_post, args);
  }

  OrderOrderline_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderline_put, args);
  }

  OrderOrderline_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderline_put, args);
  }

  OrderOrderlineList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderlineList_postList, args);
  }

  OrderOrderlineList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderlineList_postList, args);
  }

  OrderOrderlineOrderLineTemplate_orderLineTemplate(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderlineOrderLineTemplate_orderLineTemplate, args);
  }

  OrderOrderlineOrderLineTemplate_orderLineTemplateWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderlineOrderLineTemplate_orderLineTemplate, args);
  }

  OrderOrderlinePickLine_pickLine(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderlinePickLine_pickLine, args);
  }

  OrderOrderlinePickLine_pickLineWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderlinePickLine_pickLine, args);
  }

  OrderOrderlineUnpickLine_unpickLine(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderOrderlineUnpickLine_unpickLine, args);
  }

  OrderOrderlineUnpickLine_unpickLineWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderOrderlineUnpickLine_unpickLine, args);
  }

  OrderPackingNotePdf_downloadPackingNotePdf(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderPackingNotePdf_downloadPackingNotePdf, args);
  }

  OrderPackingNotePdf_downloadPackingNotePdfWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderPackingNotePdf_downloadPackingNotePdf, args);
  }

  OrderSendInvoicePreview_postInvoicePreview(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderSendInvoicePreview_postInvoicePreview, args);
  }

  OrderSendInvoicePreview_postInvoicePreviewWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderSendInvoicePreview_postInvoicePreview, args);
  }

  OrderSendOrderConfirmation_postOrderConfirmation(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderSendOrderConfirmation_postOrderConfirmation, args);
  }

  OrderSendOrderConfirmation_postOrderConfirmationWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderSendOrderConfirmation_postOrderConfirmation, args);
  }

  OrderSendPackingNote_postPackingNote(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderSendPackingNote_postPackingNote, args);
  }

  OrderSendPackingNote_postPackingNoteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderSendPackingNote_postPackingNote, args);
  }

  OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoice(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoice, args);
  }

  OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoiceWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoice, args);
  }

}

export class PensionResource extends BaseClient {
  Pension_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Pension_search, args);
  }

  Pension_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Pension_search, args);
  }

}

export class PickupPointResource extends BaseClient {
  PickupPoint_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PickupPoint_get, args);
  }

  PickupPoint_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PickupPoint_get, args);
  }

  PickupPoint_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PickupPoint_search, args);
  }

  PickupPoint_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PickupPoint_search, args);
  }

}

export class PlatformAgnosticResource extends BaseClient {
  PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerId(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerId, args);
  }

  PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerIdWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerId, args);
  }

}

export class ProductResource extends BaseClient {
  Product_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Product_delete, args);
  }

  Product_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Product_delete, args);
  }

  Product_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Product_get, args);
  }

  Product_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Product_get, args);
  }

  Product_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Product_post, args);
  }

  Product_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Product_post, args);
  }

  Product_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Product_put, args);
  }

  Product_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Product_put, args);
  }

  Product_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Product_search, args);
  }

  Product_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Product_search, args);
  }

  ProductDiscountGroup_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductDiscountGroup_get, args);
  }

  ProductDiscountGroup_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductDiscountGroup_get, args);
  }

  ProductDiscountGroup_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductDiscountGroup_search, args);
  }

  ProductDiscountGroup_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductDiscountGroup_search, args);
  }

  ProductExternal_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductExternal_get, args);
  }

  ProductExternal_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductExternal_get, args);
  }

  ProductExternal_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductExternal_search, args);
  }

  ProductExternal_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductExternal_search, args);
  }

  ProductGroup_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroup_delete, args);
  }

  ProductGroup_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroup_delete, args);
  }

  ProductGroup_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroup_get, args);
  }

  ProductGroup_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroup_get, args);
  }

  ProductGroup_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroup_post, args);
  }

  ProductGroup_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroup_post, args);
  }

  ProductGroup_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroup_put, args);
  }

  ProductGroup_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroup_put, args);
  }

  ProductGroup_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroup_search, args);
  }

  ProductGroup_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroup_search, args);
  }

  ProductGroupList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroupList_deleteByIds, args);
  }

  ProductGroupList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroupList_deleteByIds, args);
  }

  ProductGroupList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroupList_postList, args);
  }

  ProductGroupList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroupList_postList, args);
  }

  ProductGroupList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroupList_putList, args);
  }

  ProductGroupList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroupList_putList, args);
  }

  ProductGroupQuery_query(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroupQuery_query, args);
  }

  ProductGroupQuery_queryWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroupQuery_query, args);
  }

  ProductGroupRelation_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroupRelation_delete, args);
  }

  ProductGroupRelation_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroupRelation_delete, args);
  }

  ProductGroupRelation_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroupRelation_get, args);
  }

  ProductGroupRelation_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroupRelation_get, args);
  }

  ProductGroupRelation_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroupRelation_post, args);
  }

  ProductGroupRelation_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroupRelation_post, args);
  }

  ProductGroupRelation_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroupRelation_search, args);
  }

  ProductGroupRelation_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroupRelation_search, args);
  }

  ProductGroupRelationList_deleteList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroupRelationList_deleteList, args);
  }

  ProductGroupRelationList_deleteListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroupRelationList_deleteList, args);
  }

  ProductGroupRelationList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductGroupRelationList_postList, args);
  }

  ProductGroupRelationList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductGroupRelationList_postList, args);
  }

  ProductImage_deleteImage(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductImage_deleteImage, args);
  }

  ProductImage_deleteImageWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductImage_deleteImage, args);
  }

  ProductImage_uploadImage(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductImage_uploadImage, args);
  }

  ProductImage_uploadImageWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductImage_uploadImage, args);
  }

  ProductInventoryLocation_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocation_delete, args);
  }

  ProductInventoryLocation_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocation_delete, args);
  }

  ProductInventoryLocation_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocation_get, args);
  }

  ProductInventoryLocation_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocation_get, args);
  }

  ProductInventoryLocation_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocation_post, args);
  }

  ProductInventoryLocation_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocation_post, args);
  }

  ProductInventoryLocation_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocation_put, args);
  }

  ProductInventoryLocation_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocation_put, args);
  }

  ProductInventoryLocation_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocation_search, args);
  }

  ProductInventoryLocation_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocation_search, args);
  }

  ProductInventoryLocationList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocationList_postList, args);
  }

  ProductInventoryLocationList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocationList_postList, args);
  }

  ProductInventoryLocationList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocationList_putList, args);
  }

  ProductInventoryLocationList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductInventoryLocationList_putList, args);
  }

  ProductList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductList_postList, args);
  }

  ProductList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductList_postList, args);
  }

  ProductList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductList_putList, args);
  }

  ProductList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductList_putList, args);
  }

  ProductLogisticsSettings_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductLogisticsSettings_get, args);
  }

  ProductLogisticsSettings_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductLogisticsSettings_get, args);
  }

  ProductLogisticsSettings_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductLogisticsSettings_put, args);
  }

  ProductLogisticsSettings_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductLogisticsSettings_put, args);
  }

  ProductProductPrice_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductProductPrice_search, args);
  }

  ProductProductPrice_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductProductPrice_search, args);
  }

  ProductSupplierProduct_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductSupplierProduct_delete, args);
  }

  ProductSupplierProduct_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductSupplierProduct_delete, args);
  }

  ProductSupplierProduct_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductSupplierProduct_get, args);
  }

  ProductSupplierProduct_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductSupplierProduct_get, args);
  }

  ProductSupplierProduct_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductSupplierProduct_post, args);
  }

  ProductSupplierProduct_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductSupplierProduct_post, args);
  }

  ProductSupplierProduct_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductSupplierProduct_put, args);
  }

  ProductSupplierProduct_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductSupplierProduct_put, args);
  }

  ProductSupplierProduct_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductSupplierProduct_search, args);
  }

  ProductSupplierProduct_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductSupplierProduct_search, args);
  }

  ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIds, args);
  }

  ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIds, args);
  }

  ProductSupplierProductList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductSupplierProductList_postList, args);
  }

  ProductSupplierProductList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductSupplierProductList_postList, args);
  }

  ProductSupplierProductList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductSupplierProductList_putList, args);
  }

  ProductSupplierProductList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductSupplierProductList_putList, args);
  }

  ProductUnit_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductUnit_delete, args);
  }

  ProductUnit_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductUnit_delete, args);
  }

  ProductUnit_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductUnit_get, args);
  }

  ProductUnit_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductUnit_get, args);
  }

  ProductUnit_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductUnit_post, args);
  }

  ProductUnit_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductUnit_post, args);
  }

  ProductUnit_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductUnit_put, args);
  }

  ProductUnit_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductUnit_put, args);
  }

  ProductUnit_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductUnit_search, args);
  }

  ProductUnit_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductUnit_search, args);
  }

  ProductUnitList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductUnitList_postList, args);
  }

  ProductUnitList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductUnitList_postList, args);
  }

  ProductUnitList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductUnitList_putList, args);
  }

  ProductUnitList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductUnitList_putList, args);
  }

  ProductUnitMaster_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductUnitMaster_get, args);
  }

  ProductUnitMaster_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductUnitMaster_get, args);
  }

  ProductUnitMaster_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductUnitMaster_search, args);
  }

  ProductUnitMaster_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductUnitMaster_search, args);
  }

  ProductUnitQuery_query(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProductUnitQuery_query, args);
  }

  ProductUnitQuery_queryWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProductUnitQuery_query, args);
  }

}

export class ProjectResource extends BaseClient {
  Project_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Project_delete, args);
  }

  Project_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Project_delete, args);
  }

  Project_deleteList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Project_deleteList, args);
  }

  Project_deleteListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Project_deleteList, args);
  }

  Project_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Project_get, args);
  }

  Project_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Project_get, args);
  }

  Project_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Project_post, args);
  }

  Project_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Project_post, args);
  }

  Project_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Project_put, args);
  }

  Project_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Project_put, args);
  }

  Project_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Project_search, args);
  }

  Project_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Project_search, args);
  }

  ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIds, args);
  }

  ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIds, args);
  }

  ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIds, args);
  }

  ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIds, args);
  }

  ProjectCategory_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectCategory_get, args);
  }

  ProjectCategory_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectCategory_get, args);
  }

  ProjectCategory_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectCategory_post, args);
  }

  ProjectCategory_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectCategory_post, args);
  }

  ProjectCategory_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectCategory_put, args);
  }

  ProjectCategory_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectCategory_put, args);
  }

  ProjectCategory_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectCategory_search, args);
  }

  ProjectCategory_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectCategory_search, args);
  }

  ProjectControlForm_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectControlForm_get, args);
  }

  ProjectControlForm_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectControlForm_get, args);
  }

  ProjectControlForm_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectControlForm_search, args);
  }

  ProjectControlForm_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectControlForm_search, args);
  }

  ProjectControlFormType_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectControlFormType_get, args);
  }

  ProjectControlFormType_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectControlFormType_get, args);
  }

  ProjectControlFormType_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectControlFormType_search, args);
  }

  ProjectControlFormType_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectControlFormType_search, args);
  }

  ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedForm(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedForm, args);
  }

  ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedFormWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedForm, args);
  }

  ProjectForTimeSheet_getForTimeSheet(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectForTimeSheet_getForTimeSheet, args);
  }

  ProjectForTimeSheet_getForTimeSheetWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectForTimeSheet_getForTimeSheet, args);
  }

  ProjectHourlyRates_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRates_delete, args);
  }

  ProjectHourlyRates_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRates_delete, args);
  }

  ProjectHourlyRates_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRates_get, args);
  }

  ProjectHourlyRates_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRates_get, args);
  }

  ProjectHourlyRates_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRates_post, args);
  }

  ProjectHourlyRates_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRates_post, args);
  }

  ProjectHourlyRates_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRates_put, args);
  }

  ProjectHourlyRates_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRates_put, args);
  }

  ProjectHourlyRates_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRates_search, args);
  }

  ProjectHourlyRates_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRates_search, args);
  }

  ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIds, args);
  }

  ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIds, args);
  }

  ProjectHourlyRatesList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesList_deleteByIds, args);
  }

  ProjectHourlyRatesList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesList_deleteByIds, args);
  }

  ProjectHourlyRatesList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesList_postList, args);
  }

  ProjectHourlyRatesList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesList_postList, args);
  }

  ProjectHourlyRatesList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesList_putList, args);
  }

  ProjectHourlyRatesList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesList_putList, args);
  }

  ProjectHourlyRatesProjectSpecificRates_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_delete, args);
  }

  ProjectHourlyRatesProjectSpecificRates_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_delete, args);
  }

  ProjectHourlyRatesProjectSpecificRates_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_get, args);
  }

  ProjectHourlyRatesProjectSpecificRates_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_get, args);
  }

  ProjectHourlyRatesProjectSpecificRates_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_post, args);
  }

  ProjectHourlyRatesProjectSpecificRates_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_post, args);
  }

  ProjectHourlyRatesProjectSpecificRates_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_put, args);
  }

  ProjectHourlyRatesProjectSpecificRates_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_put, args);
  }

  ProjectHourlyRatesProjectSpecificRates_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_search, args);
  }

  ProjectHourlyRatesProjectSpecificRates_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRates_search, args);
  }

  ProjectHourlyRatesProjectSpecificRatesList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRatesList_deleteByIds, args);
  }

  ProjectHourlyRatesProjectSpecificRatesList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRatesList_deleteByIds, args);
  }

  ProjectHourlyRatesProjectSpecificRatesList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRatesList_postList, args);
  }

  ProjectHourlyRatesProjectSpecificRatesList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRatesList_postList, args);
  }

  ProjectHourlyRatesProjectSpecificRatesList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRatesList_putList, args);
  }

  ProjectHourlyRatesProjectSpecificRatesList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesProjectSpecificRatesList_putList, args);
  }

  ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRates(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRates, args);
  }

  ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRatesWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRates, args);
  }

  ProjectImport_importProjectStatement(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectImport_importProjectStatement, args);
  }

  ProjectImport_importProjectStatementWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectImport_importProjectStatement, args);
  }

  ProjectList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectList_deleteByIds, args);
  }

  ProjectList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectList_deleteByIds, args);
  }

  ProjectList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectList_postList, args);
  }

  ProjectList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectList_postList, args);
  }

  ProjectList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectList_putList, args);
  }

  ProjectList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectList_putList, args);
  }

  ProjectNumber_getByNumber(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectNumber_getByNumber, args);
  }

  ProjectNumber_getByNumberWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectNumber_getByNumber, args);
  }

  ProjectOrderline_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectOrderline_delete, args);
  }

  ProjectOrderline_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectOrderline_delete, args);
  }

  ProjectOrderline_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectOrderline_get, args);
  }

  ProjectOrderline_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectOrderline_get, args);
  }

  ProjectOrderline_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectOrderline_post, args);
  }

  ProjectOrderline_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectOrderline_post, args);
  }

  ProjectOrderline_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectOrderline_put, args);
  }

  ProjectOrderline_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectOrderline_put, args);
  }

  ProjectOrderline_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectOrderline_search, args);
  }

  ProjectOrderline_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectOrderline_search, args);
  }

  ProjectOrderlineList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectOrderlineList_postList, args);
  }

  ProjectOrderlineList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectOrderlineList_postList, args);
  }

  ProjectOrderlineOrderLineTemplate_orderLineTemplate(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectOrderlineOrderLineTemplate_orderLineTemplate, args);
  }

  ProjectOrderlineOrderLineTemplate_orderLineTemplateWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectOrderlineOrderLineTemplate_orderLineTemplate, args);
  }

  ProjectOrderlineQuery_query(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectOrderlineQuery_query, args);
  }

  ProjectOrderlineQuery_queryWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectOrderlineQuery_query, args);
  }

  ProjectParticipant_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectParticipant_get, args);
  }

  ProjectParticipant_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectParticipant_get, args);
  }

  ProjectParticipant_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectParticipant_post, args);
  }

  ProjectParticipant_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectParticipant_post, args);
  }

  ProjectParticipant_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectParticipant_put, args);
  }

  ProjectParticipant_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectParticipant_put, args);
  }

  ProjectParticipantList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectParticipantList_deleteByIds, args);
  }

  ProjectParticipantList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectParticipantList_deleteByIds, args);
  }

  ProjectParticipantList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectParticipantList_postList, args);
  }

  ProjectParticipantList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectParticipantList_postList, args);
  }

  ProjectPeriodBudgetStatus_getBudgetStatus(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectPeriodBudgetStatus_getBudgetStatus, args);
  }

  ProjectPeriodBudgetStatus_getBudgetStatusWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectPeriodBudgetStatus_getBudgetStatus, args);
  }

  ProjectPeriodHourlistReport_hourlistReport(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectPeriodHourlistReport_hourlistReport, args);
  }

  ProjectPeriodHourlistReport_hourlistReportWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectPeriodHourlistReport_hourlistReport, args);
  }

  ProjectPeriodInvoiced_invoiced(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectPeriodInvoiced_invoiced, args);
  }

  ProjectPeriodInvoiced_invoicedWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectPeriodInvoiced_invoiced, args);
  }

  ProjectPeriodInvoicingReserve_invoicingReserve(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectPeriodInvoicingReserve_invoicingReserve, args);
  }

  ProjectPeriodInvoicingReserve_invoicingReserveWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectPeriodInvoicingReserve_invoicingReserve, args);
  }

  ProjectPeriodMonthlyStatus_monthlyStatus(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectPeriodMonthlyStatus_monthlyStatus, args);
  }

  ProjectPeriodMonthlyStatus_monthlyStatusWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectPeriodMonthlyStatus_monthlyStatus, args);
  }

  ProjectPeriodOverallStatus_overallStatus(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectPeriodOverallStatus_overallStatus, args);
  }

  ProjectPeriodOverallStatus_overallStatusWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectPeriodOverallStatus_overallStatus, args);
  }

  ProjectProjectActivity_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectProjectActivity_delete, args);
  }

  ProjectProjectActivity_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectProjectActivity_delete, args);
  }

  ProjectProjectActivity_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectProjectActivity_get, args);
  }

  ProjectProjectActivity_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectProjectActivity_get, args);
  }

  ProjectProjectActivity_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectProjectActivity_post, args);
  }

  ProjectProjectActivity_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectProjectActivity_post, args);
  }

  ProjectProjectActivityList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectProjectActivityList_deleteByIds, args);
  }

  ProjectProjectActivityList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectProjectActivityList_deleteByIds, args);
  }

  ProjectResourcePlanBudget_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectResourcePlanBudget_get, args);
  }

  ProjectResourcePlanBudget_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectResourcePlanBudget_get, args);
  }

  ProjectSettings_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectSettings_get, args);
  }

  ProjectSettings_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectSettings_get, args);
  }

  ProjectSettings_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectSettings_put, args);
  }

  ProjectSettings_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectSettings_put, args);
  }

  ProjectSubcontract_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectSubcontract_delete, args);
  }

  ProjectSubcontract_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectSubcontract_delete, args);
  }

  ProjectSubcontract_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectSubcontract_get, args);
  }

  ProjectSubcontract_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectSubcontract_get, args);
  }

  ProjectSubcontract_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectSubcontract_post, args);
  }

  ProjectSubcontract_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectSubcontract_post, args);
  }

  ProjectSubcontract_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectSubcontract_put, args);
  }

  ProjectSubcontract_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectSubcontract_put, args);
  }

  ProjectSubcontract_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectSubcontract_search, args);
  }

  ProjectSubcontract_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectSubcontract_search, args);
  }

  ProjectSubcontractQuery_query(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectSubcontractQuery_query, args);
  }

  ProjectSubcontractQuery_queryWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectSubcontractQuery_query, args);
  }

  ProjectTask_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectTask_search, args);
  }

  ProjectTask_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectTask_search, args);
  }

  ProjectTemplate_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ProjectTemplate_get, args);
  }

  ProjectTemplate_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ProjectTemplate_get, args);
  }

}

export class PurchaseOrderResource extends BaseClient {
  PurchaseOrder_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrder_delete, args);
  }

  PurchaseOrder_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrder_delete, args);
  }

  PurchaseOrder_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrder_get, args);
  }

  PurchaseOrder_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrder_get, args);
  }

  PurchaseOrder_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrder_post, args);
  }

  PurchaseOrder_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrder_post, args);
  }

  PurchaseOrder_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrder_put, args);
  }

  PurchaseOrder_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrder_put, args);
  }

  PurchaseOrder_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrder_search, args);
  }

  PurchaseOrder_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrder_search, args);
  }

  PurchaseOrderAttachment_deleteAttachment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderAttachment_deleteAttachment, args);
  }

  PurchaseOrderAttachment_deleteAttachmentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderAttachment_deleteAttachment, args);
  }

  PurchaseOrderAttachment_uploadAttachment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderAttachment_uploadAttachment, args);
  }

  PurchaseOrderAttachment_uploadAttachmentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderAttachment_uploadAttachment, args);
  }

  PurchaseOrderAttachmentList_uploadAttachments(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderAttachmentList_uploadAttachments, args);
  }

  PurchaseOrderAttachmentList_uploadAttachmentsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderAttachmentList_uploadAttachments, args);
  }

  PurchaseOrderDeviation_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_delete, args);
  }

  PurchaseOrderDeviation_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_delete, args);
  }

  PurchaseOrderDeviation_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_get, args);
  }

  PurchaseOrderDeviation_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_get, args);
  }

  PurchaseOrderDeviation_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_post, args);
  }

  PurchaseOrderDeviation_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_post, args);
  }

  PurchaseOrderDeviation_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_put, args);
  }

  PurchaseOrderDeviation_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_put, args);
  }

  PurchaseOrderDeviation_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_search, args);
  }

  PurchaseOrderDeviation_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviation_search, args);
  }

  PurchaseOrderDeviationApprove_approve(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviationApprove_approve, args);
  }

  PurchaseOrderDeviationApprove_approveWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviationApprove_approve, args);
  }

  PurchaseOrderDeviationDeliver_deliver(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviationDeliver_deliver, args);
  }

  PurchaseOrderDeviationDeliver_deliverWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviationDeliver_deliver, args);
  }

  PurchaseOrderDeviationList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviationList_postList, args);
  }

  PurchaseOrderDeviationList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviationList_postList, args);
  }

  PurchaseOrderDeviationList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviationList_putList, args);
  }

  PurchaseOrderDeviationList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviationList_putList, args);
  }

  PurchaseOrderDeviationUndeliver_undeliver(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviationUndeliver_undeliver, args);
  }

  PurchaseOrderDeviationUndeliver_undeliverWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderDeviationUndeliver_undeliver, args);
  }

  PurchaseOrderGoodsReceipt_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_delete, args);
  }

  PurchaseOrderGoodsReceipt_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_delete, args);
  }

  PurchaseOrderGoodsReceipt_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_get, args);
  }

  PurchaseOrderGoodsReceipt_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_get, args);
  }

  PurchaseOrderGoodsReceipt_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_post, args);
  }

  PurchaseOrderGoodsReceipt_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_post, args);
  }

  PurchaseOrderGoodsReceipt_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_put, args);
  }

  PurchaseOrderGoodsReceipt_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_put, args);
  }

  PurchaseOrderGoodsReceipt_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_search, args);
  }

  PurchaseOrderGoodsReceipt_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceipt_search, args);
  }

  PurchaseOrderGoodsReceiptConfirm_confirm(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptConfirm_confirm, args);
  }

  PurchaseOrderGoodsReceiptConfirm_confirmWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptConfirm_confirm, args);
  }

  PurchaseOrderGoodsReceiptLine_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_delete, args);
  }

  PurchaseOrderGoodsReceiptLine_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_delete, args);
  }

  PurchaseOrderGoodsReceiptLine_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_get, args);
  }

  PurchaseOrderGoodsReceiptLine_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_get, args);
  }

  PurchaseOrderGoodsReceiptLine_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_post, args);
  }

  PurchaseOrderGoodsReceiptLine_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_post, args);
  }

  PurchaseOrderGoodsReceiptLine_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_put, args);
  }

  PurchaseOrderGoodsReceiptLine_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_put, args);
  }

  PurchaseOrderGoodsReceiptLine_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_search, args);
  }

  PurchaseOrderGoodsReceiptLine_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLine_search, args);
  }

  PurchaseOrderGoodsReceiptLineList_deleteList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLineList_deleteList, args);
  }

  PurchaseOrderGoodsReceiptLineList_deleteListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLineList_deleteList, args);
  }

  PurchaseOrderGoodsReceiptLineList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLineList_postList, args);
  }

  PurchaseOrderGoodsReceiptLineList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLineList_postList, args);
  }

  PurchaseOrderGoodsReceiptLineList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLineList_putList, args);
  }

  PurchaseOrderGoodsReceiptLineList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptLineList_putList, args);
  }

  PurchaseOrderGoodsReceiptList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptList_deleteByIds, args);
  }

  PurchaseOrderGoodsReceiptList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptList_deleteByIds, args);
  }

  PurchaseOrderGoodsReceiptList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptList_postList, args);
  }

  PurchaseOrderGoodsReceiptList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptList_postList, args);
  }

  PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirm(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirm, args);
  }

  PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirmWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirm, args);
  }

  PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceipt(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceipt, args);
  }

  PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceiptWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceipt, args);
  }

  PurchaseOrderOrderline_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_delete, args);
  }

  PurchaseOrderOrderline_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_delete, args);
  }

  PurchaseOrderOrderline_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_get, args);
  }

  PurchaseOrderOrderline_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_get, args);
  }

  PurchaseOrderOrderline_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_post, args);
  }

  PurchaseOrderOrderline_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_post, args);
  }

  PurchaseOrderOrderline_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_put, args);
  }

  PurchaseOrderOrderline_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderline_put, args);
  }

  PurchaseOrderOrderlineList_deleteList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderlineList_deleteList, args);
  }

  PurchaseOrderOrderlineList_deleteListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderlineList_deleteList, args);
  }

  PurchaseOrderOrderlineList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderlineList_postList, args);
  }

  PurchaseOrderOrderlineList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderlineList_postList, args);
  }

  PurchaseOrderOrderlineList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderlineList_putList, args);
  }

  PurchaseOrderOrderlineList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderOrderlineList_putList, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_delete, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_delete, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_get, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_get, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_post, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_post, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_search, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelation_search, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIds, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIds, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postList, args);
  }

  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postList, args);
  }

  PurchaseOrderSend_send(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderSend_send, args);
  }

  PurchaseOrderSend_sendWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderSend_send, args);
  }

  PurchaseOrderSendByEmail_sendByEmail(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.PurchaseOrderSendByEmail_sendByEmail, args);
  }

  PurchaseOrderSendByEmail_sendByEmailWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.PurchaseOrderSendByEmail_sendByEmail, args);
  }

}

export class ReminderResource extends BaseClient {
  Reminder_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Reminder_get, args);
  }

  Reminder_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Reminder_get, args);
  }

  Reminder_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Reminder_search, args);
  }

  Reminder_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Reminder_search, args);
  }

  ReminderPdf_downloadPdf(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ReminderPdf_downloadPdf, args);
  }

  ReminderPdf_downloadPdfWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ReminderPdf_downloadPdf, args);
  }

}

export class ResultbudgetResource extends BaseClient {
  Resultbudget_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Resultbudget_search, args);
  }

  Resultbudget_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Resultbudget_search, args);
  }

  ResultbudgetCompany_getCompanyResultBudget(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ResultbudgetCompany_getCompanyResultBudget, args);
  }

  ResultbudgetCompany_getCompanyResultBudgetWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ResultbudgetCompany_getCompanyResultBudget, args);
  }

  ResultbudgetDepartment_getDepartmentResultBudget(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ResultbudgetDepartment_getDepartmentResultBudget, args);
  }

  ResultbudgetDepartment_getDepartmentResultBudgetWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ResultbudgetDepartment_getDepartmentResultBudget, args);
  }

  ResultbudgetEmployee_getEmployeeResultBudget(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ResultbudgetEmployee_getEmployeeResultBudget, args);
  }

  ResultbudgetEmployee_getEmployeeResultBudgetWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ResultbudgetEmployee_getEmployeeResultBudget, args);
  }

  ResultbudgetProduct_getProductResultBudget(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ResultbudgetProduct_getProductResultBudget, args);
  }

  ResultbudgetProduct_getProductResultBudgetWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ResultbudgetProduct_getProductResultBudget, args);
  }

  ResultbudgetProject_getProjectResultBudget(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.ResultbudgetProject_getProjectResultBudget, args);
  }

  ResultbudgetProject_getProjectResultBudgetWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.ResultbudgetProject_getProjectResultBudget, args);
  }

}

export class SaftResource extends BaseClient {
  SaftExportSAFT_exportSAFT(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SaftExportSAFT_exportSAFT, args);
  }

  SaftExportSAFT_exportSAFTWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SaftExportSAFT_exportSAFT, args);
  }

  SaftImportSAFT_importSAFT(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SaftImportSAFT_importSAFT, args);
  }

  SaftImportSAFT_importSAFTWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SaftImportSAFT_importSAFT, args);
  }

}

export class SalaryResource extends BaseClient {
  SalaryCompilation_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryCompilation_get, args);
  }

  SalaryCompilation_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryCompilation_get, args);
  }

  SalaryCompilationPdf_downloadPdf(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryCompilationPdf_downloadPdf, args);
  }

  SalaryCompilationPdf_downloadPdfWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryCompilationPdf_downloadPdf, args);
  }

  SalaryFinanceTaxReconciliationContext_postContext(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryFinanceTaxReconciliationContext_postContext, args);
  }

  SalaryFinanceTaxReconciliationContext_postContextWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryFinanceTaxReconciliationContext_postContext, args);
  }

  SalaryFinanceTaxReconciliationOverview_getOverview(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryFinanceTaxReconciliationOverview_getOverview, args);
  }

  SalaryFinanceTaxReconciliationOverview_getOverviewWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryFinanceTaxReconciliationOverview_getOverview, args);
  }

  SalaryFinanceTaxReconciliationPaymentsOverview_getPayments(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryFinanceTaxReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryFinanceTaxReconciliationPaymentsOverview_getPaymentsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryFinanceTaxReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryHolidayAllowanceReconciliationContext_postContext(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryHolidayAllowanceReconciliationContext_postContext, args);
  }

  SalaryHolidayAllowanceReconciliationContext_postContextWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryHolidayAllowanceReconciliationContext_postContext, args);
  }

  SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetails(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetails, args);
  }

  SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetailsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetails, args);
  }

  SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummary(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummary, args);
  }

  SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummaryWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummary, args);
  }

  SalaryMandatoryDeductionReconciliationContext_postContext(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryMandatoryDeductionReconciliationContext_postContext, args);
  }

  SalaryMandatoryDeductionReconciliationContext_postContextWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryMandatoryDeductionReconciliationContext_postContext, args);
  }

  SalaryMandatoryDeductionReconciliationOverview_getOverview(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryMandatoryDeductionReconciliationOverview_getOverview, args);
  }

  SalaryMandatoryDeductionReconciliationOverview_getOverviewWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryMandatoryDeductionReconciliationOverview_getOverview, args);
  }

  SalaryMandatoryDeductionReconciliationPaymentsOverview_getPayments(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryMandatoryDeductionReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryMandatoryDeductionReconciliationPaymentsOverview_getPaymentsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryMandatoryDeductionReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryPayrollTaxReconciliationContext_postContext(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryPayrollTaxReconciliationContext_postContext, args);
  }

  SalaryPayrollTaxReconciliationContext_postContextWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryPayrollTaxReconciliationContext_postContext, args);
  }

  SalaryPayrollTaxReconciliationOverview_getOverview(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryPayrollTaxReconciliationOverview_getOverview, args);
  }

  SalaryPayrollTaxReconciliationOverview_getOverviewWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryPayrollTaxReconciliationOverview_getOverview, args);
  }

  SalaryPayrollTaxReconciliationPaymentsOverview_getPayments(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryPayrollTaxReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryPayrollTaxReconciliationPaymentsOverview_getPaymentsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryPayrollTaxReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryPayslip_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryPayslip_get, args);
  }

  SalaryPayslip_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryPayslip_get, args);
  }

  SalaryPayslip_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryPayslip_search, args);
  }

  SalaryPayslip_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryPayslip_search, args);
  }

  SalaryPayslipPdf_downloadPdf(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryPayslipPdf_downloadPdf, args);
  }

  SalaryPayslipPdf_downloadPdfWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryPayslipPdf_downloadPdf, args);
  }

  SalarySettings_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettings_get, args);
  }

  SalarySettings_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettings_get, args);
  }

  SalarySettings_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettings_put, args);
  }

  SalarySettings_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettings_put, args);
  }

  SalarySettingsHoliday_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsHoliday_post, args);
  }

  SalarySettingsHoliday_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsHoliday_post, args);
  }

  SalarySettingsHoliday_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsHoliday_put, args);
  }

  SalarySettingsHoliday_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsHoliday_put, args);
  }

  SalarySettingsHoliday_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsHoliday_search, args);
  }

  SalarySettingsHoliday_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsHoliday_search, args);
  }

  SalarySettingsHolidayList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsHolidayList_deleteByIds, args);
  }

  SalarySettingsHolidayList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsHolidayList_deleteByIds, args);
  }

  SalarySettingsHolidayList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsHolidayList_postList, args);
  }

  SalarySettingsHolidayList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsHolidayList_postList, args);
  }

  SalarySettingsHolidayList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsHolidayList_putList, args);
  }

  SalarySettingsHolidayList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsHolidayList_putList, args);
  }

  SalarySettingsPensionScheme_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_delete, args);
  }

  SalarySettingsPensionScheme_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_delete, args);
  }

  SalarySettingsPensionScheme_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_get, args);
  }

  SalarySettingsPensionScheme_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_get, args);
  }

  SalarySettingsPensionScheme_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_post, args);
  }

  SalarySettingsPensionScheme_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_post, args);
  }

  SalarySettingsPensionScheme_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_put, args);
  }

  SalarySettingsPensionScheme_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_put, args);
  }

  SalarySettingsPensionScheme_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_search, args);
  }

  SalarySettingsPensionScheme_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionScheme_search, args);
  }

  SalarySettingsPensionSchemeList_deleteByIds(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionSchemeList_deleteByIds, args);
  }

  SalarySettingsPensionSchemeList_deleteByIdsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionSchemeList_deleteByIds, args);
  }

  SalarySettingsPensionSchemeList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionSchemeList_postList, args);
  }

  SalarySettingsPensionSchemeList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionSchemeList_postList, args);
  }

  SalarySettingsPensionSchemeList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionSchemeList_putList, args);
  }

  SalarySettingsPensionSchemeList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsPensionSchemeList_putList, args);
  }

  SalarySettingsStandardTime_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_get, args);
  }

  SalarySettingsStandardTime_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_get, args);
  }

  SalarySettingsStandardTime_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_post, args);
  }

  SalarySettingsStandardTime_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_post, args);
  }

  SalarySettingsStandardTime_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_put, args);
  }

  SalarySettingsStandardTime_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_put, args);
  }

  SalarySettingsStandardTime_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_search, args);
  }

  SalarySettingsStandardTime_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsStandardTime_search, args);
  }

  SalarySettingsStandardTimeByDate_getByDate(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalarySettingsStandardTimeByDate_getByDate, args);
  }

  SalarySettingsStandardTimeByDate_getByDateWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalarySettingsStandardTimeByDate_getByDate, args);
  }

  SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetails(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetails, args);
  }

  SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetailsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetails, args);
  }

  SalaryTaxDeductionReconciliationContext_postContext(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationContext_postContext, args);
  }

  SalaryTaxDeductionReconciliationContext_postContextWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationContext_postContext, args);
  }

  SalaryTaxDeductionReconciliationOverview_getOverview(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationOverview_getOverview, args);
  }

  SalaryTaxDeductionReconciliationOverview_getOverviewWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationOverview_getOverview, args);
  }

  SalaryTaxDeductionReconciliationPaymentsOverview_getPayments(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryTaxDeductionReconciliationPaymentsOverview_getPaymentsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryTaxDeductionReconciliationPaymentsOverview_getPayments, args);
  }

  SalaryTransaction_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryTransaction_delete, args);
  }

  SalaryTransaction_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryTransaction_delete, args);
  }

  SalaryTransaction_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryTransaction_get, args);
  }

  SalaryTransaction_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryTransaction_get, args);
  }

  SalaryTransaction_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryTransaction_post, args);
  }

  SalaryTransaction_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryTransaction_post, args);
  }

  SalaryTransactionAttachment_uploadAttachment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryTransactionAttachment_uploadAttachment, args);
  }

  SalaryTransactionAttachment_uploadAttachmentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryTransactionAttachment_uploadAttachment, args);
  }

  SalaryTransactionAttachmentList_uploadAttachments(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryTransactionAttachmentList_uploadAttachments, args);
  }

  SalaryTransactionAttachmentList_uploadAttachmentsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryTransactionAttachmentList_uploadAttachments, args);
  }

  SalaryTransactionDeleteAttachment_deleteAttachment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryTransactionDeleteAttachment_deleteAttachment, args);
  }

  SalaryTransactionDeleteAttachment_deleteAttachmentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryTransactionDeleteAttachment_deleteAttachment, args);
  }

  SalaryType_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryType_get, args);
  }

  SalaryType_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryType_get, args);
  }

  SalaryType_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SalaryType_search, args);
  }

  SalaryType_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SalaryType_search, args);
  }

}

export class SubscriptionResource extends BaseClient {
  SubscriptionCancel_cancel(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SubscriptionCancel_cancel, args);
  }

  SubscriptionCancel_cancelWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SubscriptionCancel_cancel, args);
  }

  SubscriptionPackages_getPackages(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SubscriptionPackages_getPackages, args);
  }

  SubscriptionPackages_getPackagesWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SubscriptionPackages_getPackages, args);
  }

  SubscriptionReactivate_reactivate(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SubscriptionReactivate_reactivate, args);
  }

  SubscriptionReactivate_reactivateWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SubscriptionReactivate_reactivate, args);
  }

}

export class SupplierResource extends BaseClient {
  Supplier_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Supplier_delete, args);
  }

  Supplier_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Supplier_delete, args);
  }

  Supplier_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Supplier_get, args);
  }

  Supplier_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Supplier_get, args);
  }

  Supplier_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Supplier_post, args);
  }

  Supplier_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Supplier_post, args);
  }

  Supplier_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Supplier_put, args);
  }

  Supplier_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Supplier_put, args);
  }

  Supplier_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.Supplier_search, args);
  }

  Supplier_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.Supplier_search, args);
  }

  SupplierList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierList_postList, args);
  }

  SupplierList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierList_postList, args);
  }

  SupplierList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierList_putList, args);
  }

  SupplierList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierList_putList, args);
  }

}

export class SupplierCustomerResource extends BaseClient {
  SupplierCustomerSearch_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierCustomerSearch_search, args);
  }

  SupplierCustomerSearch_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierCustomerSearch_search, args);
  }

}

export class SupplierInvoiceResource extends BaseClient {
  SupplierInvoice_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierInvoice_get, args);
  }

  SupplierInvoice_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierInvoice_get, args);
  }

  SupplierInvoice_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierInvoice_search, args);
  }

  SupplierInvoice_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierInvoice_search, args);
  }

  SupplierInvoiceAddPayment_addPayment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceAddPayment_addPayment, args);
  }

  SupplierInvoiceAddPayment_addPaymentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceAddPayment_addPayment, args);
  }

  SupplierInvoiceAddRecipient_addRecipient(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceAddRecipient_addRecipient, args);
  }

  SupplierInvoiceAddRecipient_addRecipientWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceAddRecipient_addRecipient, args);
  }

  SupplierInvoiceAddRecipient_addRecipientToMany(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceAddRecipient_addRecipientToMany, args);
  }

  SupplierInvoiceAddRecipient_addRecipientToManyWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceAddRecipient_addRecipientToMany, args);
  }

  SupplierInvoiceApprove_approve(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceApprove_approve, args);
  }

  SupplierInvoiceApprove_approveWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceApprove_approve, args);
  }

  SupplierInvoiceApprove_approveMany(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceApprove_approveMany, args);
  }

  SupplierInvoiceApprove_approveManyWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceApprove_approveMany, args);
  }

  SupplierInvoiceChangeDimension_changeDimensionMany(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceChangeDimension_changeDimensionMany, args);
  }

  SupplierInvoiceChangeDimension_changeDimensionManyWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceChangeDimension_changeDimensionMany, args);
  }

  SupplierInvoiceForApproval_getApprovalInvoices(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceForApproval_getApprovalInvoices, args);
  }

  SupplierInvoiceForApproval_getApprovalInvoicesWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceForApproval_getApprovalInvoices, args);
  }

  SupplierInvoicePdf_downloadPdf(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierInvoicePdf_downloadPdf, args);
  }

  SupplierInvoicePdf_downloadPdfWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierInvoicePdf_downloadPdf, args);
  }

  SupplierInvoiceReject_reject(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceReject_reject, args);
  }

  SupplierInvoiceReject_rejectWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceReject_reject, args);
  }

  SupplierInvoiceReject_rejectMany(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceReject_rejectMany, args);
  }

  SupplierInvoiceReject_rejectManyWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceReject_rejectMany, args);
  }

  SupplierInvoiceVoucherPostings_putPostings(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceVoucherPostings_putPostings, args);
  }

  SupplierInvoiceVoucherPostings_putPostingsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupplierInvoiceVoucherPostings_putPostings, args);
  }

}

export class SupportDashboardResource extends BaseClient {
  SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomers(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomers, args);
  }

  SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomersWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomers, args);
  }

  SupportDashboardExport_export(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.SupportDashboardExport_export, args);
  }

  SupportDashboardExport_exportWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.SupportDashboardExport_export, args);
  }

}

export class TimesheetResource extends BaseClient {
  TimesheetAllocated_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetAllocated_delete, args);
  }

  TimesheetAllocated_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetAllocated_delete, args);
  }

  TimesheetAllocated_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetAllocated_get, args);
  }

  TimesheetAllocated_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetAllocated_get, args);
  }

  TimesheetAllocated_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetAllocated_post, args);
  }

  TimesheetAllocated_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetAllocated_post, args);
  }

  TimesheetAllocated_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetAllocated_put, args);
  }

  TimesheetAllocated_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetAllocated_put, args);
  }

  TimesheetAllocated_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetAllocated_search, args);
  }

  TimesheetAllocated_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetAllocated_search, args);
  }

  TimesheetAllocatedApprove_approve(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetAllocatedApprove_approve, args);
  }

  TimesheetAllocatedApprove_approveWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetAllocatedApprove_approve, args);
  }

  TimesheetAllocatedApproveList_approveList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetAllocatedApproveList_approveList, args);
  }

  TimesheetAllocatedApproveList_approveListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetAllocatedApproveList_approveList, args);
  }

  TimesheetAllocatedList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetAllocatedList_postList, args);
  }

  TimesheetAllocatedList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetAllocatedList_postList, args);
  }

  TimesheetAllocatedList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetAllocatedList_putList, args);
  }

  TimesheetAllocatedList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetAllocatedList_putList, args);
  }

  TimesheetAllocatedUnapprove_unapprove(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetAllocatedUnapprove_unapprove, args);
  }

  TimesheetAllocatedUnapprove_unapproveWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetAllocatedUnapprove_unapprove, args);
  }

  TimesheetAllocatedUnapproveList_unapproveList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetAllocatedUnapproveList_unapproveList, args);
  }

  TimesheetAllocatedUnapproveList_unapproveListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetAllocatedUnapproveList_unapproveList, args);
  }

  TimesheetCompanyHoliday_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_delete, args);
  }

  TimesheetCompanyHoliday_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_delete, args);
  }

  TimesheetCompanyHoliday_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_get, args);
  }

  TimesheetCompanyHoliday_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_get, args);
  }

  TimesheetCompanyHoliday_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_post, args);
  }

  TimesheetCompanyHoliday_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_post, args);
  }

  TimesheetCompanyHoliday_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_put, args);
  }

  TimesheetCompanyHoliday_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_put, args);
  }

  TimesheetCompanyHoliday_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_search, args);
  }

  TimesheetCompanyHoliday_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetCompanyHoliday_search, args);
  }

  TimesheetEntry_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetEntry_delete, args);
  }

  TimesheetEntry_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetEntry_delete, args);
  }

  TimesheetEntry_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetEntry_get, args);
  }

  TimesheetEntry_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetEntry_get, args);
  }

  TimesheetEntry_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetEntry_post, args);
  }

  TimesheetEntry_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetEntry_post, args);
  }

  TimesheetEntry_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetEntry_put, args);
  }

  TimesheetEntry_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetEntry_put, args);
  }

  TimesheetEntry_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetEntry_search, args);
  }

  TimesheetEntry_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetEntry_search, args);
  }

  TimesheetEntryList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetEntryList_postList, args);
  }

  TimesheetEntryList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetEntryList_postList, args);
  }

  TimesheetEntryList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetEntryList_putList, args);
  }

  TimesheetEntryList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetEntryList_putList, args);
  }

  TimesheetEntryRecentActivities_getRecentActivities(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetEntryRecentActivities_getRecentActivities, args);
  }

  TimesheetEntryRecentActivities_getRecentActivitiesWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetEntryRecentActivities_getRecentActivities, args);
  }

  TimesheetEntryRecentProjects_getRecentProjects(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetEntryRecentProjects_getRecentProjects, args);
  }

  TimesheetEntryRecentProjects_getRecentProjectsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetEntryRecentProjects_getRecentProjects, args);
  }

  TimesheetEntryTotalHours_getTotalHours(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetEntryTotalHours_getTotalHours, args);
  }

  TimesheetEntryTotalHours_getTotalHoursWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetEntryTotalHours_getTotalHours, args);
  }

  TimesheetMonth_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetMonth_get, args);
  }

  TimesheetMonth_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetMonth_get, args);
  }

  TimesheetMonthApprove_approve(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetMonthApprove_approve, args);
  }

  TimesheetMonthApprove_approveWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetMonthApprove_approve, args);
  }

  TimesheetMonthByMonthNumber_getByMonthNumber(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetMonthByMonthNumber_getByMonthNumber, args);
  }

  TimesheetMonthByMonthNumber_getByMonthNumberWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetMonthByMonthNumber_getByMonthNumber, args);
  }

  TimesheetMonthByMonthNumberList_getByMonthNumberList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetMonthByMonthNumberList_getByMonthNumberList, args);
  }

  TimesheetMonthByMonthNumberList_getByMonthNumberListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetMonthByMonthNumberList_getByMonthNumberList, args);
  }

  TimesheetMonthComplete_complete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetMonthComplete_complete, args);
  }

  TimesheetMonthComplete_completeWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetMonthComplete_complete, args);
  }

  TimesheetMonthReopen_reopen(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetMonthReopen_reopen, args);
  }

  TimesheetMonthReopen_reopenWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetMonthReopen_reopen, args);
  }

  TimesheetMonthUnapprove_unapprove(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetMonthUnapprove_unapprove, args);
  }

  TimesheetMonthUnapprove_unapproveWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetMonthUnapprove_unapprove, args);
  }

  TimesheetSalaryProjectTypeSpecification_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_delete, args);
  }

  TimesheetSalaryProjectTypeSpecification_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_delete, args);
  }

  TimesheetSalaryProjectTypeSpecification_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_get, args);
  }

  TimesheetSalaryProjectTypeSpecification_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_get, args);
  }

  TimesheetSalaryProjectTypeSpecification_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_post, args);
  }

  TimesheetSalaryProjectTypeSpecification_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_post, args);
  }

  TimesheetSalaryProjectTypeSpecification_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_put, args);
  }

  TimesheetSalaryProjectTypeSpecification_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_put, args);
  }

  TimesheetSalaryProjectTypeSpecification_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_search, args);
  }

  TimesheetSalaryProjectTypeSpecification_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryProjectTypeSpecification_search, args);
  }

  TimesheetSalaryTypeSpecification_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_delete, args);
  }

  TimesheetSalaryTypeSpecification_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_delete, args);
  }

  TimesheetSalaryTypeSpecification_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_get, args);
  }

  TimesheetSalaryTypeSpecification_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_get, args);
  }

  TimesheetSalaryTypeSpecification_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_post, args);
  }

  TimesheetSalaryTypeSpecification_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_post, args);
  }

  TimesheetSalaryTypeSpecification_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_put, args);
  }

  TimesheetSalaryTypeSpecification_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_put, args);
  }

  TimesheetSalaryTypeSpecification_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_search, args);
  }

  TimesheetSalaryTypeSpecification_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetSalaryTypeSpecification_search, args);
  }

  TimesheetSettings_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetSettings_get, args);
  }

  TimesheetSettings_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetSettings_get, args);
  }

  TimesheetTimeClock_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetTimeClock_get, args);
  }

  TimesheetTimeClock_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetTimeClock_get, args);
  }

  TimesheetTimeClock_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetTimeClock_put, args);
  }

  TimesheetTimeClock_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetTimeClock_put, args);
  }

  TimesheetTimeClock_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetTimeClock_search, args);
  }

  TimesheetTimeClock_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetTimeClock_search, args);
  }

  TimesheetTimeClockPresent_getPresent(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetTimeClockPresent_getPresent, args);
  }

  TimesheetTimeClockPresent_getPresentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetTimeClockPresent_getPresent, args);
  }

  TimesheetTimeClockStart_start(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetTimeClockStart_start, args);
  }

  TimesheetTimeClockStart_startWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetTimeClockStart_start, args);
  }

  TimesheetTimeClockStop_stop(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetTimeClockStop_stop, args);
  }

  TimesheetTimeClockStop_stopWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetTimeClockStop_stop, args);
  }

  TimesheetWeek_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetWeek_search, args);
  }

  TimesheetWeek_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetWeek_search, args);
  }

  TimesheetWeekApprove_approve(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetWeekApprove_approve, args);
  }

  TimesheetWeekApprove_approveWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetWeekApprove_approve, args);
  }

  TimesheetWeekComplete_complete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetWeekComplete_complete, args);
  }

  TimesheetWeekComplete_completeWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetWeekComplete_complete, args);
  }

  TimesheetWeekReopen_reopen(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetWeekReopen_reopen, args);
  }

  TimesheetWeekReopen_reopenWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetWeekReopen_reopen, args);
  }

  TimesheetWeekUnapprove_unapprove(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TimesheetWeekUnapprove_unapprove, args);
  }

  TimesheetWeekUnapprove_unapproveWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TimesheetWeekUnapprove_unapprove, args);
  }

}

export class TokenResource extends BaseClient {
  TokenConsumerByToken_getByToken(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TokenConsumerByToken_getByToken, args);
  }

  TokenConsumerByToken_getByTokenWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TokenConsumerByToken_getByToken, args);
  }

  TokenEmployeeCreate_create(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TokenEmployeeCreate_create, args);
  }

  TokenEmployeeCreate_createWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TokenEmployeeCreate_create, args);
  }

  TokenSession_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TokenSession_delete, args);
  }

  TokenSession_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TokenSession_delete, args);
  }

  TokenSessionCreate_create(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TokenSessionCreate_create, args);
  }

  TokenSessionCreate_createWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TokenSessionCreate_create, args);
  }

  TokenSessionCreate_createWithBody(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TokenSessionCreate_createWithBody, args);
  }

  TokenSessionCreate_createWithBodyWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TokenSessionCreate_createWithBody, args);
  }

  TokenSessionWhoAmI_whoAmI(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TokenSessionWhoAmI_whoAmI, args);
  }

  TokenSessionWhoAmI_whoAmIWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TokenSessionWhoAmI_whoAmI, args);
  }

}

export class TransportTypeResource extends BaseClient {
  TransportType_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TransportType_get, args);
  }

  TransportType_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TransportType_get, args);
  }

  TransportType_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TransportType_search, args);
  }

  TransportType_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TransportType_search, args);
  }

}

export class TravelExpenseResource extends BaseClient {
  TravelExpense_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpense_delete, args);
  }

  TravelExpense_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpense_delete, args);
  }

  TravelExpense_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpense_get, args);
  }

  TravelExpense_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpense_get, args);
  }

  TravelExpense_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpense_post, args);
  }

  TravelExpense_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpense_post, args);
  }

  TravelExpense_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpense_put, args);
  }

  TravelExpense_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpense_put, args);
  }

  TravelExpense_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpense_search, args);
  }

  TravelExpense_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpense_search, args);
  }

  TravelExpenseAccommodationAllowance_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_delete, args);
  }

  TravelExpenseAccommodationAllowance_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_delete, args);
  }

  TravelExpenseAccommodationAllowance_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_get, args);
  }

  TravelExpenseAccommodationAllowance_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_get, args);
  }

  TravelExpenseAccommodationAllowance_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_post, args);
  }

  TravelExpenseAccommodationAllowance_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_post, args);
  }

  TravelExpenseAccommodationAllowance_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_put, args);
  }

  TravelExpenseAccommodationAllowance_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_put, args);
  }

  TravelExpenseAccommodationAllowance_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_search, args);
  }

  TravelExpenseAccommodationAllowance_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseAccommodationAllowance_search, args);
  }

  TravelExpenseApprove_approve(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseApprove_approve, args);
  }

  TravelExpenseApprove_approveWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseApprove_approve, args);
  }

  TravelExpenseAttachment_deleteAttachment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseAttachment_deleteAttachment, args);
  }

  TravelExpenseAttachment_deleteAttachmentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseAttachment_deleteAttachment, args);
  }

  TravelExpenseAttachment_downloadAttachment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseAttachment_downloadAttachment, args);
  }

  TravelExpenseAttachment_downloadAttachmentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseAttachment_downloadAttachment, args);
  }

  TravelExpenseAttachment_uploadAttachment(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseAttachment_uploadAttachment, args);
  }

  TravelExpenseAttachment_uploadAttachmentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseAttachment_uploadAttachment, args);
  }

  TravelExpenseAttachmentList_uploadAttachments(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseAttachmentList_uploadAttachments, args);
  }

  TravelExpenseAttachmentList_uploadAttachmentsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseAttachmentList_uploadAttachments, args);
  }

  TravelExpenseConvert_convert(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseConvert_convert, args);
  }

  TravelExpenseConvert_convertWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseConvert_convert, args);
  }

  TravelExpenseCopy_copy(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCopy_copy, args);
  }

  TravelExpenseCopy_copyWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCopy_copy, args);
  }

  TravelExpenseCost_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCost_delete, args);
  }

  TravelExpenseCost_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCost_delete, args);
  }

  TravelExpenseCost_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCost_get, args);
  }

  TravelExpenseCost_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCost_get, args);
  }

  TravelExpenseCost_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCost_post, args);
  }

  TravelExpenseCost_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCost_post, args);
  }

  TravelExpenseCost_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCost_put, args);
  }

  TravelExpenseCost_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCost_put, args);
  }

  TravelExpenseCost_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCost_search, args);
  }

  TravelExpenseCost_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCost_search, args);
  }

  TravelExpenseCostCategory_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostCategory_get, args);
  }

  TravelExpenseCostCategory_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostCategory_get, args);
  }

  TravelExpenseCostCategory_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostCategory_search, args);
  }

  TravelExpenseCostCategory_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostCategory_search, args);
  }

  TravelExpenseCostList_putList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostList_putList, args);
  }

  TravelExpenseCostList_putListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostList_putList, args);
  }

  TravelExpenseCostParticipant_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipant_delete, args);
  }

  TravelExpenseCostParticipant_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipant_delete, args);
  }

  TravelExpenseCostParticipant_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipant_get, args);
  }

  TravelExpenseCostParticipant_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipant_get, args);
  }

  TravelExpenseCostParticipant_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipant_post, args);
  }

  TravelExpenseCostParticipant_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipant_post, args);
  }

  TravelExpenseCostParticipantCostParticipants_getCostParticipants(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantCostParticipants_getCostParticipants, args);
  }

  TravelExpenseCostParticipantCostParticipants_getCostParticipantsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantCostParticipants_getCostParticipants, args);
  }

  TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvanced(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvanced, args);
  }

  TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvancedWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvanced, args);
  }

  TravelExpenseCostParticipantList_deleteList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantList_deleteList, args);
  }

  TravelExpenseCostParticipantList_deleteListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantList_deleteList, args);
  }

  TravelExpenseCostParticipantList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantList_postList, args);
  }

  TravelExpenseCostParticipantList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCostParticipantList_postList, args);
  }

  TravelExpenseCreateVouchers_createVouchers(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseCreateVouchers_createVouchers, args);
  }

  TravelExpenseCreateVouchers_createVouchersWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseCreateVouchers_createVouchers, args);
  }

  TravelExpenseDeliver_deliver(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseDeliver_deliver, args);
  }

  TravelExpenseDeliver_deliverWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseDeliver_deliver, args);
  }

  TravelExpenseDrivingStop_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseDrivingStop_delete, args);
  }

  TravelExpenseDrivingStop_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseDrivingStop_delete, args);
  }

  TravelExpenseDrivingStop_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseDrivingStop_get, args);
  }

  TravelExpenseDrivingStop_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseDrivingStop_get, args);
  }

  TravelExpenseDrivingStop_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseDrivingStop_post, args);
  }

  TravelExpenseDrivingStop_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseDrivingStop_post, args);
  }

  TravelExpenseMileageAllowance_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_delete, args);
  }

  TravelExpenseMileageAllowance_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_delete, args);
  }

  TravelExpenseMileageAllowance_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_get, args);
  }

  TravelExpenseMileageAllowance_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_get, args);
  }

  TravelExpenseMileageAllowance_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_post, args);
  }

  TravelExpenseMileageAllowance_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_post, args);
  }

  TravelExpenseMileageAllowance_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_put, args);
  }

  TravelExpenseMileageAllowance_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_put, args);
  }

  TravelExpenseMileageAllowance_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_search, args);
  }

  TravelExpenseMileageAllowance_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseMileageAllowance_search, args);
  }

  TravelExpensePassenger_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePassenger_delete, args);
  }

  TravelExpensePassenger_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePassenger_delete, args);
  }

  TravelExpensePassenger_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePassenger_get, args);
  }

  TravelExpensePassenger_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePassenger_get, args);
  }

  TravelExpensePassenger_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePassenger_post, args);
  }

  TravelExpensePassenger_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePassenger_post, args);
  }

  TravelExpensePassenger_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePassenger_put, args);
  }

  TravelExpensePassenger_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePassenger_put, args);
  }

  TravelExpensePassenger_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePassenger_search, args);
  }

  TravelExpensePassenger_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePassenger_search, args);
  }

  TravelExpensePassengerList_deleteList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePassengerList_deleteList, args);
  }

  TravelExpensePassengerList_deleteListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePassengerList_deleteList, args);
  }

  TravelExpensePassengerList_postList(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePassengerList_postList, args);
  }

  TravelExpensePassengerList_postListWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePassengerList_postList, args);
  }

  TravelExpensePaymentType_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePaymentType_get, args);
  }

  TravelExpensePaymentType_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePaymentType_get, args);
  }

  TravelExpensePaymentType_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePaymentType_search, args);
  }

  TravelExpensePaymentType_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePaymentType_search, args);
  }

  TravelExpensePerDiemCompensation_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_delete, args);
  }

  TravelExpensePerDiemCompensation_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_delete, args);
  }

  TravelExpensePerDiemCompensation_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_get, args);
  }

  TravelExpensePerDiemCompensation_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_get, args);
  }

  TravelExpensePerDiemCompensation_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_post, args);
  }

  TravelExpensePerDiemCompensation_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_post, args);
  }

  TravelExpensePerDiemCompensation_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_put, args);
  }

  TravelExpensePerDiemCompensation_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_put, args);
  }

  TravelExpensePerDiemCompensation_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_search, args);
  }

  TravelExpensePerDiemCompensation_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpensePerDiemCompensation_search, args);
  }

  TravelExpenseRate_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseRate_get, args);
  }

  TravelExpenseRate_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseRate_get, args);
  }

  TravelExpenseRate_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseRate_search, args);
  }

  TravelExpenseRate_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseRate_search, args);
  }

  TravelExpenseRateCategory_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseRateCategory_get, args);
  }

  TravelExpenseRateCategory_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseRateCategory_get, args);
  }

  TravelExpenseRateCategory_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseRateCategory_search, args);
  }

  TravelExpenseRateCategory_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseRateCategory_search, args);
  }

  TravelExpenseRateCategoryGroup_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseRateCategoryGroup_get, args);
  }

  TravelExpenseRateCategoryGroup_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseRateCategoryGroup_get, args);
  }

  TravelExpenseRateCategoryGroup_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseRateCategoryGroup_search, args);
  }

  TravelExpenseRateCategoryGroup_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseRateCategoryGroup_search, args);
  }

  TravelExpenseSettings_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseSettings_get, args);
  }

  TravelExpenseSettings_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseSettings_get, args);
  }

  TravelExpenseUnapprove_unapprove(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseUnapprove_unapprove, args);
  }

  TravelExpenseUnapprove_unapproveWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseUnapprove_unapprove, args);
  }

  TravelExpenseUndeliver_undeliver(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseUndeliver_undeliver, args);
  }

  TravelExpenseUndeliver_undeliverWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseUndeliver_undeliver, args);
  }

  TravelExpenseZone_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseZone_get, args);
  }

  TravelExpenseZone_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseZone_get, args);
  }

  TravelExpenseZone_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.TravelExpenseZone_search, args);
  }

  TravelExpenseZone_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.TravelExpenseZone_search, args);
  }

}

export class UserLicenseResource extends BaseClient {
  UserLicenseExport_export(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.UserLicenseExport_export, args);
  }

  UserLicenseExport_exportWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.UserLicenseExport_export, args);
  }

}

export class VatReturnsResource extends BaseClient {
  VatReturnsComment_query(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VatReturnsComment_query, args);
  }

  VatReturnsComment_queryWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VatReturnsComment_query, args);
  }

  VatReturnsCommentAll_all(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VatReturnsCommentAll_all, args);
  }

  VatReturnsCommentAll_allWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VatReturnsCommentAll_all, args);
  }

}

export class VatTermSizeSettingsResource extends BaseClient {
  VatTermSizeSettings_delete(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VatTermSizeSettings_delete, args);
  }

  VatTermSizeSettings_deleteWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VatTermSizeSettings_delete, args);
  }

  VatTermSizeSettings_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VatTermSizeSettings_get, args);
  }

  VatTermSizeSettings_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VatTermSizeSettings_get, args);
  }

  VatTermSizeSettings_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VatTermSizeSettings_post, args);
  }

  VatTermSizeSettings_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VatTermSizeSettings_post, args);
  }

  VatTermSizeSettings_put(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VatTermSizeSettings_put, args);
  }

  VatTermSizeSettings_putWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VatTermSizeSettings_put, args);
  }

  VatTermSizeSettings_query(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VatTermSizeSettings_query, args);
  }

  VatTermSizeSettings_queryWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VatTermSizeSettings_query, args);
  }

}

export class VoucherApprovalListElementResource extends BaseClient {
  VoucherApprovalListElement_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VoucherApprovalListElement_get, args);
  }

  VoucherApprovalListElement_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VoucherApprovalListElement_get, args);
  }

}

export class VoucherInboxResource extends BaseClient {
  VoucherInboxEmailAddress_getEmailAddress(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VoucherInboxEmailAddress_getEmailAddress, args);
  }

  VoucherInboxEmailAddress_getEmailAddressWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VoucherInboxEmailAddress_getEmailAddress, args);
  }

  VoucherInboxInboxCount_getInboxCount(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VoucherInboxInboxCount_getInboxCount, args);
  }

  VoucherInboxInboxCount_getInboxCountWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VoucherInboxInboxCount_getInboxCount, args);
  }

}

export class VoucherMessageResource extends BaseClient {
  VoucherMessage_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VoucherMessage_post, args);
  }

  VoucherMessage_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VoucherMessage_post, args);
  }

  VoucherMessage_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VoucherMessage_search, args);
  }

  VoucherMessage_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VoucherMessage_search, args);
  }

}

export class VoucherStatusResource extends BaseClient {
  VoucherStatus_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VoucherStatus_get, args);
  }

  VoucherStatus_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VoucherStatus_get, args);
  }

  VoucherStatus_post(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VoucherStatus_post, args);
  }

  VoucherStatus_postWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VoucherStatus_post, args);
  }

  VoucherStatus_search(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.VoucherStatus_search, args);
  }

  VoucherStatus_searchWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.VoucherStatus_search, args);
  }

}

export class YearEndResource extends BaseClient {
  YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypes(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypes, args);
  }

  YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypesWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypes, args);
  }

  YearEndPenneoCasefiles_createCaseFile(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefiles_createCaseFile, args);
  }

  YearEndPenneoCasefiles_createCaseFileWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefiles_createCaseFile, args);
  }

  YearEndPenneoCasefiles_deleteCaseFile(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefiles_deleteCaseFile, args);
  }

  YearEndPenneoCasefiles_deleteCaseFileWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefiles_deleteCaseFile, args);
  }

  YearEndPenneoCasefiles_getCaseFiles(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefiles_getCaseFiles, args);
  }

  YearEndPenneoCasefiles_getCaseFilesWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefiles_getCaseFiles, args);
  }

  YearEndPenneoCasefilesActivate_activateCaseFile(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesActivate_activateCaseFile, args);
  }

  YearEndPenneoCasefilesActivate_activateCaseFileWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesActivate_activateCaseFile, args);
  }

  YearEndPenneoCasefilesSigners_deleteSigner(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesSigners_deleteSigner, args);
  }

  YearEndPenneoCasefilesSigners_deleteSignerWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesSigners_deleteSigner, args);
  }

  YearEndPenneoCasefilesSignersReactivate_reactivateSigner(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesSignersReactivate_reactivateSigner, args);
  }

  YearEndPenneoCasefilesSignersReactivate_reactivateSignerWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesSignersReactivate_reactivateSigner, args);
  }

  YearEndPenneoCasefilesSignersResend_resendSignLink(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesSignersResend_resendSignLink, args);
  }

  YearEndPenneoCasefilesSignersResend_resendSignLinkWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoCasefilesSignersResend_resendSignLink, args);
  }

  YearEndPenneoDocuments_createDocument(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoDocuments_createDocument, args);
  }

  YearEndPenneoDocuments_createDocumentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoDocuments_createDocument, args);
  }

  YearEndPenneoDocuments_deleteDocument(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoDocuments_deleteDocument, args);
  }

  YearEndPenneoDocuments_deleteDocumentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoDocuments_deleteDocument, args);
  }

  YearEndPenneoDocuments_updateDocument(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoDocuments_updateDocument, args);
  }

  YearEndPenneoDocuments_updateDocumentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoDocuments_updateDocument, args);
  }

  YearEndPenneoDocumentsDownload_downloadDocument(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoDocumentsDownload_downloadDocument, args);
  }

  YearEndPenneoDocumentsDownload_downloadDocumentWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoDocumentsDownload_downloadDocument, args);
  }

  YearEndPenneoRecipients_deleteRecipients(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoRecipients_deleteRecipients, args);
  }

  YearEndPenneoRecipients_deleteRecipientsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoRecipients_deleteRecipients, args);
  }

  YearEndPenneoRecipients_getRecipients(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoRecipients_getRecipients, args);
  }

  YearEndPenneoRecipients_getRecipientsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoRecipients_getRecipients, args);
  }

  YearEndPenneoRecipients_postRecipients(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoRecipients_postRecipients, args);
  }

  YearEndPenneoRecipients_postRecipientsWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoRecipients_postRecipients, args);
  }

  YearEndPenneoSession_authenticateAndListCaseFiles(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoSession_authenticateAndListCaseFiles, args);
  }

  YearEndPenneoSession_authenticateAndListCaseFilesWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoSession_authenticateAndListCaseFiles, args);
  }

  YearEndPenneoSignature_lines_createAndLinkSignatureLine(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoSignature_lines_createAndLinkSignatureLine, args);
  }

  YearEndPenneoSignature_lines_createAndLinkSignatureLineWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoSignature_lines_createAndLinkSignatureLine, args);
  }

  YearEndPenneoSync_sync(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoSync_sync, args);
  }

  YearEndPenneoSync_syncWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoSync_sync, args);
  }

  YearEndPenneoUpdateCompletedStatus_updateCompletedStatus(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndPenneoUpdateCompletedStatus_updateCompletedStatus, args);
  }

  YearEndPenneoUpdateCompletedStatus_updateCompletedStatusWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndPenneoUpdateCompletedStatus_updateCompletedStatus, args);
  }

  YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024, args);
  }

  YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024WithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024, args);
  }

  YearEndResearchAndDevelopment2024_get(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_get, args);
  }

  YearEndResearchAndDevelopment2024_getWithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_get, args);
  }

  YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024, args);
  }

  YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024WithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024, args);
  }

  YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024(args: GeneratedMethodArgs = {}) {
    return this.callOperation<unknown>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024, args);
  }

  YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024WithMeta(args: GeneratedMethodArgs = {}): Promise<ApiResult<unknown>> {
    return this.callOperationWithMeta<unknown>(OPERATION_DEFINITIONS.YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024, args);
  }

}

export const resourceMixins = [
  AccountantDashboardResource,
  AccountingOfficeResource,
  ActivityResource,
  AssetResource,
  AttestationResource,
  BalanceResource,
  BalanceSheetResource,
  BankResource,
  CompanyResource,
  ContactResource,
  CountryResource,
  CrmResource,
  CurrencyResource,
  CustomerResource,
  DeliveryAddressResource,
  DepartmentResource,
  DivisionResource,
  DocumentResource,
  DocumentArchiveResource,
  EmployeeResource,
  EventResource,
  IncomingInvoiceResource,
  InternalResource,
  InventoryResource,
  InvoiceResource,
  InvoiceRemarkResource,
  LedgerResource,
  MunicipalityResource,
  OrderResource,
  PensionResource,
  PickupPointResource,
  PlatformAgnosticResource,
  ProductResource,
  ProjectResource,
  PurchaseOrderResource,
  ReminderResource,
  ResultbudgetResource,
  SaftResource,
  SalaryResource,
  SubscriptionResource,
  SupplierResource,
  SupplierCustomerResource,
  SupplierInvoiceResource,
  SupportDashboardResource,
  TimesheetResource,
  TokenResource,
  TransportTypeResource,
  TravelExpenseResource,
  UserLicenseResource,
  VatReturnsResource,
  VatTermSizeSettingsResource,
  VoucherApprovalListElementResource,
  VoucherInboxResource,
  VoucherMessageResource,
  VoucherStatusResource,
  YearEndResource,
] as const;

export type GeneratedResourceMixin = AccountantDashboardResource & AccountingOfficeResource & ActivityResource & AssetResource & AttestationResource & BalanceResource & BalanceSheetResource & BankResource & CompanyResource & ContactResource & CountryResource & CrmResource & CurrencyResource & CustomerResource & DeliveryAddressResource & DepartmentResource & DivisionResource & DocumentResource & DocumentArchiveResource & EmployeeResource & EventResource & IncomingInvoiceResource & InternalResource & InventoryResource & InvoiceResource & InvoiceRemarkResource & LedgerResource & MunicipalityResource & OrderResource & PensionResource & PickupPointResource & PlatformAgnosticResource & ProductResource & ProjectResource & PurchaseOrderResource & ReminderResource & ResultbudgetResource & SaftResource & SalaryResource & SubscriptionResource & SupplierResource & SupplierCustomerResource & SupplierInvoiceResource & SupportDashboardResource & TimesheetResource & TokenResource & TransportTypeResource & TravelExpenseResource & UserLicenseResource & VatReturnsResource & VatTermSizeSettingsResource & VoucherApprovalListElementResource & VoucherInboxResource & VoucherMessageResource & VoucherStatusResource & YearEndResource;
