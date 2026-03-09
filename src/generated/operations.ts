import type { OperationDefinition } from '../types';
import type { operations } from './openapi';

export const OPERATION_OPENAPI_IDS = {
  AccountantDashboardNews_get: 'AccountantDashboardNews_get',
  AccountantDashboardNewsTags_getTags: 'AccountantDashboardNewsTags_getTags',
  AccountingOfficeReconciliationsControl_get: 'AccountingOfficeReconciliationsControl_get',
  AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliation: 'AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliation',
  AccountingOfficeReconciliationsControlReconcile_reconcile: 'AccountingOfficeReconciliationsControlReconcile_reconcile',
  AccountingOfficeReconciliationsControlRequestControl_requestControl: 'AccountingOfficeReconciliationsControlRequestControl_requestControl',
  Activity_get: 'Activity_get',
  Activity_post: 'Activity_post',
  Activity_search: 'Activity_search',
  ActivityForTimeSheet_getForTimeSheet: 'ActivityForTimeSheet_getForTimeSheet',
  ActivityList_postList: 'ActivityList_postList',
  Asset_delete: 'Asset_delete',
  Asset_get: 'Asset_get',
  Asset_post: 'Asset_post',
  Asset_put: 'Asset_put',
  Asset_search: 'Asset_search',
  AssetAssetsExist_getAssetsExist: 'AssetAssetsExist_getAssetsExist',
  AssetBalanceAccountsSum_balanceAccountsSum: 'AssetBalanceAccountsSum_balanceAccountsSum',
  AssetCanDelete_canDelete: 'AssetCanDelete_canDelete',
  AssetDeleteImport_deleteImport: 'AssetDeleteImport_deleteImport',
  AssetDeleteStartingBalance_deleteStartingBalance: 'AssetDeleteStartingBalance_deleteStartingBalance',
  AssetDuplicate_postDuplicate: 'AssetDuplicate_postDuplicate',
  AssetList_postList: 'AssetList_postList',
  AssetPostings_getPostings: 'AssetPostings_getPostings',
  AssetUpload_upload: 'AssetUpload_upload',
  AttestationAddApprover_addApprover: 'AttestationAddApprover_addApprover',
  AttestationAddApproverPermission_addApproverPermission: 'AttestationAddApproverPermission_addApproverPermission',
  AttestationCompanyModules_get: 'AttestationCompanyModules_get',
  BalanceReconciliationAccountVouchers_getVouchers: 'BalanceReconciliationAccountVouchers_getVouchers',
  BalanceReconciliationAnnualContext_postAnnualContext: 'BalanceReconciliationAnnualContext_postAnnualContext',
  BalanceReconciliationAttachmentPdf_getAttachment: 'BalanceReconciliationAttachmentPdf_getAttachment',
  BalanceSheet_search: 'BalanceSheet_search',
  Bank_get: 'Bank_get',
  Bank_search: 'Bank_search',
  BankReconciliation_delete: 'BankReconciliation_delete',
  BankReconciliation_get: 'BankReconciliation_get',
  BankReconciliation_post: 'BankReconciliation_post',
  BankReconciliation_put: 'BankReconciliation_put',
  BankReconciliation_search: 'BankReconciliation_search',
  BankReconciliationAdjustment_adjustment: 'BankReconciliationAdjustment_adjustment',
  BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactions: 'BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactions',
  BankReconciliationLast_last: 'BankReconciliationLast_last',
  BankReconciliationLastClosed_lastClosed: 'BankReconciliationLastClosed_lastClosed',
  BankReconciliationMatch_delete: 'BankReconciliationMatch_delete',
  BankReconciliationMatch_get: 'BankReconciliationMatch_get',
  BankReconciliationMatch_post: 'BankReconciliationMatch_post',
  BankReconciliationMatch_put: 'BankReconciliationMatch_put',
  BankReconciliationMatch_search: 'BankReconciliationMatch_search',
  BankReconciliationMatchCount_count: 'BankReconciliationMatchCount_count',
  BankReconciliationMatchesCounter_get: 'BankReconciliationMatchesCounter_get',
  BankReconciliationMatchesCounter_post: 'BankReconciliationMatchesCounter_post',
  BankReconciliationMatchQuery_query: 'BankReconciliationMatchQuery_query',
  BankReconciliationMatchSuggest_suggest: 'BankReconciliationMatchSuggest_suggest',
  BankReconciliationPaymentType_get: 'BankReconciliationPaymentType_get',
  BankReconciliationPaymentType_search: 'BankReconciliationPaymentType_search',
  BankReconciliationSettings_get: 'BankReconciliationSettings_get',
  BankReconciliationSettings_post: 'BankReconciliationSettings_post',
  BankReconciliationSettings_put: 'BankReconciliationSettings_put',
  BankReconciliationTransactionsUnmatchedcsv_csvTransactions: 'BankReconciliationTransactionsUnmatchedcsv_csvTransactions',
  BankStatement_delete: 'BankStatement_delete',
  BankStatement_get: 'BankStatement_get',
  BankStatement_search: 'BankStatement_search',
  BankStatementImport_importBankStatement: 'BankStatementImport_importBankStatement',
  BankStatementTransaction_get: 'BankStatementTransaction_get',
  BankStatementTransaction_search: 'BankStatementTransaction_search',
  BankStatementTransactionDetails_getDetails: 'BankStatementTransactionDetails_getDetails',
  Company_get: 'Company_get',
  Company_put: 'Company_put',
  CompanyDivisions_getDivisions: 'CompanyDivisions_getDivisions',
  CompanySalesmodules_get: 'CompanySalesmodules_get',
  CompanySalesmodules_post: 'CompanySalesmodules_post',
  CompanySettingsAltinn_put: 'CompanySettingsAltinn_put',
  CompanySettingsAltinn_search: 'CompanySettingsAltinn_search',
  CompanyWithLoginAccess_getWithLoginAccess: 'CompanyWithLoginAccess_getWithLoginAccess',
  Contact_get: 'Contact_get',
  Contact_post: 'Contact_post',
  Contact_put: 'Contact_put',
  Contact_search: 'Contact_search',
  ContactList_deleteByIds: 'ContactList_deleteByIds',
  ContactList_postList: 'ContactList_postList',
  Country_get: 'Country_get',
  Country_search: 'Country_search',
  CrmProspect_get: 'CrmProspect_get',
  CrmProspect_search: 'CrmProspect_search',
  Currency_get: 'Currency_get',
  Currency_search: 'Currency_search',
  CurrencyExchangeRate_convertCurrencyAmount: 'CurrencyExchangeRate_convertCurrencyAmount',
  CurrencyExchangeRate_getAmountCurrency: 'CurrencyExchangeRate_getAmountCurrency',
  CurrencyRate_getRate: 'CurrencyRate_getRate',
  Customer_delete: 'Customer_delete',
  Customer_get: 'Customer_get',
  Customer_post: 'Customer_post',
  Customer_put: 'Customer_put',
  Customer_search: 'Customer_search',
  CustomerCategory_get: 'CustomerCategory_get',
  CustomerCategory_post: 'CustomerCategory_post',
  CustomerCategory_put: 'CustomerCategory_put',
  CustomerCategory_search: 'CustomerCategory_search',
  CustomerList_postList: 'CustomerList_postList',
  CustomerList_putList: 'CustomerList_putList',
  DeliveryAddress_get: 'DeliveryAddress_get',
  DeliveryAddress_put: 'DeliveryAddress_put',
  DeliveryAddress_search: 'DeliveryAddress_search',
  Department_delete: 'Department_delete',
  Department_get: 'Department_get',
  Department_post: 'Department_post',
  Department_put: 'Department_put',
  Department_search: 'Department_search',
  DepartmentList_postList: 'DepartmentList_postList',
  DepartmentList_putList: 'DepartmentList_putList',
  DepartmentQuery_query: 'DepartmentQuery_query',
  Division_post: 'Division_post',
  Division_put: 'Division_put',
  Division_search: 'Division_search',
  DivisionList_postList: 'DivisionList_postList',
  DivisionList_putList: 'DivisionList_putList',
  Document_get: 'Document_get',
  DocumentArchive_delete: 'DocumentArchive_delete',
  DocumentArchive_put: 'DocumentArchive_put',
  DocumentArchiveAccount_accountPost: 'DocumentArchiveAccount_accountPost',
  DocumentArchiveAccount_getAccount: 'DocumentArchiveAccount_getAccount',
  DocumentArchiveCustomer_customerPost: 'DocumentArchiveCustomer_customerPost',
  DocumentArchiveCustomer_getCustomer: 'DocumentArchiveCustomer_getCustomer',
  DocumentArchiveDynamicControlForm_dynamicControlFormPost: 'DocumentArchiveDynamicControlForm_dynamicControlFormPost',
  DocumentArchiveDynamicControlForm_getDynamicControlForm: 'DocumentArchiveDynamicControlForm_getDynamicControlForm',
  DocumentArchiveEmployee_employeePost: 'DocumentArchiveEmployee_employeePost',
  DocumentArchiveEmployee_getEmployee: 'DocumentArchiveEmployee_getEmployee',
  DocumentArchiveProduct_getProduct: 'DocumentArchiveProduct_getProduct',
  DocumentArchiveProduct_productPost: 'DocumentArchiveProduct_productPost',
  DocumentArchiveProject_getProject: 'DocumentArchiveProject_getProject',
  DocumentArchiveProject_projectPost: 'DocumentArchiveProject_projectPost',
  DocumentArchiveReception_receptionPost: 'DocumentArchiveReception_receptionPost',
  DocumentArchiveSupplier_getSupplier: 'DocumentArchiveSupplier_getSupplier',
  DocumentArchiveSupplier_supplierPost: 'DocumentArchiveSupplier_supplierPost',
  DocumentContent_downloadContent: 'DocumentContent_downloadContent',
  Employee_get: 'Employee_get',
  Employee_post: 'Employee_post',
  Employee_put: 'Employee_put',
  Employee_search: 'Employee_search',
  EmployeeCategory_delete: 'EmployeeCategory_delete',
  EmployeeCategory_get: 'EmployeeCategory_get',
  EmployeeCategory_post: 'EmployeeCategory_post',
  EmployeeCategory_put: 'EmployeeCategory_put',
  EmployeeCategory_search: 'EmployeeCategory_search',
  EmployeeCategoryList_deleteByIds: 'EmployeeCategoryList_deleteByIds',
  EmployeeCategoryList_postList: 'EmployeeCategoryList_postList',
  EmployeeCategoryList_putList: 'EmployeeCategoryList_putList',
  EmployeeEmployment_get: 'EmployeeEmployment_get',
  EmployeeEmployment_post: 'EmployeeEmployment_post',
  EmployeeEmployment_put: 'EmployeeEmployment_put',
  EmployeeEmployment_search: 'EmployeeEmployment_search',
  EmployeeEmploymentDetails_get: 'EmployeeEmploymentDetails_get',
  EmployeeEmploymentDetails_post: 'EmployeeEmploymentDetails_post',
  EmployeeEmploymentDetails_put: 'EmployeeEmploymentDetails_put',
  EmployeeEmploymentDetails_search: 'EmployeeEmploymentDetails_search',
  EmployeeEmploymentEmploymentType_search: 'EmployeeEmploymentEmploymentType_search',
  EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonType: 'EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonType',
  EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormType: 'EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormType',
  EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentType: 'EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentType',
  EmployeeEmploymentEmploymentTypeSalaryType_getSalaryType: 'EmployeeEmploymentEmploymentTypeSalaryType_getSalaryType',
  EmployeeEmploymentEmploymentTypeScheduleType_getScheduleType: 'EmployeeEmploymentEmploymentTypeScheduleType_getScheduleType',
  EmployeeEmploymentLeaveOfAbsence_get: 'EmployeeEmploymentLeaveOfAbsence_get',
  EmployeeEmploymentLeaveOfAbsence_post: 'EmployeeEmploymentLeaveOfAbsence_post',
  EmployeeEmploymentLeaveOfAbsence_put: 'EmployeeEmploymentLeaveOfAbsence_put',
  EmployeeEmploymentLeaveOfAbsence_search: 'EmployeeEmploymentLeaveOfAbsence_search',
  EmployeeEmploymentLeaveOfAbsenceList_postList: 'EmployeeEmploymentLeaveOfAbsenceList_postList',
  EmployeeEmploymentLeaveOfAbsenceType_search: 'EmployeeEmploymentLeaveOfAbsenceType_search',
  EmployeeEmploymentOccupationCode_get: 'EmployeeEmploymentOccupationCode_get',
  EmployeeEmploymentOccupationCode_search: 'EmployeeEmploymentOccupationCode_search',
  EmployeeEmploymentRemunerationType_search: 'EmployeeEmploymentRemunerationType_search',
  EmployeeEmploymentWorkingHoursScheme_search: 'EmployeeEmploymentWorkingHoursScheme_search',
  EmployeeEntitlement_get: 'EmployeeEntitlement_get',
  EmployeeEntitlement_search: 'EmployeeEntitlement_search',
  EmployeeEntitlementClient_client: 'EmployeeEntitlementClient_client',
  EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplate: 'EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplate',
  EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplate: 'EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplate',
  EmployeeHourlyCostAndRate_get: 'EmployeeHourlyCostAndRate_get',
  EmployeeHourlyCostAndRate_post: 'EmployeeHourlyCostAndRate_post',
  EmployeeHourlyCostAndRate_put: 'EmployeeHourlyCostAndRate_put',
  EmployeeHourlyCostAndRate_search: 'EmployeeHourlyCostAndRate_search',
  EmployeeList_postList: 'EmployeeList_postList',
  EmployeeNextOfKin_get: 'EmployeeNextOfKin_get',
  EmployeeNextOfKin_post: 'EmployeeNextOfKin_post',
  EmployeeNextOfKin_put: 'EmployeeNextOfKin_put',
  EmployeeNextOfKin_search: 'EmployeeNextOfKin_search',
  EmployeePreferences_put: 'EmployeePreferences_put',
  EmployeePreferences_search: 'EmployeePreferences_search',
  EmployeePreferencesChangeLanguage_changeLanguage: 'EmployeePreferencesChangeLanguage_changeLanguage',
  EmployeePreferencesList_putList: 'EmployeePreferencesList_putList',
  EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferences: 'EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferences',
  EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContacts: 'EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContacts',
  EmployeeStandardTime_get: 'EmployeeStandardTime_get',
  EmployeeStandardTime_post: 'EmployeeStandardTime_post',
  EmployeeStandardTime_put: 'EmployeeStandardTime_put',
  EmployeeStandardTime_search: 'EmployeeStandardTime_search',
  EmployeeStandardTimeByDate_getByDate: 'EmployeeStandardTimeByDate_getByDate',
  Event_example: 'Event_example',
  Event_get: 'Event_get',
  EventSubscription_delete: 'EventSubscription_delete',
  EventSubscription_get: 'EventSubscription_get',
  EventSubscription_post: 'EventSubscription_post',
  EventSubscription_put: 'EventSubscription_put',
  EventSubscription_search: 'EventSubscription_search',
  EventSubscriptionList_deleteByIds: 'EventSubscriptionList_deleteByIds',
  EventSubscriptionList_postList: 'EventSubscriptionList_postList',
  EventSubscriptionList_putList: 'EventSubscriptionList_putList',
  IncomingInvoice_get: 'IncomingInvoice_get',
  IncomingInvoice_post: 'IncomingInvoice_post',
  IncomingInvoice_put: 'IncomingInvoice_put',
  IncomingInvoiceAddPayment_addPayment: 'IncomingInvoiceAddPayment_addPayment',
  IncomingInvoiceSearch_search: 'IncomingInvoiceSearch_search',
  InternalDebtCollector_get: 'InternalDebtCollector_get',
  InternalDebtCollectorDeactivate_deactivate: 'InternalDebtCollectorDeactivate_deactivate',
  InternalNhoAdminAbort_abort: 'InternalNhoAdminAbort_abort',
  Inventory_delete: 'Inventory_delete',
  Inventory_get: 'Inventory_get',
  Inventory_post: 'Inventory_post',
  Inventory_put: 'Inventory_put',
  Inventory_search: 'Inventory_search',
  InventoryInventories_search: 'InventoryInventories_search',
  InventoryLocation_delete: 'InventoryLocation_delete',
  InventoryLocation_get: 'InventoryLocation_get',
  InventoryLocation_post: 'InventoryLocation_post',
  InventoryLocation_put: 'InventoryLocation_put',
  InventoryLocation_search: 'InventoryLocation_search',
  InventoryLocationList_deleteByIds: 'InventoryLocationList_deleteByIds',
  InventoryLocationList_postList: 'InventoryLocationList_postList',
  InventoryLocationList_putList: 'InventoryLocationList_putList',
  InventoryStocktaking_delete: 'InventoryStocktaking_delete',
  InventoryStocktaking_get: 'InventoryStocktaking_get',
  InventoryStocktaking_post: 'InventoryStocktaking_post',
  InventoryStocktaking_put: 'InventoryStocktaking_put',
  InventoryStocktaking_search: 'InventoryStocktaking_search',
  InventoryStocktakingProductline_delete: 'InventoryStocktakingProductline_delete',
  InventoryStocktakingProductline_get: 'InventoryStocktakingProductline_get',
  InventoryStocktakingProductline_post: 'InventoryStocktakingProductline_post',
  InventoryStocktakingProductline_put: 'InventoryStocktakingProductline_put',
  InventoryStocktakingProductline_search: 'InventoryStocktakingProductline_search',
  InventoryStocktakingProductlineChangeLocation_changeLocation: 'InventoryStocktakingProductlineChangeLocation_changeLocation',
  Invoice_get: 'Invoice_get',
  Invoice_post: 'Invoice_post',
  Invoice_search: 'Invoice_search',
  InvoiceCreateCreditNote_createCreditNote: 'InvoiceCreateCreditNote_createCreditNote',
  InvoiceCreateReminder_createReminder: 'InvoiceCreateReminder_createReminder',
  InvoiceDetails_get: 'InvoiceDetails_get',
  InvoiceDetails_search: 'InvoiceDetails_search',
  InvoiceList_postList: 'InvoiceList_postList',
  InvoicePayment_payment: 'InvoicePayment_payment',
  InvoicePaymentType_get: 'InvoicePaymentType_get',
  InvoicePaymentType_search: 'InvoicePaymentType_search',
  InvoicePdf_downloadPdf: 'InvoicePdf_downloadPdf',
  InvoiceRemark_get: 'InvoiceRemark_get',
  InvoiceSend_send: 'InvoiceSend_send',
  Ledger_search: 'Ledger_search',
  LedgerAccount_delete: 'LedgerAccount_delete',
  LedgerAccount_get: 'LedgerAccount_get',
  LedgerAccount_post: 'LedgerAccount_post',
  LedgerAccount_put: 'LedgerAccount_put',
  LedgerAccount_search: 'LedgerAccount_search',
  LedgerAccountingDimensionName_delete: 'LedgerAccountingDimensionName_delete',
  LedgerAccountingDimensionName_get: 'LedgerAccountingDimensionName_get',
  LedgerAccountingDimensionName_getAll: 'LedgerAccountingDimensionName_getAll',
  LedgerAccountingDimensionName_post: 'LedgerAccountingDimensionName_post',
  LedgerAccountingDimensionName_put: 'LedgerAccountingDimensionName_put',
  LedgerAccountingDimensionNameSearch_search: 'LedgerAccountingDimensionNameSearch_search',
  LedgerAccountingDimensionValue_delete: 'LedgerAccountingDimensionValue_delete',
  LedgerAccountingDimensionValue_get: 'LedgerAccountingDimensionValue_get',
  LedgerAccountingDimensionValue_post: 'LedgerAccountingDimensionValue_post',
  LedgerAccountingDimensionValueList_putList: 'LedgerAccountingDimensionValueList_putList',
  LedgerAccountingDimensionValueSearch_searchAccountingDimensionValues: 'LedgerAccountingDimensionValueSearch_searchAccountingDimensionValues',
  LedgerAccountingPeriod_get: 'LedgerAccountingPeriod_get',
  LedgerAccountingPeriod_search: 'LedgerAccountingPeriod_search',
  LedgerAccountList_deleteByIds: 'LedgerAccountList_deleteByIds',
  LedgerAccountList_postList: 'LedgerAccountList_postList',
  LedgerAccountList_putList: 'LedgerAccountList_putList',
  LedgerAnnualAccount_get: 'LedgerAnnualAccount_get',
  LedgerAnnualAccount_search: 'LedgerAnnualAccount_search',
  LedgerCloseGroup_get: 'LedgerCloseGroup_get',
  LedgerCloseGroup_search: 'LedgerCloseGroup_search',
  LedgerOpenPost_openPost: 'LedgerOpenPost_openPost',
  LedgerPaymentTypeOut_delete: 'LedgerPaymentTypeOut_delete',
  LedgerPaymentTypeOut_get: 'LedgerPaymentTypeOut_get',
  LedgerPaymentTypeOut_post: 'LedgerPaymentTypeOut_post',
  LedgerPaymentTypeOut_put: 'LedgerPaymentTypeOut_put',
  LedgerPaymentTypeOut_search: 'LedgerPaymentTypeOut_search',
  LedgerPaymentTypeOutList_postList: 'LedgerPaymentTypeOutList_postList',
  LedgerPaymentTypeOutList_putList: 'LedgerPaymentTypeOutList_putList',
  LedgerPosting_get: 'LedgerPosting_get',
  LedgerPosting_search: 'LedgerPosting_search',
  LedgerPostingByDate_get: 'LedgerPostingByDate_get',
  LedgerPostingClosePostings_closePostings: 'LedgerPostingClosePostings_closePostings',
  LedgerPostingOpenPost_openPost: 'LedgerPostingOpenPost_openPost',
  LedgerPostingRules_get: 'LedgerPostingRules_get',
  LedgerVatSettings_get: 'LedgerVatSettings_get',
  LedgerVatSettings_put: 'LedgerVatSettings_put',
  LedgerVatType_get: 'LedgerVatType_get',
  LedgerVatType_search: 'LedgerVatType_search',
  LedgerVatTypeCreateRelativeVatType_createRelativeVatType: 'LedgerVatTypeCreateRelativeVatType_createRelativeVatType',
  LedgerVoucher_delete: 'LedgerVoucher_delete',
  LedgerVoucher_get: 'LedgerVoucher_get',
  LedgerVoucher_post: 'LedgerVoucher_post',
  LedgerVoucher_put: 'LedgerVoucher_put',
  LedgerVoucher_search: 'LedgerVoucher_search',
  LedgerVoucherAttachment_deleteAttachment: 'LedgerVoucherAttachment_deleteAttachment',
  LedgerVoucherAttachment_uploadAttachment: 'LedgerVoucherAttachment_uploadAttachment',
  LedgerVoucherExternalVoucherNumber_externalVoucherNumber: 'LedgerVoucherExternalVoucherNumber_externalVoucherNumber',
  LedgerVoucherHistoricalAttachment_uploadAttachment: 'LedgerVoucherHistoricalAttachment_uploadAttachment',
  LedgerVoucherHistoricalClosePostings_closePostings: 'LedgerVoucherHistoricalClosePostings_closePostings',
  LedgerVoucherHistoricalEmployee_postEmployee: 'LedgerVoucherHistoricalEmployee_postEmployee',
  LedgerVoucherHistoricalHistorical_postHistorical: 'LedgerVoucherHistoricalHistorical_postHistorical',
  LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchers: 'LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchers',
  LedgerVoucherImportDocument_importDocument: 'LedgerVoucherImportDocument_importDocument',
  LedgerVoucherImportGbat10_importGbat10: 'LedgerVoucherImportGbat10_importGbat10',
  LedgerVoucherList_putList: 'LedgerVoucherList_putList',
  LedgerVoucherNonPosted_nonPosted: 'LedgerVoucherNonPosted_nonPosted',
  LedgerVoucherOpeningBalance_delete: 'LedgerVoucherOpeningBalance_delete',
  LedgerVoucherOpeningBalance_get: 'LedgerVoucherOpeningBalance_get',
  LedgerVoucherOpeningBalance_post: 'LedgerVoucherOpeningBalance_post',
  LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucher: 'LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucher',
  LedgerVoucherOptions_options: 'LedgerVoucherOptions_options',
  LedgerVoucherPdf_downloadPdf: 'LedgerVoucherPdf_downloadPdf',
  LedgerVoucherPdf_uploadPdf: 'LedgerVoucherPdf_uploadPdf',
  LedgerVoucherReverse_reverse: 'LedgerVoucherReverse_reverse',
  LedgerVoucherSendToInbox_sendToInbox: 'LedgerVoucherSendToInbox_sendToInbox',
  LedgerVoucherSendToLedger_sendToLedger: 'LedgerVoucherSendToLedger_sendToLedger',
  LedgerVoucherType_get: 'LedgerVoucherType_get',
  LedgerVoucherType_search: 'LedgerVoucherType_search',
  LedgerVoucherVoucherReception_voucherReception: 'LedgerVoucherVoucherReception_voucherReception',
  Municipality_search: 'Municipality_search',
  MunicipalityQuery_query: 'MunicipalityQuery_query',
  Order_delete: 'Order_delete',
  Order_get: 'Order_get',
  Order_post: 'Order_post',
  Order_put: 'Order_put',
  Order_search: 'Order_search',
  OrderApproveSubscriptionInvoice_approveSubscriptionInvoice: 'OrderApproveSubscriptionInvoice_approveSubscriptionInvoice',
  OrderAttach_attach: 'OrderAttach_attach',
  OrderInvoice_invoice: 'OrderInvoice_invoice',
  OrderInvoiceMultipleOrders_invoiceMultipleOrders: 'OrderInvoiceMultipleOrders_invoiceMultipleOrders',
  OrderList_postList: 'OrderList_postList',
  OrderOrderConfirmationPdf_downloadPdf: 'OrderOrderConfirmationPdf_downloadPdf',
  OrderOrderGroup_delete: 'OrderOrderGroup_delete',
  OrderOrderGroup_get: 'OrderOrderGroup_get',
  OrderOrderGroup_post: 'OrderOrderGroup_post',
  OrderOrderGroup_put: 'OrderOrderGroup_put',
  OrderOrderGroup_search: 'OrderOrderGroup_search',
  OrderOrderline_delete: 'OrderOrderline_delete',
  OrderOrderline_get: 'OrderOrderline_get',
  OrderOrderline_post: 'OrderOrderline_post',
  OrderOrderline_put: 'OrderOrderline_put',
  OrderOrderlineList_postList: 'OrderOrderlineList_postList',
  OrderOrderlineOrderLineTemplate_orderLineTemplate: 'OrderOrderlineOrderLineTemplate_orderLineTemplate',
  OrderOrderlinePickLine_pickLine: 'OrderOrderlinePickLine_pickLine',
  OrderOrderlineUnpickLine_unpickLine: 'OrderOrderlineUnpickLine_unpickLine',
  OrderPackingNotePdf_downloadPackingNotePdf: 'OrderPackingNotePdf_downloadPackingNotePdf',
  OrderSendInvoicePreview_postInvoicePreview: 'OrderSendInvoicePreview_postInvoicePreview',
  OrderSendOrderConfirmation_postOrderConfirmation: 'OrderSendOrderConfirmation_postOrderConfirmation',
  OrderSendPackingNote_postPackingNote: 'OrderSendPackingNote_postPackingNote',
  OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoice: 'OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoice',
  Pension_search: 'Pension_search',
  PickupPoint_get: 'PickupPoint_get',
  PickupPoint_search: 'PickupPoint_search',
  PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerId: 'PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerId',
  Product_delete: 'Product_delete',
  Product_get: 'Product_get',
  Product_post: 'Product_post',
  Product_put: 'Product_put',
  Product_search: 'Product_search',
  ProductDiscountGroup_get: 'ProductDiscountGroup_get',
  ProductDiscountGroup_search: 'ProductDiscountGroup_search',
  ProductExternal_get: 'ProductExternal_get',
  ProductExternal_search: 'ProductExternal_search',
  ProductGroup_delete: 'ProductGroup_delete',
  ProductGroup_get: 'ProductGroup_get',
  ProductGroup_post: 'ProductGroup_post',
  ProductGroup_put: 'ProductGroup_put',
  ProductGroup_search: 'ProductGroup_search',
  ProductGroupList_deleteByIds: 'ProductGroupList_deleteByIds',
  ProductGroupList_postList: 'ProductGroupList_postList',
  ProductGroupList_putList: 'ProductGroupList_putList',
  ProductGroupQuery_query: 'ProductGroupQuery_query',
  ProductGroupRelation_delete: 'ProductGroupRelation_delete',
  ProductGroupRelation_get: 'ProductGroupRelation_get',
  ProductGroupRelation_post: 'ProductGroupRelation_post',
  ProductGroupRelation_search: 'ProductGroupRelation_search',
  ProductGroupRelationList_deleteList: 'ProductGroupRelationList_deleteList',
  ProductGroupRelationList_postList: 'ProductGroupRelationList_postList',
  ProductImage_deleteImage: 'ProductImage_deleteImage',
  ProductImage_uploadImage: 'ProductImage_uploadImage',
  ProductInventoryLocation_delete: 'ProductInventoryLocation_delete',
  ProductInventoryLocation_get: 'ProductInventoryLocation_get',
  ProductInventoryLocation_post: 'ProductInventoryLocation_post',
  ProductInventoryLocation_put: 'ProductInventoryLocation_put',
  ProductInventoryLocation_search: 'ProductInventoryLocation_search',
  ProductInventoryLocationList_postList: 'ProductInventoryLocationList_postList',
  ProductInventoryLocationList_putList: 'ProductInventoryLocationList_putList',
  ProductList_postList: 'ProductList_postList',
  ProductList_putList: 'ProductList_putList',
  ProductLogisticsSettings_get: 'ProductLogisticsSettings_get',
  ProductLogisticsSettings_put: 'ProductLogisticsSettings_put',
  ProductProductPrice_search: 'ProductProductPrice_search',
  ProductSupplierProduct_delete: 'ProductSupplierProduct_delete',
  ProductSupplierProduct_get: 'ProductSupplierProduct_get',
  ProductSupplierProduct_post: 'ProductSupplierProduct_post',
  ProductSupplierProduct_put: 'ProductSupplierProduct_put',
  ProductSupplierProduct_search: 'ProductSupplierProduct_search',
  ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIds: 'ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIds',
  ProductSupplierProductList_postList: 'ProductSupplierProductList_postList',
  ProductSupplierProductList_putList: 'ProductSupplierProductList_putList',
  ProductUnit_delete: 'ProductUnit_delete',
  ProductUnit_get: 'ProductUnit_get',
  ProductUnit_post: 'ProductUnit_post',
  ProductUnit_put: 'ProductUnit_put',
  ProductUnit_search: 'ProductUnit_search',
  ProductUnitList_postList: 'ProductUnitList_postList',
  ProductUnitList_putList: 'ProductUnitList_putList',
  ProductUnitMaster_get: 'ProductUnitMaster_get',
  ProductUnitMaster_search: 'ProductUnitMaster_search',
  ProductUnitQuery_query: 'ProductUnitQuery_query',
  Project_delete: 'Project_delete',
  Project_deleteList: 'Project_deleteList',
  Project_get: 'Project_get',
  Project_post: 'Project_post',
  Project_put: 'Project_put',
  Project_search: 'Project_search',
  ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIds: 'ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIds',
  ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIds: 'ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIds',
  ProjectCategory_get: 'ProjectCategory_get',
  ProjectCategory_post: 'ProjectCategory_post',
  ProjectCategory_put: 'ProjectCategory_put',
  ProjectCategory_search: 'ProjectCategory_search',
  ProjectControlForm_get: 'ProjectControlForm_get',
  ProjectControlForm_search: 'ProjectControlForm_search',
  ProjectControlFormType_get: 'ProjectControlFormType_get',
  ProjectControlFormType_search: 'ProjectControlFormType_search',
  ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedForm: 'ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedForm',
  ProjectForTimeSheet_getForTimeSheet: 'ProjectForTimeSheet_getForTimeSheet',
  ProjectHourlyRates_delete: 'ProjectHourlyRates_delete',
  ProjectHourlyRates_get: 'ProjectHourlyRates_get',
  ProjectHourlyRates_post: 'ProjectHourlyRates_post',
  ProjectHourlyRates_put: 'ProjectHourlyRates_put',
  ProjectHourlyRates_search: 'ProjectHourlyRates_search',
  ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIds: 'ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIds',
  ProjectHourlyRatesList_deleteByIds: 'ProjectHourlyRatesList_deleteByIds',
  ProjectHourlyRatesList_postList: 'ProjectHourlyRatesList_postList',
  ProjectHourlyRatesList_putList: 'ProjectHourlyRatesList_putList',
  ProjectHourlyRatesProjectSpecificRates_delete: 'ProjectHourlyRatesProjectSpecificRates_delete',
  ProjectHourlyRatesProjectSpecificRates_get: 'ProjectHourlyRatesProjectSpecificRates_get',
  ProjectHourlyRatesProjectSpecificRates_post: 'ProjectHourlyRatesProjectSpecificRates_post',
  ProjectHourlyRatesProjectSpecificRates_put: 'ProjectHourlyRatesProjectSpecificRates_put',
  ProjectHourlyRatesProjectSpecificRates_search: 'ProjectHourlyRatesProjectSpecificRates_search',
  ProjectHourlyRatesProjectSpecificRatesList_deleteByIds: 'ProjectHourlyRatesProjectSpecificRatesList_deleteByIds',
  ProjectHourlyRatesProjectSpecificRatesList_postList: 'ProjectHourlyRatesProjectSpecificRatesList_postList',
  ProjectHourlyRatesProjectSpecificRatesList_putList: 'ProjectHourlyRatesProjectSpecificRatesList_putList',
  ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRates: 'ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRates',
  ProjectImport_importProjectStatement: 'ProjectImport_importProjectStatement',
  ProjectList_deleteByIds: 'ProjectList_deleteByIds',
  ProjectList_postList: 'ProjectList_postList',
  ProjectList_putList: 'ProjectList_putList',
  ProjectNumber_getByNumber: 'ProjectNumber_getByNumber',
  ProjectOrderline_delete: 'ProjectOrderline_delete',
  ProjectOrderline_get: 'ProjectOrderline_get',
  ProjectOrderline_post: 'ProjectOrderline_post',
  ProjectOrderline_put: 'ProjectOrderline_put',
  ProjectOrderline_search: 'ProjectOrderline_search',
  ProjectOrderlineList_postList: 'ProjectOrderlineList_postList',
  ProjectOrderlineOrderLineTemplate_orderLineTemplate: 'ProjectOrderlineOrderLineTemplate_orderLineTemplate',
  ProjectOrderlineQuery_query: 'ProjectOrderlineQuery_query',
  ProjectParticipant_get: 'ProjectParticipant_get',
  ProjectParticipant_post: 'ProjectParticipant_post',
  ProjectParticipant_put: 'ProjectParticipant_put',
  ProjectParticipantList_deleteByIds: 'ProjectParticipantList_deleteByIds',
  ProjectParticipantList_postList: 'ProjectParticipantList_postList',
  ProjectPeriodBudgetStatus_getBudgetStatus: 'ProjectPeriodBudgetStatus_getBudgetStatus',
  ProjectPeriodHourlistReport_hourlistReport: 'ProjectPeriodHourlistReport_hourlistReport',
  ProjectPeriodInvoiced_invoiced: 'ProjectPeriodInvoiced_invoiced',
  ProjectPeriodInvoicingReserve_invoicingReserve: 'ProjectPeriodInvoicingReserve_invoicingReserve',
  ProjectPeriodMonthlyStatus_monthlyStatus: 'ProjectPeriodMonthlyStatus_monthlyStatus',
  ProjectPeriodOverallStatus_overallStatus: 'ProjectPeriodOverallStatus_overallStatus',
  ProjectProjectActivity_delete: 'ProjectProjectActivity_delete',
  ProjectProjectActivity_get: 'ProjectProjectActivity_get',
  ProjectProjectActivity_post: 'ProjectProjectActivity_post',
  ProjectProjectActivityList_deleteByIds: 'ProjectProjectActivityList_deleteByIds',
  ProjectResourcePlanBudget_get: 'ProjectResourcePlanBudget_get',
  ProjectSettings_get: 'ProjectSettings_get',
  ProjectSettings_put: 'ProjectSettings_put',
  ProjectSubcontract_delete: 'ProjectSubcontract_delete',
  ProjectSubcontract_get: 'ProjectSubcontract_get',
  ProjectSubcontract_post: 'ProjectSubcontract_post',
  ProjectSubcontract_put: 'ProjectSubcontract_put',
  ProjectSubcontract_search: 'ProjectSubcontract_search',
  ProjectSubcontractQuery_query: 'ProjectSubcontractQuery_query',
  ProjectTask_search: 'ProjectTask_search',
  ProjectTemplate_get: 'ProjectTemplate_get',
  PurchaseOrder_delete: 'PurchaseOrder_delete',
  PurchaseOrder_get: 'PurchaseOrder_get',
  PurchaseOrder_post: 'PurchaseOrder_post',
  PurchaseOrder_put: 'PurchaseOrder_put',
  PurchaseOrder_search: 'PurchaseOrder_search',
  PurchaseOrderAttachment_deleteAttachment: 'PurchaseOrderAttachment_deleteAttachment',
  PurchaseOrderAttachment_uploadAttachment: 'PurchaseOrderAttachment_uploadAttachment',
  PurchaseOrderAttachmentList_uploadAttachments: 'PurchaseOrderAttachmentList_uploadAttachments',
  PurchaseOrderDeviation_delete: 'PurchaseOrderDeviation_delete',
  PurchaseOrderDeviation_get: 'PurchaseOrderDeviation_get',
  PurchaseOrderDeviation_post: 'PurchaseOrderDeviation_post',
  PurchaseOrderDeviation_put: 'PurchaseOrderDeviation_put',
  PurchaseOrderDeviation_search: 'PurchaseOrderDeviation_search',
  PurchaseOrderDeviationApprove_approve: 'PurchaseOrderDeviationApprove_approve',
  PurchaseOrderDeviationDeliver_deliver: 'PurchaseOrderDeviationDeliver_deliver',
  PurchaseOrderDeviationList_postList: 'PurchaseOrderDeviationList_postList',
  PurchaseOrderDeviationList_putList: 'PurchaseOrderDeviationList_putList',
  PurchaseOrderDeviationUndeliver_undeliver: 'PurchaseOrderDeviationUndeliver_undeliver',
  PurchaseOrderGoodsReceipt_delete: 'PurchaseOrderGoodsReceipt_delete',
  PurchaseOrderGoodsReceipt_get: 'PurchaseOrderGoodsReceipt_get',
  PurchaseOrderGoodsReceipt_post: 'PurchaseOrderGoodsReceipt_post',
  PurchaseOrderGoodsReceipt_put: 'PurchaseOrderGoodsReceipt_put',
  PurchaseOrderGoodsReceipt_search: 'PurchaseOrderGoodsReceipt_search',
  PurchaseOrderGoodsReceiptConfirm_confirm: 'PurchaseOrderGoodsReceiptConfirm_confirm',
  PurchaseOrderGoodsReceiptLine_delete: 'PurchaseOrderGoodsReceiptLine_delete',
  PurchaseOrderGoodsReceiptLine_get: 'PurchaseOrderGoodsReceiptLine_get',
  PurchaseOrderGoodsReceiptLine_post: 'PurchaseOrderGoodsReceiptLine_post',
  PurchaseOrderGoodsReceiptLine_put: 'PurchaseOrderGoodsReceiptLine_put',
  PurchaseOrderGoodsReceiptLine_search: 'PurchaseOrderGoodsReceiptLine_search',
  PurchaseOrderGoodsReceiptLineList_deleteList: 'PurchaseOrderGoodsReceiptLineList_deleteList',
  PurchaseOrderGoodsReceiptLineList_postList: 'PurchaseOrderGoodsReceiptLineList_postList',
  PurchaseOrderGoodsReceiptLineList_putList: 'PurchaseOrderGoodsReceiptLineList_putList',
  PurchaseOrderGoodsReceiptList_deleteByIds: 'PurchaseOrderGoodsReceiptList_deleteByIds',
  PurchaseOrderGoodsReceiptList_postList: 'PurchaseOrderGoodsReceiptList_postList',
  PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirm: 'PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirm',
  PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceipt: 'PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceipt',
  PurchaseOrderOrderline_delete: 'PurchaseOrderOrderline_delete',
  PurchaseOrderOrderline_get: 'PurchaseOrderOrderline_get',
  PurchaseOrderOrderline_post: 'PurchaseOrderOrderline_post',
  PurchaseOrderOrderline_put: 'PurchaseOrderOrderline_put',
  PurchaseOrderOrderlineList_deleteList: 'PurchaseOrderOrderlineList_deleteList',
  PurchaseOrderOrderlineList_postList: 'PurchaseOrderOrderlineList_postList',
  PurchaseOrderOrderlineList_putList: 'PurchaseOrderOrderlineList_putList',
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_delete: 'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_delete',
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_get: 'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_get',
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_post: 'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_post',
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_search: 'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_search',
  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIds: 'PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIds',
  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postList: 'PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postList',
  PurchaseOrderSend_send: 'PurchaseOrderSend_send',
  PurchaseOrderSendByEmail_sendByEmail: 'PurchaseOrderSendByEmail_sendByEmail',
  Reminder_get: 'Reminder_get',
  Reminder_search: 'Reminder_search',
  ReminderPdf_downloadPdf: 'ReminderPdf_downloadPdf',
  Resultbudget_search: 'Resultbudget_search',
  ResultbudgetCompany_getCompanyResultBudget: 'ResultbudgetCompany_getCompanyResultBudget',
  ResultbudgetDepartment_getDepartmentResultBudget: 'ResultbudgetDepartment_getDepartmentResultBudget',
  ResultbudgetEmployee_getEmployeeResultBudget: 'ResultbudgetEmployee_getEmployeeResultBudget',
  ResultbudgetProduct_getProductResultBudget: 'ResultbudgetProduct_getProductResultBudget',
  ResultbudgetProject_getProjectResultBudget: 'ResultbudgetProject_getProjectResultBudget',
  SaftExportSAFT_exportSAFT: 'SaftExportSAFT_exportSAFT',
  SaftImportSAFT_importSAFT: 'SaftImportSAFT_importSAFT',
  SalaryCompilation_get: 'SalaryCompilation_get',
  SalaryCompilationPdf_downloadPdf: 'SalaryCompilationPdf_downloadPdf',
  SalaryFinanceTaxReconciliationContext_postContext: 'SalaryFinanceTaxReconciliationContext_postContext',
  SalaryFinanceTaxReconciliationOverview_getOverview: 'SalaryFinanceTaxReconciliationOverview_getOverview',
  SalaryFinanceTaxReconciliationPaymentsOverview_getPayments: 'SalaryFinanceTaxReconciliationPaymentsOverview_getPayments',
  SalaryHolidayAllowanceReconciliationContext_postContext: 'SalaryHolidayAllowanceReconciliationContext_postContext',
  SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetails: 'SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetails',
  SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummary: 'SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummary',
  SalaryMandatoryDeductionReconciliationContext_postContext: 'SalaryMandatoryDeductionReconciliationContext_postContext',
  SalaryMandatoryDeductionReconciliationOverview_getOverview: 'SalaryMandatoryDeductionReconciliationOverview_getOverview',
  SalaryMandatoryDeductionReconciliationPaymentsOverview_getPayments: 'SalaryMandatoryDeductionReconciliationPaymentsOverview_getPayments',
  SalaryPayrollTaxReconciliationContext_postContext: 'SalaryPayrollTaxReconciliationContext_postContext',
  SalaryPayrollTaxReconciliationOverview_getOverview: 'SalaryPayrollTaxReconciliationOverview_getOverview',
  SalaryPayrollTaxReconciliationPaymentsOverview_getPayments: 'SalaryPayrollTaxReconciliationPaymentsOverview_getPayments',
  SalaryPayslip_get: 'SalaryPayslip_get',
  SalaryPayslip_search: 'SalaryPayslip_search',
  SalaryPayslipPdf_downloadPdf: 'SalaryPayslipPdf_downloadPdf',
  SalarySettings_get: 'SalarySettings_get',
  SalarySettings_put: 'SalarySettings_put',
  SalarySettingsHoliday_post: 'SalarySettingsHoliday_post',
  SalarySettingsHoliday_put: 'SalarySettingsHoliday_put',
  SalarySettingsHoliday_search: 'SalarySettingsHoliday_search',
  SalarySettingsHolidayList_deleteByIds: 'SalarySettingsHolidayList_deleteByIds',
  SalarySettingsHolidayList_postList: 'SalarySettingsHolidayList_postList',
  SalarySettingsHolidayList_putList: 'SalarySettingsHolidayList_putList',
  SalarySettingsPensionScheme_delete: 'SalarySettingsPensionScheme_delete',
  SalarySettingsPensionScheme_get: 'SalarySettingsPensionScheme_get',
  SalarySettingsPensionScheme_post: 'SalarySettingsPensionScheme_post',
  SalarySettingsPensionScheme_put: 'SalarySettingsPensionScheme_put',
  SalarySettingsPensionScheme_search: 'SalarySettingsPensionScheme_search',
  SalarySettingsPensionSchemeList_deleteByIds: 'SalarySettingsPensionSchemeList_deleteByIds',
  SalarySettingsPensionSchemeList_postList: 'SalarySettingsPensionSchemeList_postList',
  SalarySettingsPensionSchemeList_putList: 'SalarySettingsPensionSchemeList_putList',
  SalarySettingsStandardTime_get: 'SalarySettingsStandardTime_get',
  SalarySettingsStandardTime_post: 'SalarySettingsStandardTime_post',
  SalarySettingsStandardTime_put: 'SalarySettingsStandardTime_put',
  SalarySettingsStandardTime_search: 'SalarySettingsStandardTime_search',
  SalarySettingsStandardTimeByDate_getByDate: 'SalarySettingsStandardTimeByDate_getByDate',
  SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetails: 'SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetails',
  SalaryTaxDeductionReconciliationContext_postContext: 'SalaryTaxDeductionReconciliationContext_postContext',
  SalaryTaxDeductionReconciliationOverview_getOverview: 'SalaryTaxDeductionReconciliationOverview_getOverview',
  SalaryTaxDeductionReconciliationPaymentsOverview_getPayments: 'SalaryTaxDeductionReconciliationPaymentsOverview_getPayments',
  SalaryTransaction_delete: 'SalaryTransaction_delete',
  SalaryTransaction_get: 'SalaryTransaction_get',
  SalaryTransaction_post: 'SalaryTransaction_post',
  SalaryTransactionAttachment_uploadAttachment: 'SalaryTransactionAttachment_uploadAttachment',
  SalaryTransactionAttachmentList_uploadAttachments: 'SalaryTransactionAttachmentList_uploadAttachments',
  SalaryTransactionDeleteAttachment_deleteAttachment: 'SalaryTransactionDeleteAttachment_deleteAttachment',
  SalaryType_get: 'SalaryType_get',
  SalaryType_search: 'SalaryType_search',
  SubscriptionCancel_cancel: 'SubscriptionCancel_cancel',
  SubscriptionPackages_getPackages: 'SubscriptionPackages_getPackages',
  SubscriptionReactivate_reactivate: 'SubscriptionReactivate_reactivate',
  Supplier_delete: 'Supplier_delete',
  Supplier_get: 'Supplier_get',
  Supplier_post: 'Supplier_post',
  Supplier_put: 'Supplier_put',
  Supplier_search: 'Supplier_search',
  SupplierCustomerSearch_search: 'SupplierCustomerSearch_search',
  SupplierInvoice_get: 'SupplierInvoice_get',
  SupplierInvoice_search: 'SupplierInvoice_search',
  SupplierInvoiceAddPayment_addPayment: 'SupplierInvoiceAddPayment_addPayment',
  SupplierInvoiceAddRecipient_addRecipient: 'SupplierInvoiceAddRecipient_addRecipient',
  SupplierInvoiceAddRecipient_addRecipientToMany: 'SupplierInvoiceAddRecipient_addRecipientToMany',
  SupplierInvoiceApprove_approve: 'SupplierInvoiceApprove_approve',
  SupplierInvoiceApprove_approveMany: 'SupplierInvoiceApprove_approveMany',
  SupplierInvoiceChangeDimension_changeDimensionMany: 'SupplierInvoiceChangeDimension_changeDimensionMany',
  SupplierInvoiceForApproval_getApprovalInvoices: 'SupplierInvoiceForApproval_getApprovalInvoices',
  SupplierInvoicePdf_downloadPdf: 'SupplierInvoicePdf_downloadPdf',
  SupplierInvoiceReject_reject: 'SupplierInvoiceReject_reject',
  SupplierInvoiceReject_rejectMany: 'SupplierInvoiceReject_rejectMany',
  SupplierInvoiceVoucherPostings_putPostings: 'SupplierInvoiceVoucherPostings_putPostings',
  SupplierList_postList: 'SupplierList_postList',
  SupplierList_putList: 'SupplierList_putList',
  SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomers: 'SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomers',
  SupportDashboardExport_export: 'SupportDashboardExport_export',
  TimesheetAllocated_delete: 'TimesheetAllocated_delete',
  TimesheetAllocated_get: 'TimesheetAllocated_get',
  TimesheetAllocated_post: 'TimesheetAllocated_post',
  TimesheetAllocated_put: 'TimesheetAllocated_put',
  TimesheetAllocated_search: 'TimesheetAllocated_search',
  TimesheetAllocatedApprove_approve: 'TimesheetAllocatedApprove_approve',
  TimesheetAllocatedApproveList_approveList: 'TimesheetAllocatedApproveList_approveList',
  TimesheetAllocatedList_postList: 'TimesheetAllocatedList_postList',
  TimesheetAllocatedList_putList: 'TimesheetAllocatedList_putList',
  TimesheetAllocatedUnapprove_unapprove: 'TimesheetAllocatedUnapprove_unapprove',
  TimesheetAllocatedUnapproveList_unapproveList: 'TimesheetAllocatedUnapproveList_unapproveList',
  TimesheetCompanyHoliday_delete: 'TimesheetCompanyHoliday_delete',
  TimesheetCompanyHoliday_get: 'TimesheetCompanyHoliday_get',
  TimesheetCompanyHoliday_post: 'TimesheetCompanyHoliday_post',
  TimesheetCompanyHoliday_put: 'TimesheetCompanyHoliday_put',
  TimesheetCompanyHoliday_search: 'TimesheetCompanyHoliday_search',
  TimesheetEntry_delete: 'TimesheetEntry_delete',
  TimesheetEntry_get: 'TimesheetEntry_get',
  TimesheetEntry_post: 'TimesheetEntry_post',
  TimesheetEntry_put: 'TimesheetEntry_put',
  TimesheetEntry_search: 'TimesheetEntry_search',
  TimesheetEntryList_postList: 'TimesheetEntryList_postList',
  TimesheetEntryList_putList: 'TimesheetEntryList_putList',
  TimesheetEntryRecentActivities_getRecentActivities: 'TimesheetEntryRecentActivities_getRecentActivities',
  TimesheetEntryRecentProjects_getRecentProjects: 'TimesheetEntryRecentProjects_getRecentProjects',
  TimesheetEntryTotalHours_getTotalHours: 'TimesheetEntryTotalHours_getTotalHours',
  TimesheetMonth_get: 'TimesheetMonth_get',
  TimesheetMonthApprove_approve: 'TimesheetMonthApprove_approve',
  TimesheetMonthByMonthNumber_getByMonthNumber: 'TimesheetMonthByMonthNumber_getByMonthNumber',
  TimesheetMonthByMonthNumberList_getByMonthNumberList: 'TimesheetMonthByMonthNumberList_getByMonthNumberList',
  TimesheetMonthComplete_complete: 'TimesheetMonthComplete_complete',
  TimesheetMonthReopen_reopen: 'TimesheetMonthReopen_reopen',
  TimesheetMonthUnapprove_unapprove: 'TimesheetMonthUnapprove_unapprove',
  TimesheetSalaryProjectTypeSpecification_delete: 'TimesheetSalaryProjectTypeSpecification_delete',
  TimesheetSalaryProjectTypeSpecification_get: 'TimesheetSalaryProjectTypeSpecification_get',
  TimesheetSalaryProjectTypeSpecification_post: 'TimesheetSalaryProjectTypeSpecification_post',
  TimesheetSalaryProjectTypeSpecification_put: 'TimesheetSalaryProjectTypeSpecification_put',
  TimesheetSalaryProjectTypeSpecification_search: 'TimesheetSalaryProjectTypeSpecification_search',
  TimesheetSalaryTypeSpecification_delete: 'TimesheetSalaryTypeSpecification_delete',
  TimesheetSalaryTypeSpecification_get: 'TimesheetSalaryTypeSpecification_get',
  TimesheetSalaryTypeSpecification_post: 'TimesheetSalaryTypeSpecification_post',
  TimesheetSalaryTypeSpecification_put: 'TimesheetSalaryTypeSpecification_put',
  TimesheetSalaryTypeSpecification_search: 'TimesheetSalaryTypeSpecification_search',
  TimesheetSettings_get: 'TimesheetSettings_get',
  TimesheetTimeClock_get: 'TimesheetTimeClock_get',
  TimesheetTimeClock_put: 'TimesheetTimeClock_put',
  TimesheetTimeClock_search: 'TimesheetTimeClock_search',
  TimesheetTimeClockPresent_getPresent: 'TimesheetTimeClockPresent_getPresent',
  TimesheetTimeClockStart_start: 'TimesheetTimeClockStart_start',
  TimesheetTimeClockStop_stop: 'TimesheetTimeClockStop_stop',
  TimesheetWeek_search: 'TimesheetWeek_search',
  TimesheetWeekApprove_approve: 'TimesheetWeekApprove_approve',
  TimesheetWeekComplete_complete: 'TimesheetWeekComplete_complete',
  TimesheetWeekReopen_reopen: 'TimesheetWeekReopen_reopen',
  TimesheetWeekUnapprove_unapprove: 'TimesheetWeekUnapprove_unapprove',
  TokenConsumerByToken_getByToken: 'TokenConsumerByToken_getByToken',
  TokenEmployeeCreate_create: 'TokenEmployeeCreate_create',
  TokenSession_delete: 'TokenSession_delete',
  TokenSessionCreate_create: 'TokenSessionCreate_create',
  TokenSessionCreate_createWithBody: 'TokenSessionCreate_createWithBody',
  TokenSessionWhoAmI_whoAmI: 'TokenSessionWhoAmI_whoAmI',
  TransportType_get: 'TransportType_get',
  TransportType_search: 'TransportType_search',
  TravelExpense_delete: 'TravelExpense_delete',
  TravelExpense_get: 'TravelExpense_get',
  TravelExpense_post: 'TravelExpense_post',
  TravelExpense_put: 'TravelExpense_put',
  TravelExpense_search: 'TravelExpense_search',
  TravelExpenseAccommodationAllowance_delete: 'TravelExpenseAccommodationAllowance_delete',
  TravelExpenseAccommodationAllowance_get: 'TravelExpenseAccommodationAllowance_get',
  TravelExpenseAccommodationAllowance_post: 'TravelExpenseAccommodationAllowance_post',
  TravelExpenseAccommodationAllowance_put: 'TravelExpenseAccommodationAllowance_put',
  TravelExpenseAccommodationAllowance_search: 'TravelExpenseAccommodationAllowance_search',
  TravelExpenseApprove_approve: 'TravelExpenseApprove_approve',
  TravelExpenseAttachment_deleteAttachment: 'TravelExpenseAttachment_deleteAttachment',
  TravelExpenseAttachment_downloadAttachment: 'TravelExpenseAttachment_downloadAttachment',
  TravelExpenseAttachment_uploadAttachment: 'TravelExpenseAttachment_uploadAttachment',
  TravelExpenseAttachmentList_uploadAttachments: 'TravelExpenseAttachmentList_uploadAttachments',
  TravelExpenseConvert_convert: 'TravelExpenseConvert_convert',
  TravelExpenseCopy_copy: 'TravelExpenseCopy_copy',
  TravelExpenseCost_delete: 'TravelExpenseCost_delete',
  TravelExpenseCost_get: 'TravelExpenseCost_get',
  TravelExpenseCost_post: 'TravelExpenseCost_post',
  TravelExpenseCost_put: 'TravelExpenseCost_put',
  TravelExpenseCost_search: 'TravelExpenseCost_search',
  TravelExpenseCostCategory_get: 'TravelExpenseCostCategory_get',
  TravelExpenseCostCategory_search: 'TravelExpenseCostCategory_search',
  TravelExpenseCostList_putList: 'TravelExpenseCostList_putList',
  TravelExpenseCostParticipant_delete: 'TravelExpenseCostParticipant_delete',
  TravelExpenseCostParticipant_get: 'TravelExpenseCostParticipant_get',
  TravelExpenseCostParticipant_post: 'TravelExpenseCostParticipant_post',
  TravelExpenseCostParticipantCostParticipants_getCostParticipants: 'TravelExpenseCostParticipantCostParticipants_getCostParticipants',
  TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvanced: 'TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvanced',
  TravelExpenseCostParticipantList_deleteList: 'TravelExpenseCostParticipantList_deleteList',
  TravelExpenseCostParticipantList_postList: 'TravelExpenseCostParticipantList_postList',
  TravelExpenseCreateVouchers_createVouchers: 'TravelExpenseCreateVouchers_createVouchers',
  TravelExpenseDeliver_deliver: 'TravelExpenseDeliver_deliver',
  TravelExpenseDrivingStop_delete: 'TravelExpenseDrivingStop_delete',
  TravelExpenseDrivingStop_get: 'TravelExpenseDrivingStop_get',
  TravelExpenseDrivingStop_post: 'TravelExpenseDrivingStop_post',
  TravelExpenseMileageAllowance_delete: 'TravelExpenseMileageAllowance_delete',
  TravelExpenseMileageAllowance_get: 'TravelExpenseMileageAllowance_get',
  TravelExpenseMileageAllowance_post: 'TravelExpenseMileageAllowance_post',
  TravelExpenseMileageAllowance_put: 'TravelExpenseMileageAllowance_put',
  TravelExpenseMileageAllowance_search: 'TravelExpenseMileageAllowance_search',
  TravelExpensePassenger_delete: 'TravelExpensePassenger_delete',
  TravelExpensePassenger_get: 'TravelExpensePassenger_get',
  TravelExpensePassenger_post: 'TravelExpensePassenger_post',
  TravelExpensePassenger_put: 'TravelExpensePassenger_put',
  TravelExpensePassenger_search: 'TravelExpensePassenger_search',
  TravelExpensePassengerList_deleteList: 'TravelExpensePassengerList_deleteList',
  TravelExpensePassengerList_postList: 'TravelExpensePassengerList_postList',
  TravelExpensePaymentType_get: 'TravelExpensePaymentType_get',
  TravelExpensePaymentType_search: 'TravelExpensePaymentType_search',
  TravelExpensePerDiemCompensation_delete: 'TravelExpensePerDiemCompensation_delete',
  TravelExpensePerDiemCompensation_get: 'TravelExpensePerDiemCompensation_get',
  TravelExpensePerDiemCompensation_post: 'TravelExpensePerDiemCompensation_post',
  TravelExpensePerDiemCompensation_put: 'TravelExpensePerDiemCompensation_put',
  TravelExpensePerDiemCompensation_search: 'TravelExpensePerDiemCompensation_search',
  TravelExpenseRate_get: 'TravelExpenseRate_get',
  TravelExpenseRate_search: 'TravelExpenseRate_search',
  TravelExpenseRateCategory_get: 'TravelExpenseRateCategory_get',
  TravelExpenseRateCategory_search: 'TravelExpenseRateCategory_search',
  TravelExpenseRateCategoryGroup_get: 'TravelExpenseRateCategoryGroup_get',
  TravelExpenseRateCategoryGroup_search: 'TravelExpenseRateCategoryGroup_search',
  TravelExpenseSettings_get: 'TravelExpenseSettings_get',
  TravelExpenseUnapprove_unapprove: 'TravelExpenseUnapprove_unapprove',
  TravelExpenseUndeliver_undeliver: 'TravelExpenseUndeliver_undeliver',
  TravelExpenseZone_get: 'TravelExpenseZone_get',
  TravelExpenseZone_search: 'TravelExpenseZone_search',
  UserLicenseExport_export: 'UserLicenseExport_export',
  VatReturnsComment_query: 'VatReturnsComment_query',
  VatReturnsCommentAll_all: 'VatReturnsCommentAll_all',
  VatTermSizeSettings_delete: 'VatTermSizeSettings_delete',
  VatTermSizeSettings_get: 'VatTermSizeSettings_get',
  VatTermSizeSettings_post: 'VatTermSizeSettings_post',
  VatTermSizeSettings_put: 'VatTermSizeSettings_put',
  VatTermSizeSettings_query: 'VatTermSizeSettings_query',
  VoucherApprovalListElement_get: 'VoucherApprovalListElement_get',
  VoucherInboxEmailAddress_getEmailAddress: 'VoucherInboxEmailAddress_getEmailAddress',
  VoucherInboxInboxCount_getInboxCount: 'VoucherInboxInboxCount_getInboxCount',
  VoucherMessage_post: 'VoucherMessage_post',
  VoucherMessage_search: 'VoucherMessage_search',
  VoucherStatus_get: 'VoucherStatus_get',
  VoucherStatus_post: 'VoucherStatus_post',
  VoucherStatus_search: 'VoucherStatus_search',
  YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypes: 'YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypes',
  YearEndPenneoCasefiles_createCaseFile: 'YearEndPenneoCasefiles_createCaseFile',
  YearEndPenneoCasefiles_deleteCaseFile: 'YearEndPenneoCasefiles_deleteCaseFile',
  YearEndPenneoCasefiles_getCaseFiles: 'YearEndPenneoCasefiles_getCaseFiles',
  YearEndPenneoCasefilesActivate_activateCaseFile: 'YearEndPenneoCasefilesActivate_activateCaseFile',
  YearEndPenneoCasefilesSigners_deleteSigner: 'YearEndPenneoCasefilesSigners_deleteSigner',
  YearEndPenneoCasefilesSignersReactivate_reactivateSigner: 'YearEndPenneoCasefilesSignersReactivate_reactivateSigner',
  YearEndPenneoCasefilesSignersResend_resendSignLink: 'YearEndPenneoCasefilesSignersResend_resendSignLink',
  YearEndPenneoDocuments_createDocument: 'YearEndPenneoDocuments_createDocument',
  YearEndPenneoDocuments_deleteDocument: 'YearEndPenneoDocuments_deleteDocument',
  YearEndPenneoDocuments_updateDocument: 'YearEndPenneoDocuments_updateDocument',
  YearEndPenneoDocumentsDownload_downloadDocument: 'YearEndPenneoDocumentsDownload_downloadDocument',
  YearEndPenneoRecipients_deleteRecipients: 'YearEndPenneoRecipients_deleteRecipients',
  YearEndPenneoRecipients_getRecipients: 'YearEndPenneoRecipients_getRecipients',
  YearEndPenneoRecipients_postRecipients: 'YearEndPenneoRecipients_postRecipients',
  YearEndPenneoSession_authenticateAndListCaseFiles: 'YearEndPenneoSession_authenticateAndListCaseFiles',
  YearEndPenneoSignature_lines_createAndLinkSignatureLine: 'YearEndPenneoSignature-lines_createAndLinkSignatureLine',
  YearEndPenneoSync_sync: 'YearEndPenneoSync_sync',
  YearEndPenneoUpdateCompletedStatus_updateCompletedStatus: 'YearEndPenneoUpdateCompletedStatus_updateCompletedStatus',
  YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024: 'YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024',
  YearEndResearchAndDevelopment2024_get: 'YearEndResearchAndDevelopment2024_get',
  YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024: 'YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024',
  YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024: 'YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024',
} as const;

export const OPERATION_DEFINITIONS = {
  AccountantDashboardNews_get: { operationId: 'AccountantDashboardNews_get', method: 'GET', path: '/accountantDashboard/news' },
  AccountantDashboardNewsTags_getTags: { operationId: 'AccountantDashboardNewsTags_getTags', method: 'GET', path: '/accountantDashboard/news/tags' },
  AccountingOfficeReconciliationsControl_get: { operationId: 'AccountingOfficeReconciliationsControl_get', method: 'GET', path: '/accountingOffice/reconciliations/{reconciliationId}/control' },
  AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliation: { operationId: 'AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliation', method: 'PUT', path: '/accountingOffice/reconciliations/{reconciliationId}/control/:controlReconciliation' },
  AccountingOfficeReconciliationsControlReconcile_reconcile: { operationId: 'AccountingOfficeReconciliationsControlReconcile_reconcile', method: 'PUT', path: '/accountingOffice/reconciliations/{reconciliationId}/control/:reconcile' },
  AccountingOfficeReconciliationsControlRequestControl_requestControl: { operationId: 'AccountingOfficeReconciliationsControlRequestControl_requestControl', method: 'PUT', path: '/accountingOffice/reconciliations/{reconciliationId}/control/:requestControl' },
  Activity_get: { operationId: 'Activity_get', method: 'GET', path: '/activity/{id}' },
  Activity_post: { operationId: 'Activity_post', method: 'POST', path: '/activity' },
  Activity_search: { operationId: 'Activity_search', method: 'GET', path: '/activity' },
  ActivityForTimeSheet_getForTimeSheet: { operationId: 'ActivityForTimeSheet_getForTimeSheet', method: 'GET', path: '/activity/>forTimeSheet' },
  ActivityList_postList: { operationId: 'ActivityList_postList', method: 'POST', path: '/activity/list' },
  Asset_delete: { operationId: 'Asset_delete', method: 'DELETE', path: '/asset/{id}' },
  Asset_get: { operationId: 'Asset_get', method: 'GET', path: '/asset/{id}' },
  Asset_post: { operationId: 'Asset_post', method: 'POST', path: '/asset' },
  Asset_put: { operationId: 'Asset_put', method: 'PUT', path: '/asset/{id}' },
  Asset_search: { operationId: 'Asset_search', method: 'GET', path: '/asset' },
  AssetAssetsExist_getAssetsExist: { operationId: 'AssetAssetsExist_getAssetsExist', method: 'GET', path: '/asset/assetsExist' },
  AssetBalanceAccountsSum_balanceAccountsSum: { operationId: 'AssetBalanceAccountsSum_balanceAccountsSum', method: 'GET', path: '/asset/balanceAccountsSum' },
  AssetCanDelete_canDelete: { operationId: 'AssetCanDelete_canDelete', method: 'GET', path: '/asset/canDelete/{id}' },
  AssetDeleteImport_deleteImport: { operationId: 'AssetDeleteImport_deleteImport', method: 'DELETE', path: '/asset/deleteImport' },
  AssetDeleteStartingBalance_deleteStartingBalance: { operationId: 'AssetDeleteStartingBalance_deleteStartingBalance', method: 'DELETE', path: '/asset/deleteStartingBalance' },
  AssetDuplicate_postDuplicate: { operationId: 'AssetDuplicate_postDuplicate', method: 'POST', path: '/asset/duplicate/{id}' },
  AssetList_postList: { operationId: 'AssetList_postList', method: 'POST', path: '/asset/list' },
  AssetPostings_getPostings: { operationId: 'AssetPostings_getPostings', method: 'GET', path: '/asset/{id}/postings' },
  AssetUpload_upload: { operationId: 'AssetUpload_upload', method: 'POST', path: '/asset/upload' },
  AttestationAddApprover_addApprover: { operationId: 'AttestationAddApprover_addApprover', method: 'PUT', path: '/attestation/:addApprover' },
  AttestationAddApproverPermission_addApproverPermission: { operationId: 'AttestationAddApproverPermission_addApproverPermission', method: 'GET', path: '/attestation/addApproverPermission' },
  AttestationCompanyModules_get: { operationId: 'AttestationCompanyModules_get', method: 'GET', path: '/attestation/companyModules' },
  BalanceReconciliationAccountVouchers_getVouchers: { operationId: 'BalanceReconciliationAccountVouchers_getVouchers', method: 'GET', path: '/balance/reconciliation/{reconciliationId}/account/{accountId}/vouchers' },
  BalanceReconciliationAnnualContext_postAnnualContext: { operationId: 'BalanceReconciliationAnnualContext_postAnnualContext', method: 'POST', path: '/balance/reconciliation/annual/context' },
  BalanceReconciliationAttachmentPdf_getAttachment: { operationId: 'BalanceReconciliationAttachmentPdf_getAttachment', method: 'GET', path: '/balance/reconciliation/attachment/{attachmentId}/pdf' },
  BalanceSheet_search: { operationId: 'BalanceSheet_search', method: 'GET', path: '/balanceSheet' },
  Bank_get: { operationId: 'Bank_get', method: 'GET', path: '/bank/{id}' },
  Bank_search: { operationId: 'Bank_search', method: 'GET', path: '/bank' },
  BankReconciliation_delete: { operationId: 'BankReconciliation_delete', method: 'DELETE', path: '/bank/reconciliation/{id}' },
  BankReconciliation_get: { operationId: 'BankReconciliation_get', method: 'GET', path: '/bank/reconciliation/{id}' },
  BankReconciliation_post: { operationId: 'BankReconciliation_post', method: 'POST', path: '/bank/reconciliation' },
  BankReconciliation_put: { operationId: 'BankReconciliation_put', method: 'PUT', path: '/bank/reconciliation/{id}' },
  BankReconciliation_search: { operationId: 'BankReconciliation_search', method: 'GET', path: '/bank/reconciliation' },
  BankReconciliationAdjustment_adjustment: { operationId: 'BankReconciliationAdjustment_adjustment', method: 'PUT', path: '/bank/reconciliation/{id}/:adjustment' },
  BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactions: { operationId: 'BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactions', method: 'GET', path: '/bank/reconciliation/closedWithUnmatchedTransactions' },
  BankReconciliationLast_last: { operationId: 'BankReconciliationLast_last', method: 'GET', path: '/bank/reconciliation/>last' },
  BankReconciliationLastClosed_lastClosed: { operationId: 'BankReconciliationLastClosed_lastClosed', method: 'GET', path: '/bank/reconciliation/>lastClosed' },
  BankReconciliationMatch_delete: { operationId: 'BankReconciliationMatch_delete', method: 'DELETE', path: '/bank/reconciliation/match/{id}' },
  BankReconciliationMatch_get: { operationId: 'BankReconciliationMatch_get', method: 'GET', path: '/bank/reconciliation/match/{id}' },
  BankReconciliationMatch_post: { operationId: 'BankReconciliationMatch_post', method: 'POST', path: '/bank/reconciliation/match' },
  BankReconciliationMatch_put: { operationId: 'BankReconciliationMatch_put', method: 'PUT', path: '/bank/reconciliation/match/{id}' },
  BankReconciliationMatch_search: { operationId: 'BankReconciliationMatch_search', method: 'GET', path: '/bank/reconciliation/match' },
  BankReconciliationMatchCount_count: { operationId: 'BankReconciliationMatchCount_count', method: 'GET', path: '/bank/reconciliation/match/count' },
  BankReconciliationMatchesCounter_get: { operationId: 'BankReconciliationMatchesCounter_get', method: 'GET', path: '/bank/reconciliation/matches/counter' },
  BankReconciliationMatchesCounter_post: { operationId: 'BankReconciliationMatchesCounter_post', method: 'POST', path: '/bank/reconciliation/matches/counter' },
  BankReconciliationMatchQuery_query: { operationId: 'BankReconciliationMatchQuery_query', method: 'GET', path: '/bank/reconciliation/match/query' },
  BankReconciliationMatchSuggest_suggest: { operationId: 'BankReconciliationMatchSuggest_suggest', method: 'PUT', path: '/bank/reconciliation/match/:suggest' },
  BankReconciliationPaymentType_get: { operationId: 'BankReconciliationPaymentType_get', method: 'GET', path: '/bank/reconciliation/paymentType/{id}' },
  BankReconciliationPaymentType_search: { operationId: 'BankReconciliationPaymentType_search', method: 'GET', path: '/bank/reconciliation/paymentType' },
  BankReconciliationSettings_get: { operationId: 'BankReconciliationSettings_get', method: 'GET', path: '/bank/reconciliation/settings' },
  BankReconciliationSettings_post: { operationId: 'BankReconciliationSettings_post', method: 'POST', path: '/bank/reconciliation/settings' },
  BankReconciliationSettings_put: { operationId: 'BankReconciliationSettings_put', method: 'PUT', path: '/bank/reconciliation/settings/{id}' },
  BankReconciliationTransactionsUnmatchedcsv_csvTransactions: { operationId: 'BankReconciliationTransactionsUnmatchedcsv_csvTransactions', method: 'PUT', path: '/bank/reconciliation/transactions/unmatched:csv' },
  BankStatement_delete: { operationId: 'BankStatement_delete', method: 'DELETE', path: '/bank/statement/{id}' },
  BankStatement_get: { operationId: 'BankStatement_get', method: 'GET', path: '/bank/statement/{id}' },
  BankStatement_search: { operationId: 'BankStatement_search', method: 'GET', path: '/bank/statement' },
  BankStatementImport_importBankStatement: { operationId: 'BankStatementImport_importBankStatement', method: 'POST', path: '/bank/statement/import' },
  BankStatementTransaction_get: { operationId: 'BankStatementTransaction_get', method: 'GET', path: '/bank/statement/transaction/{id}' },
  BankStatementTransaction_search: { operationId: 'BankStatementTransaction_search', method: 'GET', path: '/bank/statement/transaction' },
  BankStatementTransactionDetails_getDetails: { operationId: 'BankStatementTransactionDetails_getDetails', method: 'GET', path: '/bank/statement/transaction/{id}/details' },
  Company_get: { operationId: 'Company_get', method: 'GET', path: '/company/{id}' },
  Company_put: { operationId: 'Company_put', method: 'PUT', path: '/company' },
  CompanyDivisions_getDivisions: { operationId: 'CompanyDivisions_getDivisions', method: 'GET', path: '/company/divisions' },
  CompanySalesmodules_get: { operationId: 'CompanySalesmodules_get', method: 'GET', path: '/company/salesmodules' },
  CompanySalesmodules_post: { operationId: 'CompanySalesmodules_post', method: 'POST', path: '/company/salesmodules' },
  CompanySettingsAltinn_put: { operationId: 'CompanySettingsAltinn_put', method: 'PUT', path: '/company/settings/altinn' },
  CompanySettingsAltinn_search: { operationId: 'CompanySettingsAltinn_search', method: 'GET', path: '/company/settings/altinn' },
  CompanyWithLoginAccess_getWithLoginAccess: { operationId: 'CompanyWithLoginAccess_getWithLoginAccess', method: 'GET', path: '/company/>withLoginAccess' },
  Contact_get: { operationId: 'Contact_get', method: 'GET', path: '/contact/{id}' },
  Contact_post: { operationId: 'Contact_post', method: 'POST', path: '/contact' },
  Contact_put: { operationId: 'Contact_put', method: 'PUT', path: '/contact/{id}' },
  Contact_search: { operationId: 'Contact_search', method: 'GET', path: '/contact' },
  ContactList_deleteByIds: { operationId: 'ContactList_deleteByIds', method: 'DELETE', path: '/contact/list' },
  ContactList_postList: { operationId: 'ContactList_postList', method: 'POST', path: '/contact/list' },
  Country_get: { operationId: 'Country_get', method: 'GET', path: '/country/{id}' },
  Country_search: { operationId: 'Country_search', method: 'GET', path: '/country' },
  CrmProspect_get: { operationId: 'CrmProspect_get', method: 'GET', path: '/crm/prospect/{id}' },
  CrmProspect_search: { operationId: 'CrmProspect_search', method: 'GET', path: '/crm/prospect' },
  Currency_get: { operationId: 'Currency_get', method: 'GET', path: '/currency/{id}' },
  Currency_search: { operationId: 'Currency_search', method: 'GET', path: '/currency' },
  CurrencyExchangeRate_convertCurrencyAmount: { operationId: 'CurrencyExchangeRate_convertCurrencyAmount', method: 'GET', path: '/currency/{fromCurrencyID}/{toCurrencyID}/exchangeRate' },
  CurrencyExchangeRate_getAmountCurrency: { operationId: 'CurrencyExchangeRate_getAmountCurrency', method: 'GET', path: '/currency/{fromCurrencyID}/exchangeRate' },
  CurrencyRate_getRate: { operationId: 'CurrencyRate_getRate', method: 'GET', path: '/currency/{id}/rate' },
  Customer_delete: { operationId: 'Customer_delete', method: 'DELETE', path: '/customer/{id}' },
  Customer_get: { operationId: 'Customer_get', method: 'GET', path: '/customer/{id}' },
  Customer_post: { operationId: 'Customer_post', method: 'POST', path: '/customer' },
  Customer_put: { operationId: 'Customer_put', method: 'PUT', path: '/customer/{id}' },
  Customer_search: { operationId: 'Customer_search', method: 'GET', path: '/customer' },
  CustomerCategory_get: { operationId: 'CustomerCategory_get', method: 'GET', path: '/customer/category/{id}' },
  CustomerCategory_post: { operationId: 'CustomerCategory_post', method: 'POST', path: '/customer/category' },
  CustomerCategory_put: { operationId: 'CustomerCategory_put', method: 'PUT', path: '/customer/category/{id}' },
  CustomerCategory_search: { operationId: 'CustomerCategory_search', method: 'GET', path: '/customer/category' },
  CustomerList_postList: { operationId: 'CustomerList_postList', method: 'POST', path: '/customer/list' },
  CustomerList_putList: { operationId: 'CustomerList_putList', method: 'PUT', path: '/customer/list' },
  DeliveryAddress_get: { operationId: 'DeliveryAddress_get', method: 'GET', path: '/deliveryAddress/{id}' },
  DeliveryAddress_put: { operationId: 'DeliveryAddress_put', method: 'PUT', path: '/deliveryAddress/{id}' },
  DeliveryAddress_search: { operationId: 'DeliveryAddress_search', method: 'GET', path: '/deliveryAddress' },
  Department_delete: { operationId: 'Department_delete', method: 'DELETE', path: '/department/{id}' },
  Department_get: { operationId: 'Department_get', method: 'GET', path: '/department/{id}' },
  Department_post: { operationId: 'Department_post', method: 'POST', path: '/department' },
  Department_put: { operationId: 'Department_put', method: 'PUT', path: '/department/{id}' },
  Department_search: { operationId: 'Department_search', method: 'GET', path: '/department' },
  DepartmentList_postList: { operationId: 'DepartmentList_postList', method: 'POST', path: '/department/list' },
  DepartmentList_putList: { operationId: 'DepartmentList_putList', method: 'PUT', path: '/department/list' },
  DepartmentQuery_query: { operationId: 'DepartmentQuery_query', method: 'GET', path: '/department/query' },
  Division_post: { operationId: 'Division_post', method: 'POST', path: '/division' },
  Division_put: { operationId: 'Division_put', method: 'PUT', path: '/division/{id}' },
  Division_search: { operationId: 'Division_search', method: 'GET', path: '/division' },
  DivisionList_postList: { operationId: 'DivisionList_postList', method: 'POST', path: '/division/list' },
  DivisionList_putList: { operationId: 'DivisionList_putList', method: 'PUT', path: '/division/list' },
  Document_get: { operationId: 'Document_get', method: 'GET', path: '/document/{id}' },
  DocumentArchive_delete: { operationId: 'DocumentArchive_delete', method: 'DELETE', path: '/documentArchive/{id}' },
  DocumentArchive_put: { operationId: 'DocumentArchive_put', method: 'PUT', path: '/documentArchive/{id}' },
  DocumentArchiveAccount_accountPost: { operationId: 'DocumentArchiveAccount_accountPost', method: 'POST', path: '/documentArchive/account/{id}' },
  DocumentArchiveAccount_getAccount: { operationId: 'DocumentArchiveAccount_getAccount', method: 'GET', path: '/documentArchive/account/{id}' },
  DocumentArchiveCustomer_customerPost: { operationId: 'DocumentArchiveCustomer_customerPost', method: 'POST', path: '/documentArchive/customer/{id}' },
  DocumentArchiveCustomer_getCustomer: { operationId: 'DocumentArchiveCustomer_getCustomer', method: 'GET', path: '/documentArchive/customer/{id}' },
  DocumentArchiveDynamicControlForm_dynamicControlFormPost: { operationId: 'DocumentArchiveDynamicControlForm_dynamicControlFormPost', method: 'POST', path: '/documentArchive/dynamicControlForm/{id}' },
  DocumentArchiveDynamicControlForm_getDynamicControlForm: { operationId: 'DocumentArchiveDynamicControlForm_getDynamicControlForm', method: 'GET', path: '/documentArchive/dynamicControlForm/{id}' },
  DocumentArchiveEmployee_employeePost: { operationId: 'DocumentArchiveEmployee_employeePost', method: 'POST', path: '/documentArchive/employee/{id}' },
  DocumentArchiveEmployee_getEmployee: { operationId: 'DocumentArchiveEmployee_getEmployee', method: 'GET', path: '/documentArchive/employee/{id}' },
  DocumentArchiveProduct_getProduct: { operationId: 'DocumentArchiveProduct_getProduct', method: 'GET', path: '/documentArchive/product/{id}' },
  DocumentArchiveProduct_productPost: { operationId: 'DocumentArchiveProduct_productPost', method: 'POST', path: '/documentArchive/product/{id}' },
  DocumentArchiveProject_getProject: { operationId: 'DocumentArchiveProject_getProject', method: 'GET', path: '/documentArchive/project/{id}' },
  DocumentArchiveProject_projectPost: { operationId: 'DocumentArchiveProject_projectPost', method: 'POST', path: '/documentArchive/project/{id}' },
  DocumentArchiveReception_receptionPost: { operationId: 'DocumentArchiveReception_receptionPost', method: 'POST', path: '/documentArchive/reception' },
  DocumentArchiveSupplier_getSupplier: { operationId: 'DocumentArchiveSupplier_getSupplier', method: 'GET', path: '/documentArchive/supplier/{id}' },
  DocumentArchiveSupplier_supplierPost: { operationId: 'DocumentArchiveSupplier_supplierPost', method: 'POST', path: '/documentArchive/supplier/{id}' },
  DocumentContent_downloadContent: { operationId: 'DocumentContent_downloadContent', method: 'GET', path: '/document/{id}/content' },
  Employee_get: { operationId: 'Employee_get', method: 'GET', path: '/employee/{id}' },
  Employee_post: { operationId: 'Employee_post', method: 'POST', path: '/employee' },
  Employee_put: { operationId: 'Employee_put', method: 'PUT', path: '/employee/{id}' },
  Employee_search: { operationId: 'Employee_search', method: 'GET', path: '/employee' },
  EmployeeCategory_delete: { operationId: 'EmployeeCategory_delete', method: 'DELETE', path: '/employee/category/{id}' },
  EmployeeCategory_get: { operationId: 'EmployeeCategory_get', method: 'GET', path: '/employee/category/{id}' },
  EmployeeCategory_post: { operationId: 'EmployeeCategory_post', method: 'POST', path: '/employee/category' },
  EmployeeCategory_put: { operationId: 'EmployeeCategory_put', method: 'PUT', path: '/employee/category/{id}' },
  EmployeeCategory_search: { operationId: 'EmployeeCategory_search', method: 'GET', path: '/employee/category' },
  EmployeeCategoryList_deleteByIds: { operationId: 'EmployeeCategoryList_deleteByIds', method: 'DELETE', path: '/employee/category/list' },
  EmployeeCategoryList_postList: { operationId: 'EmployeeCategoryList_postList', method: 'POST', path: '/employee/category/list' },
  EmployeeCategoryList_putList: { operationId: 'EmployeeCategoryList_putList', method: 'PUT', path: '/employee/category/list' },
  EmployeeEmployment_get: { operationId: 'EmployeeEmployment_get', method: 'GET', path: '/employee/employment/{id}' },
  EmployeeEmployment_post: { operationId: 'EmployeeEmployment_post', method: 'POST', path: '/employee/employment' },
  EmployeeEmployment_put: { operationId: 'EmployeeEmployment_put', method: 'PUT', path: '/employee/employment/{id}' },
  EmployeeEmployment_search: { operationId: 'EmployeeEmployment_search', method: 'GET', path: '/employee/employment' },
  EmployeeEmploymentDetails_get: { operationId: 'EmployeeEmploymentDetails_get', method: 'GET', path: '/employee/employment/details/{id}' },
  EmployeeEmploymentDetails_post: { operationId: 'EmployeeEmploymentDetails_post', method: 'POST', path: '/employee/employment/details' },
  EmployeeEmploymentDetails_put: { operationId: 'EmployeeEmploymentDetails_put', method: 'PUT', path: '/employee/employment/details/{id}' },
  EmployeeEmploymentDetails_search: { operationId: 'EmployeeEmploymentDetails_search', method: 'GET', path: '/employee/employment/details' },
  EmployeeEmploymentEmploymentType_search: { operationId: 'EmployeeEmploymentEmploymentType_search', method: 'GET', path: '/employee/employment/employmentType' },
  EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonType: { operationId: 'EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonType', method: 'GET', path: '/employee/employment/employmentType/employmentEndReasonType' },
  EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormType: { operationId: 'EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormType', method: 'GET', path: '/employee/employment/employmentType/employmentFormType' },
  EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentType: { operationId: 'EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentType', method: 'GET', path: '/employee/employment/employmentType/maritimeEmploymentType' },
  EmployeeEmploymentEmploymentTypeSalaryType_getSalaryType: { operationId: 'EmployeeEmploymentEmploymentTypeSalaryType_getSalaryType', method: 'GET', path: '/employee/employment/employmentType/salaryType' },
  EmployeeEmploymentEmploymentTypeScheduleType_getScheduleType: { operationId: 'EmployeeEmploymentEmploymentTypeScheduleType_getScheduleType', method: 'GET', path: '/employee/employment/employmentType/scheduleType' },
  EmployeeEmploymentLeaveOfAbsence_get: { operationId: 'EmployeeEmploymentLeaveOfAbsence_get', method: 'GET', path: '/employee/employment/leaveOfAbsence/{id}' },
  EmployeeEmploymentLeaveOfAbsence_post: { operationId: 'EmployeeEmploymentLeaveOfAbsence_post', method: 'POST', path: '/employee/employment/leaveOfAbsence' },
  EmployeeEmploymentLeaveOfAbsence_put: { operationId: 'EmployeeEmploymentLeaveOfAbsence_put', method: 'PUT', path: '/employee/employment/leaveOfAbsence/{id}' },
  EmployeeEmploymentLeaveOfAbsence_search: { operationId: 'EmployeeEmploymentLeaveOfAbsence_search', method: 'GET', path: '/employee/employment/leaveOfAbsence' },
  EmployeeEmploymentLeaveOfAbsenceList_postList: { operationId: 'EmployeeEmploymentLeaveOfAbsenceList_postList', method: 'POST', path: '/employee/employment/leaveOfAbsence/list' },
  EmployeeEmploymentLeaveOfAbsenceType_search: { operationId: 'EmployeeEmploymentLeaveOfAbsenceType_search', method: 'GET', path: '/employee/employment/leaveOfAbsenceType' },
  EmployeeEmploymentOccupationCode_get: { operationId: 'EmployeeEmploymentOccupationCode_get', method: 'GET', path: '/employee/employment/occupationCode/{id}' },
  EmployeeEmploymentOccupationCode_search: { operationId: 'EmployeeEmploymentOccupationCode_search', method: 'GET', path: '/employee/employment/occupationCode' },
  EmployeeEmploymentRemunerationType_search: { operationId: 'EmployeeEmploymentRemunerationType_search', method: 'GET', path: '/employee/employment/remunerationType' },
  EmployeeEmploymentWorkingHoursScheme_search: { operationId: 'EmployeeEmploymentWorkingHoursScheme_search', method: 'GET', path: '/employee/employment/workingHoursScheme' },
  EmployeeEntitlement_get: { operationId: 'EmployeeEntitlement_get', method: 'GET', path: '/employee/entitlement/{id}' },
  EmployeeEntitlement_search: { operationId: 'EmployeeEntitlement_search', method: 'GET', path: '/employee/entitlement' },
  EmployeeEntitlementClient_client: { operationId: 'EmployeeEntitlementClient_client', method: 'GET', path: '/employee/entitlement/client' },
  EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplate: { operationId: 'EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplate', method: 'PUT', path: '/employee/entitlement/:grantClientEntitlementsByTemplate' },
  EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplate: { operationId: 'EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplate', method: 'PUT', path: '/employee/entitlement/:grantEntitlementsByTemplate' },
  EmployeeHourlyCostAndRate_get: { operationId: 'EmployeeHourlyCostAndRate_get', method: 'GET', path: '/employee/hourlyCostAndRate/{id}' },
  EmployeeHourlyCostAndRate_post: { operationId: 'EmployeeHourlyCostAndRate_post', method: 'POST', path: '/employee/hourlyCostAndRate' },
  EmployeeHourlyCostAndRate_put: { operationId: 'EmployeeHourlyCostAndRate_put', method: 'PUT', path: '/employee/hourlyCostAndRate/{id}' },
  EmployeeHourlyCostAndRate_search: { operationId: 'EmployeeHourlyCostAndRate_search', method: 'GET', path: '/employee/hourlyCostAndRate' },
  EmployeeList_postList: { operationId: 'EmployeeList_postList', method: 'POST', path: '/employee/list' },
  EmployeeNextOfKin_get: { operationId: 'EmployeeNextOfKin_get', method: 'GET', path: '/employee/nextOfKin/{id}' },
  EmployeeNextOfKin_post: { operationId: 'EmployeeNextOfKin_post', method: 'POST', path: '/employee/nextOfKin' },
  EmployeeNextOfKin_put: { operationId: 'EmployeeNextOfKin_put', method: 'PUT', path: '/employee/nextOfKin/{id}' },
  EmployeeNextOfKin_search: { operationId: 'EmployeeNextOfKin_search', method: 'GET', path: '/employee/nextOfKin' },
  EmployeePreferences_put: { operationId: 'EmployeePreferences_put', method: 'PUT', path: '/employee/preferences/{id}' },
  EmployeePreferences_search: { operationId: 'EmployeePreferences_search', method: 'GET', path: '/employee/preferences' },
  EmployeePreferencesChangeLanguage_changeLanguage: { operationId: 'EmployeePreferencesChangeLanguage_changeLanguage', method: 'PUT', path: '/employee/preferences/:changeLanguage' },
  EmployeePreferencesList_putList: { operationId: 'EmployeePreferencesList_putList', method: 'PUT', path: '/employee/preferences/list' },
  EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferences: { operationId: 'EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferences', method: 'GET', path: '/employee/preferences/>loggedInEmployeePreferences' },
  EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContacts: { operationId: 'EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContacts', method: 'GET', path: '/employee/searchForEmployeesAndContacts' },
  EmployeeStandardTime_get: { operationId: 'EmployeeStandardTime_get', method: 'GET', path: '/employee/standardTime/{id}' },
  EmployeeStandardTime_post: { operationId: 'EmployeeStandardTime_post', method: 'POST', path: '/employee/standardTime' },
  EmployeeStandardTime_put: { operationId: 'EmployeeStandardTime_put', method: 'PUT', path: '/employee/standardTime/{id}' },
  EmployeeStandardTime_search: { operationId: 'EmployeeStandardTime_search', method: 'GET', path: '/employee/standardTime' },
  EmployeeStandardTimeByDate_getByDate: { operationId: 'EmployeeStandardTimeByDate_getByDate', method: 'GET', path: '/employee/standardTime/byDate' },
  Event_example: { operationId: 'Event_example', method: 'GET', path: '/event/{eventType}' },
  Event_get: { operationId: 'Event_get', method: 'GET', path: '/event' },
  EventSubscription_delete: { operationId: 'EventSubscription_delete', method: 'DELETE', path: '/event/subscription/{id}' },
  EventSubscription_get: { operationId: 'EventSubscription_get', method: 'GET', path: '/event/subscription/{id}' },
  EventSubscription_post: { operationId: 'EventSubscription_post', method: 'POST', path: '/event/subscription' },
  EventSubscription_put: { operationId: 'EventSubscription_put', method: 'PUT', path: '/event/subscription/{id}' },
  EventSubscription_search: { operationId: 'EventSubscription_search', method: 'GET', path: '/event/subscription' },
  EventSubscriptionList_deleteByIds: { operationId: 'EventSubscriptionList_deleteByIds', method: 'DELETE', path: '/event/subscription/list' },
  EventSubscriptionList_postList: { operationId: 'EventSubscriptionList_postList', method: 'POST', path: '/event/subscription/list' },
  EventSubscriptionList_putList: { operationId: 'EventSubscriptionList_putList', method: 'PUT', path: '/event/subscription/list' },
  IncomingInvoice_get: { operationId: 'IncomingInvoice_get', method: 'GET', path: '/incomingInvoice/{voucherId}' },
  IncomingInvoice_post: { operationId: 'IncomingInvoice_post', method: 'POST', path: '/incomingInvoice' },
  IncomingInvoice_put: { operationId: 'IncomingInvoice_put', method: 'PUT', path: '/incomingInvoice/{voucherId}' },
  IncomingInvoiceAddPayment_addPayment: { operationId: 'IncomingInvoiceAddPayment_addPayment', method: 'POST', path: '/incomingInvoice/{voucherId}/addPayment' },
  IncomingInvoiceSearch_search: { operationId: 'IncomingInvoiceSearch_search', method: 'GET', path: '/incomingInvoice/search' },
  InternalDebtCollector_get: { operationId: 'InternalDebtCollector_get', method: 'GET', path: '/internal/debtCollector' },
  InternalDebtCollectorDeactivate_deactivate: { operationId: 'InternalDebtCollectorDeactivate_deactivate', method: 'DELETE', path: '/internal/debtCollector/deactivate' },
  InternalNhoAdminAbort_abort: { operationId: 'InternalNhoAdminAbort_abort', method: 'PUT', path: '/internal/nhoAdmin/:abort' },
  Inventory_delete: { operationId: 'Inventory_delete', method: 'DELETE', path: '/inventory/{id}' },
  Inventory_get: { operationId: 'Inventory_get', method: 'GET', path: '/inventory/{id}' },
  Inventory_post: { operationId: 'Inventory_post', method: 'POST', path: '/inventory' },
  Inventory_put: { operationId: 'Inventory_put', method: 'PUT', path: '/inventory/{id}' },
  Inventory_search: { operationId: 'Inventory_search', method: 'GET', path: '/inventory' },
  InventoryInventories_search: { operationId: 'InventoryInventories_search', method: 'GET', path: '/inventory/inventories' },
  InventoryLocation_delete: { operationId: 'InventoryLocation_delete', method: 'DELETE', path: '/inventory/location/{id}' },
  InventoryLocation_get: { operationId: 'InventoryLocation_get', method: 'GET', path: '/inventory/location/{id}' },
  InventoryLocation_post: { operationId: 'InventoryLocation_post', method: 'POST', path: '/inventory/location' },
  InventoryLocation_put: { operationId: 'InventoryLocation_put', method: 'PUT', path: '/inventory/location/{id}' },
  InventoryLocation_search: { operationId: 'InventoryLocation_search', method: 'GET', path: '/inventory/location' },
  InventoryLocationList_deleteByIds: { operationId: 'InventoryLocationList_deleteByIds', method: 'DELETE', path: '/inventory/location/list' },
  InventoryLocationList_postList: { operationId: 'InventoryLocationList_postList', method: 'POST', path: '/inventory/location/list' },
  InventoryLocationList_putList: { operationId: 'InventoryLocationList_putList', method: 'PUT', path: '/inventory/location/list' },
  InventoryStocktaking_delete: { operationId: 'InventoryStocktaking_delete', method: 'DELETE', path: '/inventory/stocktaking/{id}' },
  InventoryStocktaking_get: { operationId: 'InventoryStocktaking_get', method: 'GET', path: '/inventory/stocktaking/{id}' },
  InventoryStocktaking_post: { operationId: 'InventoryStocktaking_post', method: 'POST', path: '/inventory/stocktaking' },
  InventoryStocktaking_put: { operationId: 'InventoryStocktaking_put', method: 'PUT', path: '/inventory/stocktaking/{id}' },
  InventoryStocktaking_search: { operationId: 'InventoryStocktaking_search', method: 'GET', path: '/inventory/stocktaking' },
  InventoryStocktakingProductline_delete: { operationId: 'InventoryStocktakingProductline_delete', method: 'DELETE', path: '/inventory/stocktaking/productline/{id}' },
  InventoryStocktakingProductline_get: { operationId: 'InventoryStocktakingProductline_get', method: 'GET', path: '/inventory/stocktaking/productline/{id}' },
  InventoryStocktakingProductline_post: { operationId: 'InventoryStocktakingProductline_post', method: 'POST', path: '/inventory/stocktaking/productline' },
  InventoryStocktakingProductline_put: { operationId: 'InventoryStocktakingProductline_put', method: 'PUT', path: '/inventory/stocktaking/productline/{id}' },
  InventoryStocktakingProductline_search: { operationId: 'InventoryStocktakingProductline_search', method: 'GET', path: '/inventory/stocktaking/productline' },
  InventoryStocktakingProductlineChangeLocation_changeLocation: { operationId: 'InventoryStocktakingProductlineChangeLocation_changeLocation', method: 'PUT', path: '/inventory/stocktaking/productline/{id}/:changeLocation' },
  Invoice_get: { operationId: 'Invoice_get', method: 'GET', path: '/invoice/{id}' },
  Invoice_post: { operationId: 'Invoice_post', method: 'POST', path: '/invoice' },
  Invoice_search: { operationId: 'Invoice_search', method: 'GET', path: '/invoice' },
  InvoiceCreateCreditNote_createCreditNote: { operationId: 'InvoiceCreateCreditNote_createCreditNote', method: 'PUT', path: '/invoice/{id}/:createCreditNote' },
  InvoiceCreateReminder_createReminder: { operationId: 'InvoiceCreateReminder_createReminder', method: 'PUT', path: '/invoice/{id}/:createReminder' },
  InvoiceDetails_get: { operationId: 'InvoiceDetails_get', method: 'GET', path: '/invoice/details/{id}' },
  InvoiceDetails_search: { operationId: 'InvoiceDetails_search', method: 'GET', path: '/invoice/details' },
  InvoiceList_postList: { operationId: 'InvoiceList_postList', method: 'POST', path: '/invoice/list' },
  InvoicePayment_payment: { operationId: 'InvoicePayment_payment', method: 'PUT', path: '/invoice/{id}/:payment' },
  InvoicePaymentType_get: { operationId: 'InvoicePaymentType_get', method: 'GET', path: '/invoice/paymentType/{id}' },
  InvoicePaymentType_search: { operationId: 'InvoicePaymentType_search', method: 'GET', path: '/invoice/paymentType' },
  InvoicePdf_downloadPdf: { operationId: 'InvoicePdf_downloadPdf', method: 'GET', path: '/invoice/{invoiceId}/pdf' },
  InvoiceRemark_get: { operationId: 'InvoiceRemark_get', method: 'GET', path: '/invoiceRemark/{id}' },
  InvoiceSend_send: { operationId: 'InvoiceSend_send', method: 'PUT', path: '/invoice/{id}/:send' },
  Ledger_search: { operationId: 'Ledger_search', method: 'GET', path: '/ledger' },
  LedgerAccount_delete: { operationId: 'LedgerAccount_delete', method: 'DELETE', path: '/ledger/account/{id}' },
  LedgerAccount_get: { operationId: 'LedgerAccount_get', method: 'GET', path: '/ledger/account/{id}' },
  LedgerAccount_post: { operationId: 'LedgerAccount_post', method: 'POST', path: '/ledger/account' },
  LedgerAccount_put: { operationId: 'LedgerAccount_put', method: 'PUT', path: '/ledger/account/{id}' },
  LedgerAccount_search: { operationId: 'LedgerAccount_search', method: 'GET', path: '/ledger/account' },
  LedgerAccountingDimensionName_delete: { operationId: 'LedgerAccountingDimensionName_delete', method: 'DELETE', path: '/ledger/accountingDimensionName/{id}' },
  LedgerAccountingDimensionName_get: { operationId: 'LedgerAccountingDimensionName_get', method: 'GET', path: '/ledger/accountingDimensionName/{id}' },
  LedgerAccountingDimensionName_getAll: { operationId: 'LedgerAccountingDimensionName_getAll', method: 'GET', path: '/ledger/accountingDimensionName' },
  LedgerAccountingDimensionName_post: { operationId: 'LedgerAccountingDimensionName_post', method: 'POST', path: '/ledger/accountingDimensionName' },
  LedgerAccountingDimensionName_put: { operationId: 'LedgerAccountingDimensionName_put', method: 'PUT', path: '/ledger/accountingDimensionName/{id}' },
  LedgerAccountingDimensionNameSearch_search: { operationId: 'LedgerAccountingDimensionNameSearch_search', method: 'GET', path: '/ledger/accountingDimensionName/search' },
  LedgerAccountingDimensionValue_delete: { operationId: 'LedgerAccountingDimensionValue_delete', method: 'DELETE', path: '/ledger/accountingDimensionValue/{id}' },
  LedgerAccountingDimensionValue_get: { operationId: 'LedgerAccountingDimensionValue_get', method: 'GET', path: '/ledger/accountingDimensionValue/{id}' },
  LedgerAccountingDimensionValue_post: { operationId: 'LedgerAccountingDimensionValue_post', method: 'POST', path: '/ledger/accountingDimensionValue' },
  LedgerAccountingDimensionValueList_putList: { operationId: 'LedgerAccountingDimensionValueList_putList', method: 'PUT', path: '/ledger/accountingDimensionValue/list' },
  LedgerAccountingDimensionValueSearch_searchAccountingDimensionValues: { operationId: 'LedgerAccountingDimensionValueSearch_searchAccountingDimensionValues', method: 'GET', path: '/ledger/accountingDimensionValue/search' },
  LedgerAccountingPeriod_get: { operationId: 'LedgerAccountingPeriod_get', method: 'GET', path: '/ledger/accountingPeriod/{id}' },
  LedgerAccountingPeriod_search: { operationId: 'LedgerAccountingPeriod_search', method: 'GET', path: '/ledger/accountingPeriod' },
  LedgerAccountList_deleteByIds: { operationId: 'LedgerAccountList_deleteByIds', method: 'DELETE', path: '/ledger/account/list' },
  LedgerAccountList_postList: { operationId: 'LedgerAccountList_postList', method: 'POST', path: '/ledger/account/list' },
  LedgerAccountList_putList: { operationId: 'LedgerAccountList_putList', method: 'PUT', path: '/ledger/account/list' },
  LedgerAnnualAccount_get: { operationId: 'LedgerAnnualAccount_get', method: 'GET', path: '/ledger/annualAccount/{id}' },
  LedgerAnnualAccount_search: { operationId: 'LedgerAnnualAccount_search', method: 'GET', path: '/ledger/annualAccount' },
  LedgerCloseGroup_get: { operationId: 'LedgerCloseGroup_get', method: 'GET', path: '/ledger/closeGroup/{id}' },
  LedgerCloseGroup_search: { operationId: 'LedgerCloseGroup_search', method: 'GET', path: '/ledger/closeGroup' },
  LedgerOpenPost_openPost: { operationId: 'LedgerOpenPost_openPost', method: 'GET', path: '/ledger/openPost' },
  LedgerPaymentTypeOut_delete: { operationId: 'LedgerPaymentTypeOut_delete', method: 'DELETE', path: '/ledger/paymentTypeOut/{id}' },
  LedgerPaymentTypeOut_get: { operationId: 'LedgerPaymentTypeOut_get', method: 'GET', path: '/ledger/paymentTypeOut/{id}' },
  LedgerPaymentTypeOut_post: { operationId: 'LedgerPaymentTypeOut_post', method: 'POST', path: '/ledger/paymentTypeOut' },
  LedgerPaymentTypeOut_put: { operationId: 'LedgerPaymentTypeOut_put', method: 'PUT', path: '/ledger/paymentTypeOut/{id}' },
  LedgerPaymentTypeOut_search: { operationId: 'LedgerPaymentTypeOut_search', method: 'GET', path: '/ledger/paymentTypeOut' },
  LedgerPaymentTypeOutList_postList: { operationId: 'LedgerPaymentTypeOutList_postList', method: 'POST', path: '/ledger/paymentTypeOut/list' },
  LedgerPaymentTypeOutList_putList: { operationId: 'LedgerPaymentTypeOutList_putList', method: 'PUT', path: '/ledger/paymentTypeOut/list' },
  LedgerPosting_get: { operationId: 'LedgerPosting_get', method: 'GET', path: '/ledger/posting/{id}' },
  LedgerPosting_search: { operationId: 'LedgerPosting_search', method: 'GET', path: '/ledger/posting' },
  LedgerPostingByDate_get: { operationId: 'LedgerPostingByDate_get', method: 'GET', path: '/ledger/postingByDate' },
  LedgerPostingClosePostings_closePostings: { operationId: 'LedgerPostingClosePostings_closePostings', method: 'PUT', path: '/ledger/posting/:closePostings' },
  LedgerPostingOpenPost_openPost: { operationId: 'LedgerPostingOpenPost_openPost', method: 'GET', path: '/ledger/posting/openPost' },
  LedgerPostingRules_get: { operationId: 'LedgerPostingRules_get', method: 'GET', path: '/ledger/postingRules' },
  LedgerVatSettings_get: { operationId: 'LedgerVatSettings_get', method: 'GET', path: '/ledger/vatSettings' },
  LedgerVatSettings_put: { operationId: 'LedgerVatSettings_put', method: 'PUT', path: '/ledger/vatSettings' },
  LedgerVatType_get: { operationId: 'LedgerVatType_get', method: 'GET', path: '/ledger/vatType/{id}' },
  LedgerVatType_search: { operationId: 'LedgerVatType_search', method: 'GET', path: '/ledger/vatType' },
  LedgerVatTypeCreateRelativeVatType_createRelativeVatType: { operationId: 'LedgerVatTypeCreateRelativeVatType_createRelativeVatType', method: 'PUT', path: '/ledger/vatType/createRelativeVatType' },
  LedgerVoucher_delete: { operationId: 'LedgerVoucher_delete', method: 'DELETE', path: '/ledger/voucher/{id}' },
  LedgerVoucher_get: { operationId: 'LedgerVoucher_get', method: 'GET', path: '/ledger/voucher/{id}' },
  LedgerVoucher_post: { operationId: 'LedgerVoucher_post', method: 'POST', path: '/ledger/voucher' },
  LedgerVoucher_put: { operationId: 'LedgerVoucher_put', method: 'PUT', path: '/ledger/voucher/{id}' },
  LedgerVoucher_search: { operationId: 'LedgerVoucher_search', method: 'GET', path: '/ledger/voucher' },
  LedgerVoucherAttachment_deleteAttachment: { operationId: 'LedgerVoucherAttachment_deleteAttachment', method: 'DELETE', path: '/ledger/voucher/{voucherId}/attachment' },
  LedgerVoucherAttachment_uploadAttachment: { operationId: 'LedgerVoucherAttachment_uploadAttachment', method: 'POST', path: '/ledger/voucher/{voucherId}/attachment' },
  LedgerVoucherExternalVoucherNumber_externalVoucherNumber: { operationId: 'LedgerVoucherExternalVoucherNumber_externalVoucherNumber', method: 'GET', path: '/ledger/voucher/>externalVoucherNumber' },
  LedgerVoucherHistoricalAttachment_uploadAttachment: { operationId: 'LedgerVoucherHistoricalAttachment_uploadAttachment', method: 'POST', path: '/ledger/voucher/historical/{voucherId}/attachment' },
  LedgerVoucherHistoricalClosePostings_closePostings: { operationId: 'LedgerVoucherHistoricalClosePostings_closePostings', method: 'PUT', path: '/ledger/voucher/historical/:closePostings' },
  LedgerVoucherHistoricalEmployee_postEmployee: { operationId: 'LedgerVoucherHistoricalEmployee_postEmployee', method: 'POST', path: '/ledger/voucher/historical/employee' },
  LedgerVoucherHistoricalHistorical_postHistorical: { operationId: 'LedgerVoucherHistoricalHistorical_postHistorical', method: 'POST', path: '/ledger/voucher/historical/historical' },
  LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchers: { operationId: 'LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchers', method: 'PUT', path: '/ledger/voucher/historical/:reverseHistoricalVouchers' },
  LedgerVoucherImportDocument_importDocument: { operationId: 'LedgerVoucherImportDocument_importDocument', method: 'POST', path: '/ledger/voucher/importDocument' },
  LedgerVoucherImportGbat10_importGbat10: { operationId: 'LedgerVoucherImportGbat10_importGbat10', method: 'POST', path: '/ledger/voucher/importGbat10' },
  LedgerVoucherList_putList: { operationId: 'LedgerVoucherList_putList', method: 'PUT', path: '/ledger/voucher/list' },
  LedgerVoucherNonPosted_nonPosted: { operationId: 'LedgerVoucherNonPosted_nonPosted', method: 'GET', path: '/ledger/voucher/>nonPosted' },
  LedgerVoucherOpeningBalance_delete: { operationId: 'LedgerVoucherOpeningBalance_delete', method: 'DELETE', path: '/ledger/voucher/openingBalance' },
  LedgerVoucherOpeningBalance_get: { operationId: 'LedgerVoucherOpeningBalance_get', method: 'GET', path: '/ledger/voucher/openingBalance' },
  LedgerVoucherOpeningBalance_post: { operationId: 'LedgerVoucherOpeningBalance_post', method: 'POST', path: '/ledger/voucher/openingBalance' },
  LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucher: { operationId: 'LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucher', method: 'GET', path: '/ledger/voucher/openingBalance/>correctionVoucher' },
  LedgerVoucherOptions_options: { operationId: 'LedgerVoucherOptions_options', method: 'GET', path: '/ledger/voucher/{id}/options' },
  LedgerVoucherPdf_downloadPdf: { operationId: 'LedgerVoucherPdf_downloadPdf', method: 'GET', path: '/ledger/voucher/{voucherId}/pdf' },
  LedgerVoucherPdf_uploadPdf: { operationId: 'LedgerVoucherPdf_uploadPdf', method: 'POST', path: '/ledger/voucher/{voucherId}/pdf/{fileName}' },
  LedgerVoucherReverse_reverse: { operationId: 'LedgerVoucherReverse_reverse', method: 'PUT', path: '/ledger/voucher/{id}/:reverse' },
  LedgerVoucherSendToInbox_sendToInbox: { operationId: 'LedgerVoucherSendToInbox_sendToInbox', method: 'PUT', path: '/ledger/voucher/{id}/:sendToInbox' },
  LedgerVoucherSendToLedger_sendToLedger: { operationId: 'LedgerVoucherSendToLedger_sendToLedger', method: 'PUT', path: '/ledger/voucher/{id}/:sendToLedger' },
  LedgerVoucherType_get: { operationId: 'LedgerVoucherType_get', method: 'GET', path: '/ledger/voucherType/{id}' },
  LedgerVoucherType_search: { operationId: 'LedgerVoucherType_search', method: 'GET', path: '/ledger/voucherType' },
  LedgerVoucherVoucherReception_voucherReception: { operationId: 'LedgerVoucherVoucherReception_voucherReception', method: 'GET', path: '/ledger/voucher/>voucherReception' },
  Municipality_search: { operationId: 'Municipality_search', method: 'GET', path: '/municipality' },
  MunicipalityQuery_query: { operationId: 'MunicipalityQuery_query', method: 'GET', path: '/municipality/query' },
  Order_delete: { operationId: 'Order_delete', method: 'DELETE', path: '/order/{id}' },
  Order_get: { operationId: 'Order_get', method: 'GET', path: '/order/{id}' },
  Order_post: { operationId: 'Order_post', method: 'POST', path: '/order' },
  Order_put: { operationId: 'Order_put', method: 'PUT', path: '/order/{id}' },
  Order_search: { operationId: 'Order_search', method: 'GET', path: '/order' },
  OrderApproveSubscriptionInvoice_approveSubscriptionInvoice: { operationId: 'OrderApproveSubscriptionInvoice_approveSubscriptionInvoice', method: 'PUT', path: '/order/{id}/:approveSubscriptionInvoice' },
  OrderAttach_attach: { operationId: 'OrderAttach_attach', method: 'PUT', path: '/order/{id}/:attach' },
  OrderInvoice_invoice: { operationId: 'OrderInvoice_invoice', method: 'PUT', path: '/order/{id}/:invoice' },
  OrderInvoiceMultipleOrders_invoiceMultipleOrders: { operationId: 'OrderInvoiceMultipleOrders_invoiceMultipleOrders', method: 'PUT', path: '/order/:invoiceMultipleOrders' },
  OrderList_postList: { operationId: 'OrderList_postList', method: 'POST', path: '/order/list' },
  OrderOrderConfirmationPdf_downloadPdf: { operationId: 'OrderOrderConfirmationPdf_downloadPdf', method: 'GET', path: '/order/orderConfirmation/{orderId}/pdf' },
  OrderOrderGroup_delete: { operationId: 'OrderOrderGroup_delete', method: 'DELETE', path: '/order/orderGroup/{id}' },
  OrderOrderGroup_get: { operationId: 'OrderOrderGroup_get', method: 'GET', path: '/order/orderGroup/{id}' },
  OrderOrderGroup_post: { operationId: 'OrderOrderGroup_post', method: 'POST', path: '/order/orderGroup' },
  OrderOrderGroup_put: { operationId: 'OrderOrderGroup_put', method: 'PUT', path: '/order/orderGroup' },
  OrderOrderGroup_search: { operationId: 'OrderOrderGroup_search', method: 'GET', path: '/order/orderGroup' },
  OrderOrderline_delete: { operationId: 'OrderOrderline_delete', method: 'DELETE', path: '/order/orderline/{id}' },
  OrderOrderline_get: { operationId: 'OrderOrderline_get', method: 'GET', path: '/order/orderline/{id}' },
  OrderOrderline_post: { operationId: 'OrderOrderline_post', method: 'POST', path: '/order/orderline' },
  OrderOrderline_put: { operationId: 'OrderOrderline_put', method: 'PUT', path: '/order/orderline/{id}' },
  OrderOrderlineList_postList: { operationId: 'OrderOrderlineList_postList', method: 'POST', path: '/order/orderline/list' },
  OrderOrderlineOrderLineTemplate_orderLineTemplate: { operationId: 'OrderOrderlineOrderLineTemplate_orderLineTemplate', method: 'GET', path: '/order/orderline/orderLineTemplate' },
  OrderOrderlinePickLine_pickLine: { operationId: 'OrderOrderlinePickLine_pickLine', method: 'PUT', path: '/order/orderline/{id}/:pickLine' },
  OrderOrderlineUnpickLine_unpickLine: { operationId: 'OrderOrderlineUnpickLine_unpickLine', method: 'PUT', path: '/order/orderline/{id}/:unpickLine' },
  OrderPackingNotePdf_downloadPackingNotePdf: { operationId: 'OrderPackingNotePdf_downloadPackingNotePdf', method: 'GET', path: '/order/packingNote/{orderId}/pdf' },
  OrderSendInvoicePreview_postInvoicePreview: { operationId: 'OrderSendInvoicePreview_postInvoicePreview', method: 'PUT', path: '/order/sendInvoicePreview/{orderId}' },
  OrderSendOrderConfirmation_postOrderConfirmation: { operationId: 'OrderSendOrderConfirmation_postOrderConfirmation', method: 'PUT', path: '/order/sendOrderConfirmation/{orderId}' },
  OrderSendPackingNote_postPackingNote: { operationId: 'OrderSendPackingNote_postPackingNote', method: 'PUT', path: '/order/sendPackingNote/{orderId}' },
  OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoice: { operationId: 'OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoice', method: 'PUT', path: '/order/{id}/:unApproveSubscriptionInvoice' },
  Pension_search: { operationId: 'Pension_search', method: 'GET', path: '/pension' },
  PickupPoint_get: { operationId: 'PickupPoint_get', method: 'GET', path: '/pickupPoint/{id}' },
  PickupPoint_search: { operationId: 'PickupPoint_search', method: 'GET', path: '/pickupPoint' },
  PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerId: { operationId: 'PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerId', method: 'GET', path: '/platformAgnostic/bank/onboarding/fetchOdpCustomerId' },
  Product_delete: { operationId: 'Product_delete', method: 'DELETE', path: '/product/{id}' },
  Product_get: { operationId: 'Product_get', method: 'GET', path: '/product/{id}' },
  Product_post: { operationId: 'Product_post', method: 'POST', path: '/product' },
  Product_put: { operationId: 'Product_put', method: 'PUT', path: '/product/{id}' },
  Product_search: { operationId: 'Product_search', method: 'GET', path: '/product' },
  ProductDiscountGroup_get: { operationId: 'ProductDiscountGroup_get', method: 'GET', path: '/product/discountGroup/{id}' },
  ProductDiscountGroup_search: { operationId: 'ProductDiscountGroup_search', method: 'GET', path: '/product/discountGroup' },
  ProductExternal_get: { operationId: 'ProductExternal_get', method: 'GET', path: '/product/external/{id}' },
  ProductExternal_search: { operationId: 'ProductExternal_search', method: 'GET', path: '/product/external' },
  ProductGroup_delete: { operationId: 'ProductGroup_delete', method: 'DELETE', path: '/product/group/{id}' },
  ProductGroup_get: { operationId: 'ProductGroup_get', method: 'GET', path: '/product/group/{id}' },
  ProductGroup_post: { operationId: 'ProductGroup_post', method: 'POST', path: '/product/group' },
  ProductGroup_put: { operationId: 'ProductGroup_put', method: 'PUT', path: '/product/group/{id}' },
  ProductGroup_search: { operationId: 'ProductGroup_search', method: 'GET', path: '/product/group' },
  ProductGroupList_deleteByIds: { operationId: 'ProductGroupList_deleteByIds', method: 'DELETE', path: '/product/group/list' },
  ProductGroupList_postList: { operationId: 'ProductGroupList_postList', method: 'POST', path: '/product/group/list' },
  ProductGroupList_putList: { operationId: 'ProductGroupList_putList', method: 'PUT', path: '/product/group/list' },
  ProductGroupQuery_query: { operationId: 'ProductGroupQuery_query', method: 'GET', path: '/product/group/query' },
  ProductGroupRelation_delete: { operationId: 'ProductGroupRelation_delete', method: 'DELETE', path: '/product/groupRelation/{id}' },
  ProductGroupRelation_get: { operationId: 'ProductGroupRelation_get', method: 'GET', path: '/product/groupRelation/{id}' },
  ProductGroupRelation_post: { operationId: 'ProductGroupRelation_post', method: 'POST', path: '/product/groupRelation' },
  ProductGroupRelation_search: { operationId: 'ProductGroupRelation_search', method: 'GET', path: '/product/groupRelation' },
  ProductGroupRelationList_deleteList: { operationId: 'ProductGroupRelationList_deleteList', method: 'DELETE', path: '/product/groupRelation/list' },
  ProductGroupRelationList_postList: { operationId: 'ProductGroupRelationList_postList', method: 'POST', path: '/product/groupRelation/list' },
  ProductImage_deleteImage: { operationId: 'ProductImage_deleteImage', method: 'DELETE', path: '/product/{id}/image' },
  ProductImage_uploadImage: { operationId: 'ProductImage_uploadImage', method: 'POST', path: '/product/{id}/image' },
  ProductInventoryLocation_delete: { operationId: 'ProductInventoryLocation_delete', method: 'DELETE', path: '/product/inventoryLocation/{id}' },
  ProductInventoryLocation_get: { operationId: 'ProductInventoryLocation_get', method: 'GET', path: '/product/inventoryLocation/{id}' },
  ProductInventoryLocation_post: { operationId: 'ProductInventoryLocation_post', method: 'POST', path: '/product/inventoryLocation' },
  ProductInventoryLocation_put: { operationId: 'ProductInventoryLocation_put', method: 'PUT', path: '/product/inventoryLocation/{id}' },
  ProductInventoryLocation_search: { operationId: 'ProductInventoryLocation_search', method: 'GET', path: '/product/inventoryLocation' },
  ProductInventoryLocationList_postList: { operationId: 'ProductInventoryLocationList_postList', method: 'POST', path: '/product/inventoryLocation/list' },
  ProductInventoryLocationList_putList: { operationId: 'ProductInventoryLocationList_putList', method: 'PUT', path: '/product/inventoryLocation/list' },
  ProductList_postList: { operationId: 'ProductList_postList', method: 'POST', path: '/product/list' },
  ProductList_putList: { operationId: 'ProductList_putList', method: 'PUT', path: '/product/list' },
  ProductLogisticsSettings_get: { operationId: 'ProductLogisticsSettings_get', method: 'GET', path: '/product/logisticsSettings' },
  ProductLogisticsSettings_put: { operationId: 'ProductLogisticsSettings_put', method: 'PUT', path: '/product/logisticsSettings' },
  ProductProductPrice_search: { operationId: 'ProductProductPrice_search', method: 'GET', path: '/product/productPrice' },
  ProductSupplierProduct_delete: { operationId: 'ProductSupplierProduct_delete', method: 'DELETE', path: '/product/supplierProduct/{id}' },
  ProductSupplierProduct_get: { operationId: 'ProductSupplierProduct_get', method: 'GET', path: '/product/supplierProduct/{id}' },
  ProductSupplierProduct_post: { operationId: 'ProductSupplierProduct_post', method: 'POST', path: '/product/supplierProduct' },
  ProductSupplierProduct_put: { operationId: 'ProductSupplierProduct_put', method: 'PUT', path: '/product/supplierProduct/{id}' },
  ProductSupplierProduct_search: { operationId: 'ProductSupplierProduct_search', method: 'GET', path: '/product/supplierProduct' },
  ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIds: { operationId: 'ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIds', method: 'POST', path: '/product/supplierProduct/getSupplierProductsByIds' },
  ProductSupplierProductList_postList: { operationId: 'ProductSupplierProductList_postList', method: 'POST', path: '/product/supplierProduct/list' },
  ProductSupplierProductList_putList: { operationId: 'ProductSupplierProductList_putList', method: 'PUT', path: '/product/supplierProduct/list' },
  ProductUnit_delete: { operationId: 'ProductUnit_delete', method: 'DELETE', path: '/product/unit/{id}' },
  ProductUnit_get: { operationId: 'ProductUnit_get', method: 'GET', path: '/product/unit/{id}' },
  ProductUnit_post: { operationId: 'ProductUnit_post', method: 'POST', path: '/product/unit' },
  ProductUnit_put: { operationId: 'ProductUnit_put', method: 'PUT', path: '/product/unit/{id}' },
  ProductUnit_search: { operationId: 'ProductUnit_search', method: 'GET', path: '/product/unit' },
  ProductUnitList_postList: { operationId: 'ProductUnitList_postList', method: 'POST', path: '/product/unit/list' },
  ProductUnitList_putList: { operationId: 'ProductUnitList_putList', method: 'PUT', path: '/product/unit/list' },
  ProductUnitMaster_get: { operationId: 'ProductUnitMaster_get', method: 'GET', path: '/product/unit/master/{id}' },
  ProductUnitMaster_search: { operationId: 'ProductUnitMaster_search', method: 'GET', path: '/product/unit/master' },
  ProductUnitQuery_query: { operationId: 'ProductUnitQuery_query', method: 'GET', path: '/product/unit/query' },
  Project_delete: { operationId: 'Project_delete', method: 'DELETE', path: '/project/{id}' },
  Project_deleteList: { operationId: 'Project_deleteList', method: 'DELETE', path: '/project' },
  Project_get: { operationId: 'Project_get', method: 'GET', path: '/project/{id}' },
  Project_post: { operationId: 'Project_post', method: 'POST', path: '/project' },
  Project_put: { operationId: 'Project_put', method: 'PUT', path: '/project/{id}' },
  Project_search: { operationId: 'Project_search', method: 'GET', path: '/project' },
  ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIds: { operationId: 'ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIds', method: 'GET', path: '/project/batchPeriod/budgetStatusByProjectIds' },
  ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIds: { operationId: 'ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIds', method: 'GET', path: '/project/batchPeriod/invoicingReserveByProjectIds' },
  ProjectCategory_get: { operationId: 'ProjectCategory_get', method: 'GET', path: '/project/category/{id}' },
  ProjectCategory_post: { operationId: 'ProjectCategory_post', method: 'POST', path: '/project/category' },
  ProjectCategory_put: { operationId: 'ProjectCategory_put', method: 'PUT', path: '/project/category/{id}' },
  ProjectCategory_search: { operationId: 'ProjectCategory_search', method: 'GET', path: '/project/category' },
  ProjectControlForm_get: { operationId: 'ProjectControlForm_get', method: 'GET', path: '/project/controlForm/{id}' },
  ProjectControlForm_search: { operationId: 'ProjectControlForm_search', method: 'GET', path: '/project/controlForm' },
  ProjectControlFormType_get: { operationId: 'ProjectControlFormType_get', method: 'GET', path: '/project/controlFormType/{id}' },
  ProjectControlFormType_search: { operationId: 'ProjectControlFormType_search', method: 'GET', path: '/project/controlFormType' },
  ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedForm: { operationId: 'ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedForm', method: 'PUT', path: '/project/dynamicControlForm/{id}/:copyFieldValuesFromLastEditedForm' },
  ProjectForTimeSheet_getForTimeSheet: { operationId: 'ProjectForTimeSheet_getForTimeSheet', method: 'GET', path: '/project/>forTimeSheet' },
  ProjectHourlyRates_delete: { operationId: 'ProjectHourlyRates_delete', method: 'DELETE', path: '/project/hourlyRates/{id}' },
  ProjectHourlyRates_get: { operationId: 'ProjectHourlyRates_get', method: 'GET', path: '/project/hourlyRates/{id}' },
  ProjectHourlyRates_post: { operationId: 'ProjectHourlyRates_post', method: 'POST', path: '/project/hourlyRates' },
  ProjectHourlyRates_put: { operationId: 'ProjectHourlyRates_put', method: 'PUT', path: '/project/hourlyRates/{id}' },
  ProjectHourlyRates_search: { operationId: 'ProjectHourlyRates_search', method: 'GET', path: '/project/hourlyRates' },
  ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIds: { operationId: 'ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIds', method: 'DELETE', path: '/project/hourlyRates/deleteByProjectIds' },
  ProjectHourlyRatesList_deleteByIds: { operationId: 'ProjectHourlyRatesList_deleteByIds', method: 'DELETE', path: '/project/hourlyRates/list' },
  ProjectHourlyRatesList_postList: { operationId: 'ProjectHourlyRatesList_postList', method: 'POST', path: '/project/hourlyRates/list' },
  ProjectHourlyRatesList_putList: { operationId: 'ProjectHourlyRatesList_putList', method: 'PUT', path: '/project/hourlyRates/list' },
  ProjectHourlyRatesProjectSpecificRates_delete: { operationId: 'ProjectHourlyRatesProjectSpecificRates_delete', method: 'DELETE', path: '/project/hourlyRates/projectSpecificRates/{id}' },
  ProjectHourlyRatesProjectSpecificRates_get: { operationId: 'ProjectHourlyRatesProjectSpecificRates_get', method: 'GET', path: '/project/hourlyRates/projectSpecificRates/{id}' },
  ProjectHourlyRatesProjectSpecificRates_post: { operationId: 'ProjectHourlyRatesProjectSpecificRates_post', method: 'POST', path: '/project/hourlyRates/projectSpecificRates' },
  ProjectHourlyRatesProjectSpecificRates_put: { operationId: 'ProjectHourlyRatesProjectSpecificRates_put', method: 'PUT', path: '/project/hourlyRates/projectSpecificRates/{id}' },
  ProjectHourlyRatesProjectSpecificRates_search: { operationId: 'ProjectHourlyRatesProjectSpecificRates_search', method: 'GET', path: '/project/hourlyRates/projectSpecificRates' },
  ProjectHourlyRatesProjectSpecificRatesList_deleteByIds: { operationId: 'ProjectHourlyRatesProjectSpecificRatesList_deleteByIds', method: 'DELETE', path: '/project/hourlyRates/projectSpecificRates/list' },
  ProjectHourlyRatesProjectSpecificRatesList_postList: { operationId: 'ProjectHourlyRatesProjectSpecificRatesList_postList', method: 'POST', path: '/project/hourlyRates/projectSpecificRates/list' },
  ProjectHourlyRatesProjectSpecificRatesList_putList: { operationId: 'ProjectHourlyRatesProjectSpecificRatesList_putList', method: 'PUT', path: '/project/hourlyRates/projectSpecificRates/list' },
  ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRates: { operationId: 'ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRates', method: 'PUT', path: '/project/hourlyRates/updateOrAddHourRates' },
  ProjectImport_importProjectStatement: { operationId: 'ProjectImport_importProjectStatement', method: 'POST', path: '/project/import' },
  ProjectList_deleteByIds: { operationId: 'ProjectList_deleteByIds', method: 'DELETE', path: '/project/list' },
  ProjectList_postList: { operationId: 'ProjectList_postList', method: 'POST', path: '/project/list' },
  ProjectList_putList: { operationId: 'ProjectList_putList', method: 'PUT', path: '/project/list' },
  ProjectNumber_getByNumber: { operationId: 'ProjectNumber_getByNumber', method: 'GET', path: '/project/number/{number}' },
  ProjectOrderline_delete: { operationId: 'ProjectOrderline_delete', method: 'DELETE', path: '/project/orderline/{id}' },
  ProjectOrderline_get: { operationId: 'ProjectOrderline_get', method: 'GET', path: '/project/orderline/{id}' },
  ProjectOrderline_post: { operationId: 'ProjectOrderline_post', method: 'POST', path: '/project/orderline' },
  ProjectOrderline_put: { operationId: 'ProjectOrderline_put', method: 'PUT', path: '/project/orderline/{id}' },
  ProjectOrderline_search: { operationId: 'ProjectOrderline_search', method: 'GET', path: '/project/orderline' },
  ProjectOrderlineList_postList: { operationId: 'ProjectOrderlineList_postList', method: 'POST', path: '/project/orderline/list' },
  ProjectOrderlineOrderLineTemplate_orderLineTemplate: { operationId: 'ProjectOrderlineOrderLineTemplate_orderLineTemplate', method: 'GET', path: '/project/orderline/orderLineTemplate' },
  ProjectOrderlineQuery_query: { operationId: 'ProjectOrderlineQuery_query', method: 'GET', path: '/project/orderline/query' },
  ProjectParticipant_get: { operationId: 'ProjectParticipant_get', method: 'GET', path: '/project/participant/{id}' },
  ProjectParticipant_post: { operationId: 'ProjectParticipant_post', method: 'POST', path: '/project/participant' },
  ProjectParticipant_put: { operationId: 'ProjectParticipant_put', method: 'PUT', path: '/project/participant/{id}' },
  ProjectParticipantList_deleteByIds: { operationId: 'ProjectParticipantList_deleteByIds', method: 'DELETE', path: '/project/participant/list' },
  ProjectParticipantList_postList: { operationId: 'ProjectParticipantList_postList', method: 'POST', path: '/project/participant/list' },
  ProjectPeriodBudgetStatus_getBudgetStatus: { operationId: 'ProjectPeriodBudgetStatus_getBudgetStatus', method: 'GET', path: '/project/{id}/period/budgetStatus' },
  ProjectPeriodHourlistReport_hourlistReport: { operationId: 'ProjectPeriodHourlistReport_hourlistReport', method: 'GET', path: '/project/{id}/period/hourlistReport' },
  ProjectPeriodInvoiced_invoiced: { operationId: 'ProjectPeriodInvoiced_invoiced', method: 'GET', path: '/project/{id}/period/invoiced' },
  ProjectPeriodInvoicingReserve_invoicingReserve: { operationId: 'ProjectPeriodInvoicingReserve_invoicingReserve', method: 'GET', path: '/project/{id}/period/invoicingReserve' },
  ProjectPeriodMonthlyStatus_monthlyStatus: { operationId: 'ProjectPeriodMonthlyStatus_monthlyStatus', method: 'GET', path: '/project/{id}/period/monthlyStatus' },
  ProjectPeriodOverallStatus_overallStatus: { operationId: 'ProjectPeriodOverallStatus_overallStatus', method: 'GET', path: '/project/{id}/period/overallStatus' },
  ProjectProjectActivity_delete: { operationId: 'ProjectProjectActivity_delete', method: 'DELETE', path: '/project/projectActivity/{id}' },
  ProjectProjectActivity_get: { operationId: 'ProjectProjectActivity_get', method: 'GET', path: '/project/projectActivity/{id}' },
  ProjectProjectActivity_post: { operationId: 'ProjectProjectActivity_post', method: 'POST', path: '/project/projectActivity' },
  ProjectProjectActivityList_deleteByIds: { operationId: 'ProjectProjectActivityList_deleteByIds', method: 'DELETE', path: '/project/projectActivity/list' },
  ProjectResourcePlanBudget_get: { operationId: 'ProjectResourcePlanBudget_get', method: 'GET', path: '/project/resourcePlanBudget' },
  ProjectSettings_get: { operationId: 'ProjectSettings_get', method: 'GET', path: '/project/settings' },
  ProjectSettings_put: { operationId: 'ProjectSettings_put', method: 'PUT', path: '/project/settings' },
  ProjectSubcontract_delete: { operationId: 'ProjectSubcontract_delete', method: 'DELETE', path: '/project/subcontract/{id}' },
  ProjectSubcontract_get: { operationId: 'ProjectSubcontract_get', method: 'GET', path: '/project/subcontract/{id}' },
  ProjectSubcontract_post: { operationId: 'ProjectSubcontract_post', method: 'POST', path: '/project/subcontract' },
  ProjectSubcontract_put: { operationId: 'ProjectSubcontract_put', method: 'PUT', path: '/project/subcontract/{id}' },
  ProjectSubcontract_search: { operationId: 'ProjectSubcontract_search', method: 'GET', path: '/project/subcontract' },
  ProjectSubcontractQuery_query: { operationId: 'ProjectSubcontractQuery_query', method: 'GET', path: '/project/subcontract/query' },
  ProjectTask_search: { operationId: 'ProjectTask_search', method: 'GET', path: '/project/task' },
  ProjectTemplate_get: { operationId: 'ProjectTemplate_get', method: 'GET', path: '/project/template/{id}' },
  PurchaseOrder_delete: { operationId: 'PurchaseOrder_delete', method: 'DELETE', path: '/purchaseOrder/{id}' },
  PurchaseOrder_get: { operationId: 'PurchaseOrder_get', method: 'GET', path: '/purchaseOrder/{id}' },
  PurchaseOrder_post: { operationId: 'PurchaseOrder_post', method: 'POST', path: '/purchaseOrder' },
  PurchaseOrder_put: { operationId: 'PurchaseOrder_put', method: 'PUT', path: '/purchaseOrder/{id}' },
  PurchaseOrder_search: { operationId: 'PurchaseOrder_search', method: 'GET', path: '/purchaseOrder' },
  PurchaseOrderAttachment_deleteAttachment: { operationId: 'PurchaseOrderAttachment_deleteAttachment', method: 'DELETE', path: '/purchaseOrder/{id}/attachment' },
  PurchaseOrderAttachment_uploadAttachment: { operationId: 'PurchaseOrderAttachment_uploadAttachment', method: 'POST', path: '/purchaseOrder/{id}/attachment' },
  PurchaseOrderAttachmentList_uploadAttachments: { operationId: 'PurchaseOrderAttachmentList_uploadAttachments', method: 'POST', path: '/purchaseOrder/{id}/attachment/list' },
  PurchaseOrderDeviation_delete: { operationId: 'PurchaseOrderDeviation_delete', method: 'DELETE', path: '/purchaseOrder/deviation/{id}' },
  PurchaseOrderDeviation_get: { operationId: 'PurchaseOrderDeviation_get', method: 'GET', path: '/purchaseOrder/deviation/{id}' },
  PurchaseOrderDeviation_post: { operationId: 'PurchaseOrderDeviation_post', method: 'POST', path: '/purchaseOrder/deviation' },
  PurchaseOrderDeviation_put: { operationId: 'PurchaseOrderDeviation_put', method: 'PUT', path: '/purchaseOrder/deviation/{id}' },
  PurchaseOrderDeviation_search: { operationId: 'PurchaseOrderDeviation_search', method: 'GET', path: '/purchaseOrder/deviation' },
  PurchaseOrderDeviationApprove_approve: { operationId: 'PurchaseOrderDeviationApprove_approve', method: 'PUT', path: '/purchaseOrder/deviation/{id}/:approve' },
  PurchaseOrderDeviationDeliver_deliver: { operationId: 'PurchaseOrderDeviationDeliver_deliver', method: 'PUT', path: '/purchaseOrder/deviation/{id}/:deliver' },
  PurchaseOrderDeviationList_postList: { operationId: 'PurchaseOrderDeviationList_postList', method: 'POST', path: '/purchaseOrder/deviation/list' },
  PurchaseOrderDeviationList_putList: { operationId: 'PurchaseOrderDeviationList_putList', method: 'PUT', path: '/purchaseOrder/deviation/list' },
  PurchaseOrderDeviationUndeliver_undeliver: { operationId: 'PurchaseOrderDeviationUndeliver_undeliver', method: 'PUT', path: '/purchaseOrder/deviation/{id}/:undeliver' },
  PurchaseOrderGoodsReceipt_delete: { operationId: 'PurchaseOrderGoodsReceipt_delete', method: 'DELETE', path: '/purchaseOrder/goodsReceipt/{id}' },
  PurchaseOrderGoodsReceipt_get: { operationId: 'PurchaseOrderGoodsReceipt_get', method: 'GET', path: '/purchaseOrder/goodsReceipt/{id}' },
  PurchaseOrderGoodsReceipt_post: { operationId: 'PurchaseOrderGoodsReceipt_post', method: 'POST', path: '/purchaseOrder/goodsReceipt' },
  PurchaseOrderGoodsReceipt_put: { operationId: 'PurchaseOrderGoodsReceipt_put', method: 'PUT', path: '/purchaseOrder/goodsReceipt/{id}' },
  PurchaseOrderGoodsReceipt_search: { operationId: 'PurchaseOrderGoodsReceipt_search', method: 'GET', path: '/purchaseOrder/goodsReceipt' },
  PurchaseOrderGoodsReceiptConfirm_confirm: { operationId: 'PurchaseOrderGoodsReceiptConfirm_confirm', method: 'PUT', path: '/purchaseOrder/goodsReceipt/{id}/:confirm' },
  PurchaseOrderGoodsReceiptLine_delete: { operationId: 'PurchaseOrderGoodsReceiptLine_delete', method: 'DELETE', path: '/purchaseOrder/goodsReceiptLine/{id}' },
  PurchaseOrderGoodsReceiptLine_get: { operationId: 'PurchaseOrderGoodsReceiptLine_get', method: 'GET', path: '/purchaseOrder/goodsReceiptLine/{id}' },
  PurchaseOrderGoodsReceiptLine_post: { operationId: 'PurchaseOrderGoodsReceiptLine_post', method: 'POST', path: '/purchaseOrder/goodsReceiptLine' },
  PurchaseOrderGoodsReceiptLine_put: { operationId: 'PurchaseOrderGoodsReceiptLine_put', method: 'PUT', path: '/purchaseOrder/goodsReceiptLine/{id}' },
  PurchaseOrderGoodsReceiptLine_search: { operationId: 'PurchaseOrderGoodsReceiptLine_search', method: 'GET', path: '/purchaseOrder/goodsReceiptLine' },
  PurchaseOrderGoodsReceiptLineList_deleteList: { operationId: 'PurchaseOrderGoodsReceiptLineList_deleteList', method: 'DELETE', path: '/purchaseOrder/goodsReceiptLine/list' },
  PurchaseOrderGoodsReceiptLineList_postList: { operationId: 'PurchaseOrderGoodsReceiptLineList_postList', method: 'POST', path: '/purchaseOrder/goodsReceiptLine/list' },
  PurchaseOrderGoodsReceiptLineList_putList: { operationId: 'PurchaseOrderGoodsReceiptLineList_putList', method: 'PUT', path: '/purchaseOrder/goodsReceiptLine/list' },
  PurchaseOrderGoodsReceiptList_deleteByIds: { operationId: 'PurchaseOrderGoodsReceiptList_deleteByIds', method: 'DELETE', path: '/purchaseOrder/goodsReceipt/list' },
  PurchaseOrderGoodsReceiptList_postList: { operationId: 'PurchaseOrderGoodsReceiptList_postList', method: 'POST', path: '/purchaseOrder/goodsReceipt/list' },
  PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirm: { operationId: 'PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirm', method: 'PUT', path: '/purchaseOrder/goodsReceipt/{id}/:receiveAndConfirm' },
  PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceipt: { operationId: 'PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceipt', method: 'PUT', path: '/purchaseOrder/goodsReceipt/{id}/:registerGoodsReceipt' },
  PurchaseOrderOrderline_delete: { operationId: 'PurchaseOrderOrderline_delete', method: 'DELETE', path: '/purchaseOrder/orderline/{id}' },
  PurchaseOrderOrderline_get: { operationId: 'PurchaseOrderOrderline_get', method: 'GET', path: '/purchaseOrder/orderline/{id}' },
  PurchaseOrderOrderline_post: { operationId: 'PurchaseOrderOrderline_post', method: 'POST', path: '/purchaseOrder/orderline' },
  PurchaseOrderOrderline_put: { operationId: 'PurchaseOrderOrderline_put', method: 'PUT', path: '/purchaseOrder/orderline/{id}' },
  PurchaseOrderOrderlineList_deleteList: { operationId: 'PurchaseOrderOrderlineList_deleteList', method: 'DELETE', path: '/purchaseOrder/orderline/list' },
  PurchaseOrderOrderlineList_postList: { operationId: 'PurchaseOrderOrderlineList_postList', method: 'POST', path: '/purchaseOrder/orderline/list' },
  PurchaseOrderOrderlineList_putList: { operationId: 'PurchaseOrderOrderlineList_putList', method: 'PUT', path: '/purchaseOrder/orderline/list' },
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_delete: { operationId: 'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_delete', method: 'DELETE', path: '/purchaseOrder/purchaseOrderIncomingInvoiceRelation/{id}' },
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_get: { operationId: 'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_get', method: 'GET', path: '/purchaseOrder/purchaseOrderIncomingInvoiceRelation/{id}' },
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_post: { operationId: 'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_post', method: 'POST', path: '/purchaseOrder/purchaseOrderIncomingInvoiceRelation' },
  PurchaseOrderPurchaseOrderIncomingInvoiceRelation_search: { operationId: 'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_search', method: 'GET', path: '/purchaseOrder/purchaseOrderIncomingInvoiceRelation' },
  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIds: { operationId: 'PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIds', method: 'DELETE', path: '/purchaseOrder/purchaseOrderIncomingInvoiceRelation/list' },
  PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postList: { operationId: 'PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postList', method: 'POST', path: '/purchaseOrder/purchaseOrderIncomingInvoiceRelation/list' },
  PurchaseOrderSend_send: { operationId: 'PurchaseOrderSend_send', method: 'PUT', path: '/purchaseOrder/{id}/:send' },
  PurchaseOrderSendByEmail_sendByEmail: { operationId: 'PurchaseOrderSendByEmail_sendByEmail', method: 'PUT', path: '/purchaseOrder/{id}/:sendByEmail' },
  Reminder_get: { operationId: 'Reminder_get', method: 'GET', path: '/reminder/{id}' },
  Reminder_search: { operationId: 'Reminder_search', method: 'GET', path: '/reminder' },
  ReminderPdf_downloadPdf: { operationId: 'ReminderPdf_downloadPdf', method: 'GET', path: '/reminder/{reminderId}/pdf' },
  Resultbudget_search: { operationId: 'Resultbudget_search', method: 'GET', path: '/resultbudget' },
  ResultbudgetCompany_getCompanyResultBudget: { operationId: 'ResultbudgetCompany_getCompanyResultBudget', method: 'GET', path: '/resultbudget/company' },
  ResultbudgetDepartment_getDepartmentResultBudget: { operationId: 'ResultbudgetDepartment_getDepartmentResultBudget', method: 'GET', path: '/resultbudget/department/{id}' },
  ResultbudgetEmployee_getEmployeeResultBudget: { operationId: 'ResultbudgetEmployee_getEmployeeResultBudget', method: 'GET', path: '/resultbudget/employee/{id}' },
  ResultbudgetProduct_getProductResultBudget: { operationId: 'ResultbudgetProduct_getProductResultBudget', method: 'GET', path: '/resultbudget/product/{id}' },
  ResultbudgetProject_getProjectResultBudget: { operationId: 'ResultbudgetProject_getProjectResultBudget', method: 'GET', path: '/resultbudget/project/{id}' },
  SaftExportSAFT_exportSAFT: { operationId: 'SaftExportSAFT_exportSAFT', method: 'GET', path: '/saft/exportSAFT' },
  SaftImportSAFT_importSAFT: { operationId: 'SaftImportSAFT_importSAFT', method: 'POST', path: '/saft/importSAFT' },
  SalaryCompilation_get: { operationId: 'SalaryCompilation_get', method: 'GET', path: '/salary/compilation' },
  SalaryCompilationPdf_downloadPdf: { operationId: 'SalaryCompilationPdf_downloadPdf', method: 'GET', path: '/salary/compilation/pdf' },
  SalaryFinanceTaxReconciliationContext_postContext: { operationId: 'SalaryFinanceTaxReconciliationContext_postContext', method: 'POST', path: '/salary/financeTax/reconciliation/context' },
  SalaryFinanceTaxReconciliationOverview_getOverview: { operationId: 'SalaryFinanceTaxReconciliationOverview_getOverview', method: 'GET', path: '/salary/financeTax/reconciliation/{reconciliationId}/overview' },
  SalaryFinanceTaxReconciliationPaymentsOverview_getPayments: { operationId: 'SalaryFinanceTaxReconciliationPaymentsOverview_getPayments', method: 'GET', path: '/salary/financeTax/reconciliation/{reconciliationId}/paymentsOverview' },
  SalaryHolidayAllowanceReconciliationContext_postContext: { operationId: 'SalaryHolidayAllowanceReconciliationContext_postContext', method: 'POST', path: '/salary/holidayAllowance/reconciliation/context' },
  SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetails: { operationId: 'SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetails', method: 'GET', path: '/salary/holidayAllowance/reconciliation/{reconciliationId}/holidayAllowanceDetails' },
  SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummary: { operationId: 'SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummary', method: 'GET', path: '/salary/holidayAllowance/reconciliation/{reconciliationId}/holidayAllowanceSummary' },
  SalaryMandatoryDeductionReconciliationContext_postContext: { operationId: 'SalaryMandatoryDeductionReconciliationContext_postContext', method: 'POST', path: '/salary/mandatoryDeduction/reconciliation/context' },
  SalaryMandatoryDeductionReconciliationOverview_getOverview: { operationId: 'SalaryMandatoryDeductionReconciliationOverview_getOverview', method: 'GET', path: '/salary/mandatoryDeduction/reconciliation/{reconciliationId}/overview' },
  SalaryMandatoryDeductionReconciliationPaymentsOverview_getPayments: { operationId: 'SalaryMandatoryDeductionReconciliationPaymentsOverview_getPayments', method: 'GET', path: '/salary/mandatoryDeduction/reconciliation/{reconciliationId}/paymentsOverview' },
  SalaryPayrollTaxReconciliationContext_postContext: { operationId: 'SalaryPayrollTaxReconciliationContext_postContext', method: 'POST', path: '/salary/payrollTax/reconciliation/context' },
  SalaryPayrollTaxReconciliationOverview_getOverview: { operationId: 'SalaryPayrollTaxReconciliationOverview_getOverview', method: 'GET', path: '/salary/payrollTax/reconciliation/{reconciliationId}/overview' },
  SalaryPayrollTaxReconciliationPaymentsOverview_getPayments: { operationId: 'SalaryPayrollTaxReconciliationPaymentsOverview_getPayments', method: 'GET', path: '/salary/payrollTax/reconciliation/{reconciliationId}/paymentsOverview' },
  SalaryPayslip_get: { operationId: 'SalaryPayslip_get', method: 'GET', path: '/salary/payslip/{id}' },
  SalaryPayslip_search: { operationId: 'SalaryPayslip_search', method: 'GET', path: '/salary/payslip' },
  SalaryPayslipPdf_downloadPdf: { operationId: 'SalaryPayslipPdf_downloadPdf', method: 'GET', path: '/salary/payslip/{id}/pdf' },
  SalarySettings_get: { operationId: 'SalarySettings_get', method: 'GET', path: '/salary/settings' },
  SalarySettings_put: { operationId: 'SalarySettings_put', method: 'PUT', path: '/salary/settings' },
  SalarySettingsHoliday_post: { operationId: 'SalarySettingsHoliday_post', method: 'POST', path: '/salary/settings/holiday' },
  SalarySettingsHoliday_put: { operationId: 'SalarySettingsHoliday_put', method: 'PUT', path: '/salary/settings/holiday/{id}' },
  SalarySettingsHoliday_search: { operationId: 'SalarySettingsHoliday_search', method: 'GET', path: '/salary/settings/holiday' },
  SalarySettingsHolidayList_deleteByIds: { operationId: 'SalarySettingsHolidayList_deleteByIds', method: 'DELETE', path: '/salary/settings/holiday/list' },
  SalarySettingsHolidayList_postList: { operationId: 'SalarySettingsHolidayList_postList', method: 'POST', path: '/salary/settings/holiday/list' },
  SalarySettingsHolidayList_putList: { operationId: 'SalarySettingsHolidayList_putList', method: 'PUT', path: '/salary/settings/holiday/list' },
  SalarySettingsPensionScheme_delete: { operationId: 'SalarySettingsPensionScheme_delete', method: 'DELETE', path: '/salary/settings/pensionScheme/{id}' },
  SalarySettingsPensionScheme_get: { operationId: 'SalarySettingsPensionScheme_get', method: 'GET', path: '/salary/settings/pensionScheme/{id}' },
  SalarySettingsPensionScheme_post: { operationId: 'SalarySettingsPensionScheme_post', method: 'POST', path: '/salary/settings/pensionScheme' },
  SalarySettingsPensionScheme_put: { operationId: 'SalarySettingsPensionScheme_put', method: 'PUT', path: '/salary/settings/pensionScheme/{id}' },
  SalarySettingsPensionScheme_search: { operationId: 'SalarySettingsPensionScheme_search', method: 'GET', path: '/salary/settings/pensionScheme' },
  SalarySettingsPensionSchemeList_deleteByIds: { operationId: 'SalarySettingsPensionSchemeList_deleteByIds', method: 'DELETE', path: '/salary/settings/pensionScheme/list' },
  SalarySettingsPensionSchemeList_postList: { operationId: 'SalarySettingsPensionSchemeList_postList', method: 'POST', path: '/salary/settings/pensionScheme/list' },
  SalarySettingsPensionSchemeList_putList: { operationId: 'SalarySettingsPensionSchemeList_putList', method: 'PUT', path: '/salary/settings/pensionScheme/list' },
  SalarySettingsStandardTime_get: { operationId: 'SalarySettingsStandardTime_get', method: 'GET', path: '/salary/settings/standardTime/{id}' },
  SalarySettingsStandardTime_post: { operationId: 'SalarySettingsStandardTime_post', method: 'POST', path: '/salary/settings/standardTime' },
  SalarySettingsStandardTime_put: { operationId: 'SalarySettingsStandardTime_put', method: 'PUT', path: '/salary/settings/standardTime/{id}' },
  SalarySettingsStandardTime_search: { operationId: 'SalarySettingsStandardTime_search', method: 'GET', path: '/salary/settings/standardTime' },
  SalarySettingsStandardTimeByDate_getByDate: { operationId: 'SalarySettingsStandardTimeByDate_getByDate', method: 'GET', path: '/salary/settings/standardTime/byDate' },
  SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetails: { operationId: 'SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetails', method: 'GET', path: '/salary/taxDeduction/reconciliation/{reconciliationId}/balanceAndOwedAmount' },
  SalaryTaxDeductionReconciliationContext_postContext: { operationId: 'SalaryTaxDeductionReconciliationContext_postContext', method: 'POST', path: '/salary/taxDeduction/reconciliation/context' },
  SalaryTaxDeductionReconciliationOverview_getOverview: { operationId: 'SalaryTaxDeductionReconciliationOverview_getOverview', method: 'GET', path: '/salary/taxDeduction/reconciliation/{reconciliationId}/overview' },
  SalaryTaxDeductionReconciliationPaymentsOverview_getPayments: { operationId: 'SalaryTaxDeductionReconciliationPaymentsOverview_getPayments', method: 'GET', path: '/salary/taxDeduction/reconciliation/{reconciliationId}/paymentsOverview' },
  SalaryTransaction_delete: { operationId: 'SalaryTransaction_delete', method: 'DELETE', path: '/salary/transaction/{id}' },
  SalaryTransaction_get: { operationId: 'SalaryTransaction_get', method: 'GET', path: '/salary/transaction/{id}' },
  SalaryTransaction_post: { operationId: 'SalaryTransaction_post', method: 'POST', path: '/salary/transaction' },
  SalaryTransactionAttachment_uploadAttachment: { operationId: 'SalaryTransactionAttachment_uploadAttachment', method: 'POST', path: '/salary/transaction/{id}/attachment' },
  SalaryTransactionAttachmentList_uploadAttachments: { operationId: 'SalaryTransactionAttachmentList_uploadAttachments', method: 'POST', path: '/salary/transaction/{id}/attachment/list' },
  SalaryTransactionDeleteAttachment_deleteAttachment: { operationId: 'SalaryTransactionDeleteAttachment_deleteAttachment', method: 'PUT', path: '/salary/transaction/{id}/deleteAttachment' },
  SalaryType_get: { operationId: 'SalaryType_get', method: 'GET', path: '/salary/type/{id}' },
  SalaryType_search: { operationId: 'SalaryType_search', method: 'GET', path: '/salary/type' },
  SubscriptionCancel_cancel: { operationId: 'SubscriptionCancel_cancel', method: 'PUT', path: '/subscription/cancel' },
  SubscriptionPackages_getPackages: { operationId: 'SubscriptionPackages_getPackages', method: 'GET', path: '/subscription/packages' },
  SubscriptionReactivate_reactivate: { operationId: 'SubscriptionReactivate_reactivate', method: 'PUT', path: '/subscription/reactivate' },
  Supplier_delete: { operationId: 'Supplier_delete', method: 'DELETE', path: '/supplier/{id}' },
  Supplier_get: { operationId: 'Supplier_get', method: 'GET', path: '/supplier/{id}' },
  Supplier_post: { operationId: 'Supplier_post', method: 'POST', path: '/supplier' },
  Supplier_put: { operationId: 'Supplier_put', method: 'PUT', path: '/supplier/{id}' },
  Supplier_search: { operationId: 'Supplier_search', method: 'GET', path: '/supplier' },
  SupplierCustomerSearch_search: { operationId: 'SupplierCustomerSearch_search', method: 'GET', path: '/supplierCustomer/search' },
  SupplierInvoice_get: { operationId: 'SupplierInvoice_get', method: 'GET', path: '/supplierInvoice/{id}' },
  SupplierInvoice_search: { operationId: 'SupplierInvoice_search', method: 'GET', path: '/supplierInvoice' },
  SupplierInvoiceAddPayment_addPayment: { operationId: 'SupplierInvoiceAddPayment_addPayment', method: 'POST', path: '/supplierInvoice/{invoiceId}/:addPayment' },
  SupplierInvoiceAddRecipient_addRecipient: { operationId: 'SupplierInvoiceAddRecipient_addRecipient', method: 'PUT', path: '/supplierInvoice/{invoiceId}/:addRecipient' },
  SupplierInvoiceAddRecipient_addRecipientToMany: { operationId: 'SupplierInvoiceAddRecipient_addRecipientToMany', method: 'PUT', path: '/supplierInvoice/:addRecipient' },
  SupplierInvoiceApprove_approve: { operationId: 'SupplierInvoiceApprove_approve', method: 'PUT', path: '/supplierInvoice/{invoiceId}/:approve' },
  SupplierInvoiceApprove_approveMany: { operationId: 'SupplierInvoiceApprove_approveMany', method: 'PUT', path: '/supplierInvoice/:approve' },
  SupplierInvoiceChangeDimension_changeDimensionMany: { operationId: 'SupplierInvoiceChangeDimension_changeDimensionMany', method: 'PUT', path: '/supplierInvoice/{invoiceId}/:changeDimension' },
  SupplierInvoiceForApproval_getApprovalInvoices: { operationId: 'SupplierInvoiceForApproval_getApprovalInvoices', method: 'GET', path: '/supplierInvoice/forApproval' },
  SupplierInvoicePdf_downloadPdf: { operationId: 'SupplierInvoicePdf_downloadPdf', method: 'GET', path: '/supplierInvoice/{invoiceId}/pdf' },
  SupplierInvoiceReject_reject: { operationId: 'SupplierInvoiceReject_reject', method: 'PUT', path: '/supplierInvoice/{invoiceId}/:reject' },
  SupplierInvoiceReject_rejectMany: { operationId: 'SupplierInvoiceReject_rejectMany', method: 'PUT', path: '/supplierInvoice/:reject' },
  SupplierInvoiceVoucherPostings_putPostings: { operationId: 'SupplierInvoiceVoucherPostings_putPostings', method: 'PUT', path: '/supplierInvoice/voucher/{id}/postings' },
  SupplierList_postList: { operationId: 'SupplierList_postList', method: 'POST', path: '/supplier/list' },
  SupplierList_putList: { operationId: 'SupplierList_putList', method: 'PUT', path: '/supplier/list' },
  SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomers: { operationId: 'SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomers', method: 'GET', path: '/supportDashboard/bankruptAndExcludedCustomers' },
  SupportDashboardExport_export: { operationId: 'SupportDashboardExport_export', method: 'GET', path: '/supportDashboard/export' },
  TimesheetAllocated_delete: { operationId: 'TimesheetAllocated_delete', method: 'DELETE', path: '/timesheet/allocated/{id}' },
  TimesheetAllocated_get: { operationId: 'TimesheetAllocated_get', method: 'GET', path: '/timesheet/allocated/{id}' },
  TimesheetAllocated_post: { operationId: 'TimesheetAllocated_post', method: 'POST', path: '/timesheet/allocated' },
  TimesheetAllocated_put: { operationId: 'TimesheetAllocated_put', method: 'PUT', path: '/timesheet/allocated/{id}' },
  TimesheetAllocated_search: { operationId: 'TimesheetAllocated_search', method: 'GET', path: '/timesheet/allocated' },
  TimesheetAllocatedApprove_approve: { operationId: 'TimesheetAllocatedApprove_approve', method: 'PUT', path: '/timesheet/allocated/{id}/:approve' },
  TimesheetAllocatedApproveList_approveList: { operationId: 'TimesheetAllocatedApproveList_approveList', method: 'PUT', path: '/timesheet/allocated/:approveList' },
  TimesheetAllocatedList_postList: { operationId: 'TimesheetAllocatedList_postList', method: 'POST', path: '/timesheet/allocated/list' },
  TimesheetAllocatedList_putList: { operationId: 'TimesheetAllocatedList_putList', method: 'PUT', path: '/timesheet/allocated/list' },
  TimesheetAllocatedUnapprove_unapprove: { operationId: 'TimesheetAllocatedUnapprove_unapprove', method: 'PUT', path: '/timesheet/allocated/{id}/:unapprove' },
  TimesheetAllocatedUnapproveList_unapproveList: { operationId: 'TimesheetAllocatedUnapproveList_unapproveList', method: 'PUT', path: '/timesheet/allocated/:unapproveList' },
  TimesheetCompanyHoliday_delete: { operationId: 'TimesheetCompanyHoliday_delete', method: 'DELETE', path: '/timesheet/companyHoliday/{id}' },
  TimesheetCompanyHoliday_get: { operationId: 'TimesheetCompanyHoliday_get', method: 'GET', path: '/timesheet/companyHoliday/{id}' },
  TimesheetCompanyHoliday_post: { operationId: 'TimesheetCompanyHoliday_post', method: 'POST', path: '/timesheet/companyHoliday' },
  TimesheetCompanyHoliday_put: { operationId: 'TimesheetCompanyHoliday_put', method: 'PUT', path: '/timesheet/companyHoliday/{id}' },
  TimesheetCompanyHoliday_search: { operationId: 'TimesheetCompanyHoliday_search', method: 'GET', path: '/timesheet/companyHoliday' },
  TimesheetEntry_delete: { operationId: 'TimesheetEntry_delete', method: 'DELETE', path: '/timesheet/entry/{id}' },
  TimesheetEntry_get: { operationId: 'TimesheetEntry_get', method: 'GET', path: '/timesheet/entry/{id}' },
  TimesheetEntry_post: { operationId: 'TimesheetEntry_post', method: 'POST', path: '/timesheet/entry' },
  TimesheetEntry_put: { operationId: 'TimesheetEntry_put', method: 'PUT', path: '/timesheet/entry/{id}' },
  TimesheetEntry_search: { operationId: 'TimesheetEntry_search', method: 'GET', path: '/timesheet/entry' },
  TimesheetEntryList_postList: { operationId: 'TimesheetEntryList_postList', method: 'POST', path: '/timesheet/entry/list' },
  TimesheetEntryList_putList: { operationId: 'TimesheetEntryList_putList', method: 'PUT', path: '/timesheet/entry/list' },
  TimesheetEntryRecentActivities_getRecentActivities: { operationId: 'TimesheetEntryRecentActivities_getRecentActivities', method: 'GET', path: '/timesheet/entry/>recentActivities' },
  TimesheetEntryRecentProjects_getRecentProjects: { operationId: 'TimesheetEntryRecentProjects_getRecentProjects', method: 'GET', path: '/timesheet/entry/>recentProjects' },
  TimesheetEntryTotalHours_getTotalHours: { operationId: 'TimesheetEntryTotalHours_getTotalHours', method: 'GET', path: '/timesheet/entry/>totalHours' },
  TimesheetMonth_get: { operationId: 'TimesheetMonth_get', method: 'GET', path: '/timesheet/month/{id}' },
  TimesheetMonthApprove_approve: { operationId: 'TimesheetMonthApprove_approve', method: 'PUT', path: '/timesheet/month/:approve' },
  TimesheetMonthByMonthNumber_getByMonthNumber: { operationId: 'TimesheetMonthByMonthNumber_getByMonthNumber', method: 'GET', path: '/timesheet/month/byMonthNumber' },
  TimesheetMonthByMonthNumberList_getByMonthNumberList: { operationId: 'TimesheetMonthByMonthNumberList_getByMonthNumberList', method: 'GET', path: '/timesheet/month/byMonthNumberList' },
  TimesheetMonthComplete_complete: { operationId: 'TimesheetMonthComplete_complete', method: 'PUT', path: '/timesheet/month/:complete' },
  TimesheetMonthReopen_reopen: { operationId: 'TimesheetMonthReopen_reopen', method: 'PUT', path: '/timesheet/month/:reopen' },
  TimesheetMonthUnapprove_unapprove: { operationId: 'TimesheetMonthUnapprove_unapprove', method: 'PUT', path: '/timesheet/month/:unapprove' },
  TimesheetSalaryProjectTypeSpecification_delete: { operationId: 'TimesheetSalaryProjectTypeSpecification_delete', method: 'DELETE', path: '/timesheet/salaryProjectTypeSpecification/{id}' },
  TimesheetSalaryProjectTypeSpecification_get: { operationId: 'TimesheetSalaryProjectTypeSpecification_get', method: 'GET', path: '/timesheet/salaryProjectTypeSpecification/{id}' },
  TimesheetSalaryProjectTypeSpecification_post: { operationId: 'TimesheetSalaryProjectTypeSpecification_post', method: 'POST', path: '/timesheet/salaryProjectTypeSpecification' },
  TimesheetSalaryProjectTypeSpecification_put: { operationId: 'TimesheetSalaryProjectTypeSpecification_put', method: 'PUT', path: '/timesheet/salaryProjectTypeSpecification/{id}' },
  TimesheetSalaryProjectTypeSpecification_search: { operationId: 'TimesheetSalaryProjectTypeSpecification_search', method: 'GET', path: '/timesheet/salaryProjectTypeSpecification' },
  TimesheetSalaryTypeSpecification_delete: { operationId: 'TimesheetSalaryTypeSpecification_delete', method: 'DELETE', path: '/timesheet/salaryTypeSpecification/{id}' },
  TimesheetSalaryTypeSpecification_get: { operationId: 'TimesheetSalaryTypeSpecification_get', method: 'GET', path: '/timesheet/salaryTypeSpecification/{id}' },
  TimesheetSalaryTypeSpecification_post: { operationId: 'TimesheetSalaryTypeSpecification_post', method: 'POST', path: '/timesheet/salaryTypeSpecification' },
  TimesheetSalaryTypeSpecification_put: { operationId: 'TimesheetSalaryTypeSpecification_put', method: 'PUT', path: '/timesheet/salaryTypeSpecification/{id}' },
  TimesheetSalaryTypeSpecification_search: { operationId: 'TimesheetSalaryTypeSpecification_search', method: 'GET', path: '/timesheet/salaryTypeSpecification' },
  TimesheetSettings_get: { operationId: 'TimesheetSettings_get', method: 'GET', path: '/timesheet/settings' },
  TimesheetTimeClock_get: { operationId: 'TimesheetTimeClock_get', method: 'GET', path: '/timesheet/timeClock/{id}' },
  TimesheetTimeClock_put: { operationId: 'TimesheetTimeClock_put', method: 'PUT', path: '/timesheet/timeClock/{id}' },
  TimesheetTimeClock_search: { operationId: 'TimesheetTimeClock_search', method: 'GET', path: '/timesheet/timeClock' },
  TimesheetTimeClockPresent_getPresent: { operationId: 'TimesheetTimeClockPresent_getPresent', method: 'GET', path: '/timesheet/timeClock/present' },
  TimesheetTimeClockStart_start: { operationId: 'TimesheetTimeClockStart_start', method: 'PUT', path: '/timesheet/timeClock/:start' },
  TimesheetTimeClockStop_stop: { operationId: 'TimesheetTimeClockStop_stop', method: 'PUT', path: '/timesheet/timeClock/{id}/:stop' },
  TimesheetWeek_search: { operationId: 'TimesheetWeek_search', method: 'GET', path: '/timesheet/week' },
  TimesheetWeekApprove_approve: { operationId: 'TimesheetWeekApprove_approve', method: 'PUT', path: '/timesheet/week/:approve' },
  TimesheetWeekComplete_complete: { operationId: 'TimesheetWeekComplete_complete', method: 'PUT', path: '/timesheet/week/:complete' },
  TimesheetWeekReopen_reopen: { operationId: 'TimesheetWeekReopen_reopen', method: 'PUT', path: '/timesheet/week/:reopen' },
  TimesheetWeekUnapprove_unapprove: { operationId: 'TimesheetWeekUnapprove_unapprove', method: 'PUT', path: '/timesheet/week/:unapprove' },
  TokenConsumerByToken_getByToken: { operationId: 'TokenConsumerByToken_getByToken', method: 'GET', path: '/token/consumer/byToken' },
  TokenEmployeeCreate_create: { operationId: 'TokenEmployeeCreate_create', method: 'PUT', path: '/token/employee/:create' },
  TokenSession_delete: { operationId: 'TokenSession_delete', method: 'DELETE', path: '/token/session/{token}' },
  TokenSessionCreate_create: { operationId: 'TokenSessionCreate_create', method: 'PUT', path: '/token/session/:create' },
  TokenSessionCreate_createWithBody: { operationId: 'TokenSessionCreate_createWithBody', method: 'POST', path: '/token/session/:create' },
  TokenSessionWhoAmI_whoAmI: { operationId: 'TokenSessionWhoAmI_whoAmI', method: 'GET', path: '/token/session/>whoAmI' },
  TransportType_get: { operationId: 'TransportType_get', method: 'GET', path: '/transportType/{id}' },
  TransportType_search: { operationId: 'TransportType_search', method: 'GET', path: '/transportType' },
  TravelExpense_delete: { operationId: 'TravelExpense_delete', method: 'DELETE', path: '/travelExpense/{id}' },
  TravelExpense_get: { operationId: 'TravelExpense_get', method: 'GET', path: '/travelExpense/{id}' },
  TravelExpense_post: { operationId: 'TravelExpense_post', method: 'POST', path: '/travelExpense' },
  TravelExpense_put: { operationId: 'TravelExpense_put', method: 'PUT', path: '/travelExpense/{id}' },
  TravelExpense_search: { operationId: 'TravelExpense_search', method: 'GET', path: '/travelExpense' },
  TravelExpenseAccommodationAllowance_delete: { operationId: 'TravelExpenseAccommodationAllowance_delete', method: 'DELETE', path: '/travelExpense/accommodationAllowance/{id}' },
  TravelExpenseAccommodationAllowance_get: { operationId: 'TravelExpenseAccommodationAllowance_get', method: 'GET', path: '/travelExpense/accommodationAllowance/{id}' },
  TravelExpenseAccommodationAllowance_post: { operationId: 'TravelExpenseAccommodationAllowance_post', method: 'POST', path: '/travelExpense/accommodationAllowance' },
  TravelExpenseAccommodationAllowance_put: { operationId: 'TravelExpenseAccommodationAllowance_put', method: 'PUT', path: '/travelExpense/accommodationAllowance/{id}' },
  TravelExpenseAccommodationAllowance_search: { operationId: 'TravelExpenseAccommodationAllowance_search', method: 'GET', path: '/travelExpense/accommodationAllowance' },
  TravelExpenseApprove_approve: { operationId: 'TravelExpenseApprove_approve', method: 'PUT', path: '/travelExpense/:approve' },
  TravelExpenseAttachment_deleteAttachment: { operationId: 'TravelExpenseAttachment_deleteAttachment', method: 'DELETE', path: '/travelExpense/{travelExpenseId}/attachment' },
  TravelExpenseAttachment_downloadAttachment: { operationId: 'TravelExpenseAttachment_downloadAttachment', method: 'GET', path: '/travelExpense/{travelExpenseId}/attachment' },
  TravelExpenseAttachment_uploadAttachment: { operationId: 'TravelExpenseAttachment_uploadAttachment', method: 'POST', path: '/travelExpense/{travelExpenseId}/attachment' },
  TravelExpenseAttachmentList_uploadAttachments: { operationId: 'TravelExpenseAttachmentList_uploadAttachments', method: 'POST', path: '/travelExpense/{travelExpenseId}/attachment/list' },
  TravelExpenseConvert_convert: { operationId: 'TravelExpenseConvert_convert', method: 'PUT', path: '/travelExpense/{id}/convert' },
  TravelExpenseCopy_copy: { operationId: 'TravelExpenseCopy_copy', method: 'PUT', path: '/travelExpense/:copy' },
  TravelExpenseCost_delete: { operationId: 'TravelExpenseCost_delete', method: 'DELETE', path: '/travelExpense/cost/{id}' },
  TravelExpenseCost_get: { operationId: 'TravelExpenseCost_get', method: 'GET', path: '/travelExpense/cost/{id}' },
  TravelExpenseCost_post: { operationId: 'TravelExpenseCost_post', method: 'POST', path: '/travelExpense/cost' },
  TravelExpenseCost_put: { operationId: 'TravelExpenseCost_put', method: 'PUT', path: '/travelExpense/cost/{id}' },
  TravelExpenseCost_search: { operationId: 'TravelExpenseCost_search', method: 'GET', path: '/travelExpense/cost' },
  TravelExpenseCostCategory_get: { operationId: 'TravelExpenseCostCategory_get', method: 'GET', path: '/travelExpense/costCategory/{id}' },
  TravelExpenseCostCategory_search: { operationId: 'TravelExpenseCostCategory_search', method: 'GET', path: '/travelExpense/costCategory' },
  TravelExpenseCostList_putList: { operationId: 'TravelExpenseCostList_putList', method: 'PUT', path: '/travelExpense/cost/list' },
  TravelExpenseCostParticipant_delete: { operationId: 'TravelExpenseCostParticipant_delete', method: 'DELETE', path: '/travelExpense/costParticipant/{id}' },
  TravelExpenseCostParticipant_get: { operationId: 'TravelExpenseCostParticipant_get', method: 'GET', path: '/travelExpense/costParticipant/{id}' },
  TravelExpenseCostParticipant_post: { operationId: 'TravelExpenseCostParticipant_post', method: 'POST', path: '/travelExpense/costParticipant' },
  TravelExpenseCostParticipantCostParticipants_getCostParticipants: { operationId: 'TravelExpenseCostParticipantCostParticipants_getCostParticipants', method: 'GET', path: '/travelExpense/costParticipant/{costId}/costParticipants' },
  TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvanced: { operationId: 'TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvanced', method: 'POST', path: '/travelExpense/costParticipant/createCostParticipantAdvanced' },
  TravelExpenseCostParticipantList_deleteList: { operationId: 'TravelExpenseCostParticipantList_deleteList', method: 'DELETE', path: '/travelExpense/costParticipant/list' },
  TravelExpenseCostParticipantList_postList: { operationId: 'TravelExpenseCostParticipantList_postList', method: 'POST', path: '/travelExpense/costParticipant/list' },
  TravelExpenseCreateVouchers_createVouchers: { operationId: 'TravelExpenseCreateVouchers_createVouchers', method: 'PUT', path: '/travelExpense/:createVouchers' },
  TravelExpenseDeliver_deliver: { operationId: 'TravelExpenseDeliver_deliver', method: 'PUT', path: '/travelExpense/:deliver' },
  TravelExpenseDrivingStop_delete: { operationId: 'TravelExpenseDrivingStop_delete', method: 'DELETE', path: '/travelExpense/drivingStop/{id}' },
  TravelExpenseDrivingStop_get: { operationId: 'TravelExpenseDrivingStop_get', method: 'GET', path: '/travelExpense/drivingStop/{id}' },
  TravelExpenseDrivingStop_post: { operationId: 'TravelExpenseDrivingStop_post', method: 'POST', path: '/travelExpense/drivingStop' },
  TravelExpenseMileageAllowance_delete: { operationId: 'TravelExpenseMileageAllowance_delete', method: 'DELETE', path: '/travelExpense/mileageAllowance/{id}' },
  TravelExpenseMileageAllowance_get: { operationId: 'TravelExpenseMileageAllowance_get', method: 'GET', path: '/travelExpense/mileageAllowance/{id}' },
  TravelExpenseMileageAllowance_post: { operationId: 'TravelExpenseMileageAllowance_post', method: 'POST', path: '/travelExpense/mileageAllowance' },
  TravelExpenseMileageAllowance_put: { operationId: 'TravelExpenseMileageAllowance_put', method: 'PUT', path: '/travelExpense/mileageAllowance/{id}' },
  TravelExpenseMileageAllowance_search: { operationId: 'TravelExpenseMileageAllowance_search', method: 'GET', path: '/travelExpense/mileageAllowance' },
  TravelExpensePassenger_delete: { operationId: 'TravelExpensePassenger_delete', method: 'DELETE', path: '/travelExpense/passenger/{id}' },
  TravelExpensePassenger_get: { operationId: 'TravelExpensePassenger_get', method: 'GET', path: '/travelExpense/passenger/{id}' },
  TravelExpensePassenger_post: { operationId: 'TravelExpensePassenger_post', method: 'POST', path: '/travelExpense/passenger' },
  TravelExpensePassenger_put: { operationId: 'TravelExpensePassenger_put', method: 'PUT', path: '/travelExpense/passenger/{id}' },
  TravelExpensePassenger_search: { operationId: 'TravelExpensePassenger_search', method: 'GET', path: '/travelExpense/passenger' },
  TravelExpensePassengerList_deleteList: { operationId: 'TravelExpensePassengerList_deleteList', method: 'DELETE', path: '/travelExpense/passenger/list' },
  TravelExpensePassengerList_postList: { operationId: 'TravelExpensePassengerList_postList', method: 'POST', path: '/travelExpense/passenger/list' },
  TravelExpensePaymentType_get: { operationId: 'TravelExpensePaymentType_get', method: 'GET', path: '/travelExpense/paymentType/{id}' },
  TravelExpensePaymentType_search: { operationId: 'TravelExpensePaymentType_search', method: 'GET', path: '/travelExpense/paymentType' },
  TravelExpensePerDiemCompensation_delete: { operationId: 'TravelExpensePerDiemCompensation_delete', method: 'DELETE', path: '/travelExpense/perDiemCompensation/{id}' },
  TravelExpensePerDiemCompensation_get: { operationId: 'TravelExpensePerDiemCompensation_get', method: 'GET', path: '/travelExpense/perDiemCompensation/{id}' },
  TravelExpensePerDiemCompensation_post: { operationId: 'TravelExpensePerDiemCompensation_post', method: 'POST', path: '/travelExpense/perDiemCompensation' },
  TravelExpensePerDiemCompensation_put: { operationId: 'TravelExpensePerDiemCompensation_put', method: 'PUT', path: '/travelExpense/perDiemCompensation/{id}' },
  TravelExpensePerDiemCompensation_search: { operationId: 'TravelExpensePerDiemCompensation_search', method: 'GET', path: '/travelExpense/perDiemCompensation' },
  TravelExpenseRate_get: { operationId: 'TravelExpenseRate_get', method: 'GET', path: '/travelExpense/rate/{id}' },
  TravelExpenseRate_search: { operationId: 'TravelExpenseRate_search', method: 'GET', path: '/travelExpense/rate' },
  TravelExpenseRateCategory_get: { operationId: 'TravelExpenseRateCategory_get', method: 'GET', path: '/travelExpense/rateCategory/{id}' },
  TravelExpenseRateCategory_search: { operationId: 'TravelExpenseRateCategory_search', method: 'GET', path: '/travelExpense/rateCategory' },
  TravelExpenseRateCategoryGroup_get: { operationId: 'TravelExpenseRateCategoryGroup_get', method: 'GET', path: '/travelExpense/rateCategoryGroup/{id}' },
  TravelExpenseRateCategoryGroup_search: { operationId: 'TravelExpenseRateCategoryGroup_search', method: 'GET', path: '/travelExpense/rateCategoryGroup' },
  TravelExpenseSettings_get: { operationId: 'TravelExpenseSettings_get', method: 'GET', path: '/travelExpense/settings' },
  TravelExpenseUnapprove_unapprove: { operationId: 'TravelExpenseUnapprove_unapprove', method: 'PUT', path: '/travelExpense/:unapprove' },
  TravelExpenseUndeliver_undeliver: { operationId: 'TravelExpenseUndeliver_undeliver', method: 'PUT', path: '/travelExpense/:undeliver' },
  TravelExpenseZone_get: { operationId: 'TravelExpenseZone_get', method: 'GET', path: '/travelExpense/zone/{id}' },
  TravelExpenseZone_search: { operationId: 'TravelExpenseZone_search', method: 'GET', path: '/travelExpense/zone' },
  UserLicenseExport_export: { operationId: 'UserLicenseExport_export', method: 'POST', path: '/userLicense/export' },
  VatReturnsComment_query: { operationId: 'VatReturnsComment_query', method: 'GET', path: '/vatReturns/comment' },
  VatReturnsCommentAll_all: { operationId: 'VatReturnsCommentAll_all', method: 'GET', path: '/vatReturns/comment/>all' },
  VatTermSizeSettings_delete: { operationId: 'VatTermSizeSettings_delete', method: 'DELETE', path: '/vatTermSizeSettings/{id}' },
  VatTermSizeSettings_get: { operationId: 'VatTermSizeSettings_get', method: 'GET', path: '/vatTermSizeSettings/{id}' },
  VatTermSizeSettings_post: { operationId: 'VatTermSizeSettings_post', method: 'POST', path: '/vatTermSizeSettings' },
  VatTermSizeSettings_put: { operationId: 'VatTermSizeSettings_put', method: 'PUT', path: '/vatTermSizeSettings/{id}' },
  VatTermSizeSettings_query: { operationId: 'VatTermSizeSettings_query', method: 'GET', path: '/vatTermSizeSettings' },
  VoucherApprovalListElement_get: { operationId: 'VoucherApprovalListElement_get', method: 'GET', path: '/voucherApprovalListElement/{id}' },
  VoucherInboxEmailAddress_getEmailAddress: { operationId: 'VoucherInboxEmailAddress_getEmailAddress', method: 'GET', path: '/voucherInbox/emailAddress' },
  VoucherInboxInboxCount_getInboxCount: { operationId: 'VoucherInboxInboxCount_getInboxCount', method: 'GET', path: '/voucherInbox/inboxCount' },
  VoucherMessage_post: { operationId: 'VoucherMessage_post', method: 'POST', path: '/voucherMessage' },
  VoucherMessage_search: { operationId: 'VoucherMessage_search', method: 'GET', path: '/voucherMessage' },
  VoucherStatus_get: { operationId: 'VoucherStatus_get', method: 'GET', path: '/voucherStatus/{id}' },
  VoucherStatus_post: { operationId: 'VoucherStatus_post', method: 'POST', path: '/voucherStatus' },
  VoucherStatus_search: { operationId: 'VoucherStatus_search', method: 'GET', path: '/voucherStatus' },
  YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypes: { operationId: 'YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypes', method: 'GET', path: '/yearEnd/enumType/businessActivityTypes' },
  YearEndPenneoCasefiles_createCaseFile: { operationId: 'YearEndPenneoCasefiles_createCaseFile', method: 'POST', path: '/yearEnd/penneo/casefiles' },
  YearEndPenneoCasefiles_deleteCaseFile: { operationId: 'YearEndPenneoCasefiles_deleteCaseFile', method: 'DELETE', path: '/yearEnd/penneo/casefiles/{caseFileId}' },
  YearEndPenneoCasefiles_getCaseFiles: { operationId: 'YearEndPenneoCasefiles_getCaseFiles', method: 'GET', path: '/yearEnd/penneo/casefiles' },
  YearEndPenneoCasefilesActivate_activateCaseFile: { operationId: 'YearEndPenneoCasefilesActivate_activateCaseFile', method: 'POST', path: '/yearEnd/penneo/casefiles/{caseFileId}/activate' },
  YearEndPenneoCasefilesSigners_deleteSigner: { operationId: 'YearEndPenneoCasefilesSigners_deleteSigner', method: 'DELETE', path: '/yearEnd/penneo/casefiles/{caseFileId}/signers/{signerId}' },
  YearEndPenneoCasefilesSignersReactivate_reactivateSigner: { operationId: 'YearEndPenneoCasefilesSignersReactivate_reactivateSigner', method: 'POST', path: '/yearEnd/penneo/casefiles/{caseFileId}/signers/{signerId}/reactivate' },
  YearEndPenneoCasefilesSignersResend_resendSignLink: { operationId: 'YearEndPenneoCasefilesSignersResend_resendSignLink', method: 'POST', path: '/yearEnd/penneo/casefiles/{caseFileId}/signers/{signerId}/resend' },
  YearEndPenneoDocuments_createDocument: { operationId: 'YearEndPenneoDocuments_createDocument', method: 'POST', path: '/yearEnd/penneo/documents' },
  YearEndPenneoDocuments_deleteDocument: { operationId: 'YearEndPenneoDocuments_deleteDocument', method: 'DELETE', path: '/yearEnd/penneo/documents/{documentId}' },
  YearEndPenneoDocuments_updateDocument: { operationId: 'YearEndPenneoDocuments_updateDocument', method: 'PUT', path: '/yearEnd/penneo/documents/{documentId}' },
  YearEndPenneoDocumentsDownload_downloadDocument: { operationId: 'YearEndPenneoDocumentsDownload_downloadDocument', method: 'GET', path: '/yearEnd/penneo/documents/{documentId}/download' },
  YearEndPenneoRecipients_deleteRecipients: { operationId: 'YearEndPenneoRecipients_deleteRecipients', method: 'DELETE', path: '/yearEnd/penneo/recipients/{id}' },
  YearEndPenneoRecipients_getRecipients: { operationId: 'YearEndPenneoRecipients_getRecipients', method: 'GET', path: '/yearEnd/penneo/recipients' },
  YearEndPenneoRecipients_postRecipients: { operationId: 'YearEndPenneoRecipients_postRecipients', method: 'POST', path: '/yearEnd/penneo/recipients' },
  YearEndPenneoSession_authenticateAndListCaseFiles: { operationId: 'YearEndPenneoSession_authenticateAndListCaseFiles', method: 'GET', path: '/yearEnd/penneo/session' },
  YearEndPenneoSignature_lines_createAndLinkSignatureLine: { operationId: 'YearEndPenneoSignature_lines_createAndLinkSignatureLine', method: 'POST', path: '/yearEnd/penneo/signature-lines' },
  YearEndPenneoSync_sync: { operationId: 'YearEndPenneoSync_sync', method: 'POST', path: '/yearEnd/penneo/sync' },
  YearEndPenneoUpdateCompletedStatus_updateCompletedStatus: { operationId: 'YearEndPenneoUpdateCompletedStatus_updateCompletedStatus', method: 'POST', path: '/yearEnd/penneo/updateCompletedStatus' },
  YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024: { operationId: 'YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024', method: 'DELETE', path: '/yearEnd/researchAndDevelopment2024' },
  YearEndResearchAndDevelopment2024_get: { operationId: 'YearEndResearchAndDevelopment2024_get', method: 'GET', path: '/yearEnd/{yearEndReportId}/researchAndDevelopment2024' },
  YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024: { operationId: 'YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024', method: 'POST', path: '/yearEnd/researchAndDevelopment2024' },
  YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024: { operationId: 'YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024', method: 'PUT', path: '/yearEnd/researchAndDevelopment2024' },
} as const satisfies Record<string, OperationDefinition>;

export type OperationId = keyof typeof OPERATION_DEFINITIONS;

type OpenApiOperationId<T extends OperationId> = (typeof OPERATION_OPENAPI_IDS)[T];
type OperationSpec<T extends OperationId> = OpenApiOperationId<T> extends keyof operations ? operations[OpenApiOperationId<T>] : never;

type NormalizeNever<T> = [T] extends [never] ? undefined : T;
type ExtractContent<T> = T extends { content: infer C }
  ? C extends Record<string, unknown>
    ? C[keyof C]
    : unknown
  : null;
type SuccessResponse<T extends { responses: unknown }> =
  | (T['responses'] extends { 200: infer R } ? ExtractContent<R> : never)
  | (T['responses'] extends { 201: infer R } ? ExtractContent<R> : never)
  | (T['responses'] extends { 202: infer R } ? ExtractContent<R> : never)
  | (T['responses'] extends { 203: infer R } ? ExtractContent<R> : never)
  | (T['responses'] extends { 204: infer R } ? ExtractContent<R> : never)
  | (T['responses'] extends { 205: infer R } ? ExtractContent<R> : never)
  | (T['responses'] extends { 206: infer R } ? ExtractContent<R> : never);

type QueryForOperation<T extends OperationId> = NormalizeNever<
  OperationSpec<T> extends { parameters: { query?: infer Q } } ? Q : never
>;
type PathForOperation<T extends OperationId> = NormalizeNever<
  OperationSpec<T> extends { parameters: { path?: infer P } } ? P : never
>;
type BodyForOperation<T extends OperationId> = NormalizeNever<
  OperationSpec<T> extends { requestBody: infer R }
    ? ExtractContent<R>
    : OperationSpec<T> extends { requestBody?: infer R }
      ? ExtractContent<R>
      : never
>;
type ResponseForOperation<T extends OperationId> = NormalizeNever<
  SuccessResponse<OperationSpec<T>>
> extends infer R
  ? [R] extends [undefined]
    ? unknown
    : R
  : unknown;

type OperationArgs<T extends OperationId> = {
  headers?: HeadersInit;
} & (OperationSpec<T> extends { parameters: { path: infer P } }
  ? { path: P }
  : PathForOperation<T> extends undefined
    ? { path?: undefined }
    : { path?: PathForOperation<T> })
& (QueryForOperation<T> extends undefined
  ? { query?: undefined }
  : { query?: QueryForOperation<T> })
& (OperationSpec<T> extends { requestBody: unknown }
  ? { body: BodyForOperation<T> }
  : BodyForOperation<T> extends undefined
    ? { body?: undefined }
    : { body?: BodyForOperation<T> });

export type AccountantDashboardNews_getArgs = OperationArgs<'AccountantDashboardNews_get'>;
export type AccountantDashboardNews_getResponse = ResponseForOperation<'AccountantDashboardNews_get'>;
export type AccountantDashboardNewsTags_getTagsArgs = OperationArgs<'AccountantDashboardNewsTags_getTags'>;
export type AccountantDashboardNewsTags_getTagsResponse = ResponseForOperation<'AccountantDashboardNewsTags_getTags'>;
export type AccountingOfficeReconciliationsControl_getArgs = OperationArgs<'AccountingOfficeReconciliationsControl_get'>;
export type AccountingOfficeReconciliationsControl_getResponse = ResponseForOperation<'AccountingOfficeReconciliationsControl_get'>;
export type AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliationArgs = OperationArgs<'AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliation'>;
export type AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliationResponse = ResponseForOperation<'AccountingOfficeReconciliationsControlControlReconciliation_controlReconciliation'>;
export type AccountingOfficeReconciliationsControlReconcile_reconcileArgs = OperationArgs<'AccountingOfficeReconciliationsControlReconcile_reconcile'>;
export type AccountingOfficeReconciliationsControlReconcile_reconcileResponse = ResponseForOperation<'AccountingOfficeReconciliationsControlReconcile_reconcile'>;
export type AccountingOfficeReconciliationsControlRequestControl_requestControlArgs = OperationArgs<'AccountingOfficeReconciliationsControlRequestControl_requestControl'>;
export type AccountingOfficeReconciliationsControlRequestControl_requestControlResponse = ResponseForOperation<'AccountingOfficeReconciliationsControlRequestControl_requestControl'>;
export type Activity_getArgs = OperationArgs<'Activity_get'>;
export type Activity_getResponse = ResponseForOperation<'Activity_get'>;
export type Activity_postArgs = OperationArgs<'Activity_post'>;
export type Activity_postResponse = ResponseForOperation<'Activity_post'>;
export type Activity_searchArgs = OperationArgs<'Activity_search'>;
export type Activity_searchResponse = ResponseForOperation<'Activity_search'>;
export type ActivityForTimeSheet_getForTimeSheetArgs = OperationArgs<'ActivityForTimeSheet_getForTimeSheet'>;
export type ActivityForTimeSheet_getForTimeSheetResponse = ResponseForOperation<'ActivityForTimeSheet_getForTimeSheet'>;
export type ActivityList_postListArgs = OperationArgs<'ActivityList_postList'>;
export type ActivityList_postListResponse = ResponseForOperation<'ActivityList_postList'>;
export type Asset_deleteArgs = OperationArgs<'Asset_delete'>;
export type Asset_deleteResponse = ResponseForOperation<'Asset_delete'>;
export type Asset_getArgs = OperationArgs<'Asset_get'>;
export type Asset_getResponse = ResponseForOperation<'Asset_get'>;
export type Asset_postArgs = OperationArgs<'Asset_post'>;
export type Asset_postResponse = ResponseForOperation<'Asset_post'>;
export type Asset_putArgs = OperationArgs<'Asset_put'>;
export type Asset_putResponse = ResponseForOperation<'Asset_put'>;
export type Asset_searchArgs = OperationArgs<'Asset_search'>;
export type Asset_searchResponse = ResponseForOperation<'Asset_search'>;
export type AssetAssetsExist_getAssetsExistArgs = OperationArgs<'AssetAssetsExist_getAssetsExist'>;
export type AssetAssetsExist_getAssetsExistResponse = ResponseForOperation<'AssetAssetsExist_getAssetsExist'>;
export type AssetBalanceAccountsSum_balanceAccountsSumArgs = OperationArgs<'AssetBalanceAccountsSum_balanceAccountsSum'>;
export type AssetBalanceAccountsSum_balanceAccountsSumResponse = ResponseForOperation<'AssetBalanceAccountsSum_balanceAccountsSum'>;
export type AssetCanDelete_canDeleteArgs = OperationArgs<'AssetCanDelete_canDelete'>;
export type AssetCanDelete_canDeleteResponse = ResponseForOperation<'AssetCanDelete_canDelete'>;
export type AssetDeleteImport_deleteImportArgs = OperationArgs<'AssetDeleteImport_deleteImport'>;
export type AssetDeleteImport_deleteImportResponse = ResponseForOperation<'AssetDeleteImport_deleteImport'>;
export type AssetDeleteStartingBalance_deleteStartingBalanceArgs = OperationArgs<'AssetDeleteStartingBalance_deleteStartingBalance'>;
export type AssetDeleteStartingBalance_deleteStartingBalanceResponse = ResponseForOperation<'AssetDeleteStartingBalance_deleteStartingBalance'>;
export type AssetDuplicate_postDuplicateArgs = OperationArgs<'AssetDuplicate_postDuplicate'>;
export type AssetDuplicate_postDuplicateResponse = ResponseForOperation<'AssetDuplicate_postDuplicate'>;
export type AssetList_postListArgs = OperationArgs<'AssetList_postList'>;
export type AssetList_postListResponse = ResponseForOperation<'AssetList_postList'>;
export type AssetPostings_getPostingsArgs = OperationArgs<'AssetPostings_getPostings'>;
export type AssetPostings_getPostingsResponse = ResponseForOperation<'AssetPostings_getPostings'>;
export type AssetUpload_uploadArgs = OperationArgs<'AssetUpload_upload'>;
export type AssetUpload_uploadResponse = ResponseForOperation<'AssetUpload_upload'>;
export type AttestationAddApprover_addApproverArgs = OperationArgs<'AttestationAddApprover_addApprover'>;
export type AttestationAddApprover_addApproverResponse = ResponseForOperation<'AttestationAddApprover_addApprover'>;
export type AttestationAddApproverPermission_addApproverPermissionArgs = OperationArgs<'AttestationAddApproverPermission_addApproverPermission'>;
export type AttestationAddApproverPermission_addApproverPermissionResponse = ResponseForOperation<'AttestationAddApproverPermission_addApproverPermission'>;
export type AttestationCompanyModules_getArgs = OperationArgs<'AttestationCompanyModules_get'>;
export type AttestationCompanyModules_getResponse = ResponseForOperation<'AttestationCompanyModules_get'>;
export type BalanceReconciliationAccountVouchers_getVouchersArgs = OperationArgs<'BalanceReconciliationAccountVouchers_getVouchers'>;
export type BalanceReconciliationAccountVouchers_getVouchersResponse = ResponseForOperation<'BalanceReconciliationAccountVouchers_getVouchers'>;
export type BalanceReconciliationAnnualContext_postAnnualContextArgs = OperationArgs<'BalanceReconciliationAnnualContext_postAnnualContext'>;
export type BalanceReconciliationAnnualContext_postAnnualContextResponse = ResponseForOperation<'BalanceReconciliationAnnualContext_postAnnualContext'>;
export type BalanceReconciliationAttachmentPdf_getAttachmentArgs = OperationArgs<'BalanceReconciliationAttachmentPdf_getAttachment'>;
export type BalanceReconciliationAttachmentPdf_getAttachmentResponse = ResponseForOperation<'BalanceReconciliationAttachmentPdf_getAttachment'>;
export type BalanceSheet_searchArgs = OperationArgs<'BalanceSheet_search'>;
export type BalanceSheet_searchResponse = ResponseForOperation<'BalanceSheet_search'>;
export type Bank_getArgs = OperationArgs<'Bank_get'>;
export type Bank_getResponse = ResponseForOperation<'Bank_get'>;
export type Bank_searchArgs = OperationArgs<'Bank_search'>;
export type Bank_searchResponse = ResponseForOperation<'Bank_search'>;
export type BankReconciliation_deleteArgs = OperationArgs<'BankReconciliation_delete'>;
export type BankReconciliation_deleteResponse = ResponseForOperation<'BankReconciliation_delete'>;
export type BankReconciliation_getArgs = OperationArgs<'BankReconciliation_get'>;
export type BankReconciliation_getResponse = ResponseForOperation<'BankReconciliation_get'>;
export type BankReconciliation_postArgs = OperationArgs<'BankReconciliation_post'>;
export type BankReconciliation_postResponse = ResponseForOperation<'BankReconciliation_post'>;
export type BankReconciliation_putArgs = OperationArgs<'BankReconciliation_put'>;
export type BankReconciliation_putResponse = ResponseForOperation<'BankReconciliation_put'>;
export type BankReconciliation_searchArgs = OperationArgs<'BankReconciliation_search'>;
export type BankReconciliation_searchResponse = ResponseForOperation<'BankReconciliation_search'>;
export type BankReconciliationAdjustment_adjustmentArgs = OperationArgs<'BankReconciliationAdjustment_adjustment'>;
export type BankReconciliationAdjustment_adjustmentResponse = ResponseForOperation<'BankReconciliationAdjustment_adjustment'>;
export type BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactionsArgs = OperationArgs<'BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactions'>;
export type BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactionsResponse = ResponseForOperation<'BankReconciliationClosedWithUnmatchedTransactions_closedWithUnmatchedTransactions'>;
export type BankReconciliationLast_lastArgs = OperationArgs<'BankReconciliationLast_last'>;
export type BankReconciliationLast_lastResponse = ResponseForOperation<'BankReconciliationLast_last'>;
export type BankReconciliationLastClosed_lastClosedArgs = OperationArgs<'BankReconciliationLastClosed_lastClosed'>;
export type BankReconciliationLastClosed_lastClosedResponse = ResponseForOperation<'BankReconciliationLastClosed_lastClosed'>;
export type BankReconciliationMatch_deleteArgs = OperationArgs<'BankReconciliationMatch_delete'>;
export type BankReconciliationMatch_deleteResponse = ResponseForOperation<'BankReconciliationMatch_delete'>;
export type BankReconciliationMatch_getArgs = OperationArgs<'BankReconciliationMatch_get'>;
export type BankReconciliationMatch_getResponse = ResponseForOperation<'BankReconciliationMatch_get'>;
export type BankReconciliationMatch_postArgs = OperationArgs<'BankReconciliationMatch_post'>;
export type BankReconciliationMatch_postResponse = ResponseForOperation<'BankReconciliationMatch_post'>;
export type BankReconciliationMatch_putArgs = OperationArgs<'BankReconciliationMatch_put'>;
export type BankReconciliationMatch_putResponse = ResponseForOperation<'BankReconciliationMatch_put'>;
export type BankReconciliationMatch_searchArgs = OperationArgs<'BankReconciliationMatch_search'>;
export type BankReconciliationMatch_searchResponse = ResponseForOperation<'BankReconciliationMatch_search'>;
export type BankReconciliationMatchCount_countArgs = OperationArgs<'BankReconciliationMatchCount_count'>;
export type BankReconciliationMatchCount_countResponse = ResponseForOperation<'BankReconciliationMatchCount_count'>;
export type BankReconciliationMatchesCounter_getArgs = OperationArgs<'BankReconciliationMatchesCounter_get'>;
export type BankReconciliationMatchesCounter_getResponse = ResponseForOperation<'BankReconciliationMatchesCounter_get'>;
export type BankReconciliationMatchesCounter_postArgs = OperationArgs<'BankReconciliationMatchesCounter_post'>;
export type BankReconciliationMatchesCounter_postResponse = ResponseForOperation<'BankReconciliationMatchesCounter_post'>;
export type BankReconciliationMatchQuery_queryArgs = OperationArgs<'BankReconciliationMatchQuery_query'>;
export type BankReconciliationMatchQuery_queryResponse = ResponseForOperation<'BankReconciliationMatchQuery_query'>;
export type BankReconciliationMatchSuggest_suggestArgs = OperationArgs<'BankReconciliationMatchSuggest_suggest'>;
export type BankReconciliationMatchSuggest_suggestResponse = ResponseForOperation<'BankReconciliationMatchSuggest_suggest'>;
export type BankReconciliationPaymentType_getArgs = OperationArgs<'BankReconciliationPaymentType_get'>;
export type BankReconciliationPaymentType_getResponse = ResponseForOperation<'BankReconciliationPaymentType_get'>;
export type BankReconciliationPaymentType_searchArgs = OperationArgs<'BankReconciliationPaymentType_search'>;
export type BankReconciliationPaymentType_searchResponse = ResponseForOperation<'BankReconciliationPaymentType_search'>;
export type BankReconciliationSettings_getArgs = OperationArgs<'BankReconciliationSettings_get'>;
export type BankReconciliationSettings_getResponse = ResponseForOperation<'BankReconciliationSettings_get'>;
export type BankReconciliationSettings_postArgs = OperationArgs<'BankReconciliationSettings_post'>;
export type BankReconciliationSettings_postResponse = ResponseForOperation<'BankReconciliationSettings_post'>;
export type BankReconciliationSettings_putArgs = OperationArgs<'BankReconciliationSettings_put'>;
export type BankReconciliationSettings_putResponse = ResponseForOperation<'BankReconciliationSettings_put'>;
export type BankReconciliationTransactionsUnmatchedcsv_csvTransactionsArgs = OperationArgs<'BankReconciliationTransactionsUnmatchedcsv_csvTransactions'>;
export type BankReconciliationTransactionsUnmatchedcsv_csvTransactionsResponse = ResponseForOperation<'BankReconciliationTransactionsUnmatchedcsv_csvTransactions'>;
export type BankStatement_deleteArgs = OperationArgs<'BankStatement_delete'>;
export type BankStatement_deleteResponse = ResponseForOperation<'BankStatement_delete'>;
export type BankStatement_getArgs = OperationArgs<'BankStatement_get'>;
export type BankStatement_getResponse = ResponseForOperation<'BankStatement_get'>;
export type BankStatement_searchArgs = OperationArgs<'BankStatement_search'>;
export type BankStatement_searchResponse = ResponseForOperation<'BankStatement_search'>;
export type BankStatementImport_importBankStatementArgs = OperationArgs<'BankStatementImport_importBankStatement'>;
export type BankStatementImport_importBankStatementResponse = ResponseForOperation<'BankStatementImport_importBankStatement'>;
export type BankStatementTransaction_getArgs = OperationArgs<'BankStatementTransaction_get'>;
export type BankStatementTransaction_getResponse = ResponseForOperation<'BankStatementTransaction_get'>;
export type BankStatementTransaction_searchArgs = OperationArgs<'BankStatementTransaction_search'>;
export type BankStatementTransaction_searchResponse = ResponseForOperation<'BankStatementTransaction_search'>;
export type BankStatementTransactionDetails_getDetailsArgs = OperationArgs<'BankStatementTransactionDetails_getDetails'>;
export type BankStatementTransactionDetails_getDetailsResponse = ResponseForOperation<'BankStatementTransactionDetails_getDetails'>;
export type Company_getArgs = OperationArgs<'Company_get'>;
export type Company_getResponse = ResponseForOperation<'Company_get'>;
export type Company_putArgs = OperationArgs<'Company_put'>;
export type Company_putResponse = ResponseForOperation<'Company_put'>;
export type CompanyDivisions_getDivisionsArgs = OperationArgs<'CompanyDivisions_getDivisions'>;
export type CompanyDivisions_getDivisionsResponse = ResponseForOperation<'CompanyDivisions_getDivisions'>;
export type CompanySalesmodules_getArgs = OperationArgs<'CompanySalesmodules_get'>;
export type CompanySalesmodules_getResponse = ResponseForOperation<'CompanySalesmodules_get'>;
export type CompanySalesmodules_postArgs = OperationArgs<'CompanySalesmodules_post'>;
export type CompanySalesmodules_postResponse = ResponseForOperation<'CompanySalesmodules_post'>;
export type CompanySettingsAltinn_putArgs = OperationArgs<'CompanySettingsAltinn_put'>;
export type CompanySettingsAltinn_putResponse = ResponseForOperation<'CompanySettingsAltinn_put'>;
export type CompanySettingsAltinn_searchArgs = OperationArgs<'CompanySettingsAltinn_search'>;
export type CompanySettingsAltinn_searchResponse = ResponseForOperation<'CompanySettingsAltinn_search'>;
export type CompanyWithLoginAccess_getWithLoginAccessArgs = OperationArgs<'CompanyWithLoginAccess_getWithLoginAccess'>;
export type CompanyWithLoginAccess_getWithLoginAccessResponse = ResponseForOperation<'CompanyWithLoginAccess_getWithLoginAccess'>;
export type Contact_getArgs = OperationArgs<'Contact_get'>;
export type Contact_getResponse = ResponseForOperation<'Contact_get'>;
export type Contact_postArgs = OperationArgs<'Contact_post'>;
export type Contact_postResponse = ResponseForOperation<'Contact_post'>;
export type Contact_putArgs = OperationArgs<'Contact_put'>;
export type Contact_putResponse = ResponseForOperation<'Contact_put'>;
export type Contact_searchArgs = OperationArgs<'Contact_search'>;
export type Contact_searchResponse = ResponseForOperation<'Contact_search'>;
export type ContactList_deleteByIdsArgs = OperationArgs<'ContactList_deleteByIds'>;
export type ContactList_deleteByIdsResponse = ResponseForOperation<'ContactList_deleteByIds'>;
export type ContactList_postListArgs = OperationArgs<'ContactList_postList'>;
export type ContactList_postListResponse = ResponseForOperation<'ContactList_postList'>;
export type Country_getArgs = OperationArgs<'Country_get'>;
export type Country_getResponse = ResponseForOperation<'Country_get'>;
export type Country_searchArgs = OperationArgs<'Country_search'>;
export type Country_searchResponse = ResponseForOperation<'Country_search'>;
export type CrmProspect_getArgs = OperationArgs<'CrmProspect_get'>;
export type CrmProspect_getResponse = ResponseForOperation<'CrmProspect_get'>;
export type CrmProspect_searchArgs = OperationArgs<'CrmProspect_search'>;
export type CrmProspect_searchResponse = ResponseForOperation<'CrmProspect_search'>;
export type Currency_getArgs = OperationArgs<'Currency_get'>;
export type Currency_getResponse = ResponseForOperation<'Currency_get'>;
export type Currency_searchArgs = OperationArgs<'Currency_search'>;
export type Currency_searchResponse = ResponseForOperation<'Currency_search'>;
export type CurrencyExchangeRate_convertCurrencyAmountArgs = OperationArgs<'CurrencyExchangeRate_convertCurrencyAmount'>;
export type CurrencyExchangeRate_convertCurrencyAmountResponse = ResponseForOperation<'CurrencyExchangeRate_convertCurrencyAmount'>;
export type CurrencyExchangeRate_getAmountCurrencyArgs = OperationArgs<'CurrencyExchangeRate_getAmountCurrency'>;
export type CurrencyExchangeRate_getAmountCurrencyResponse = ResponseForOperation<'CurrencyExchangeRate_getAmountCurrency'>;
export type CurrencyRate_getRateArgs = OperationArgs<'CurrencyRate_getRate'>;
export type CurrencyRate_getRateResponse = ResponseForOperation<'CurrencyRate_getRate'>;
export type Customer_deleteArgs = OperationArgs<'Customer_delete'>;
export type Customer_deleteResponse = ResponseForOperation<'Customer_delete'>;
export type Customer_getArgs = OperationArgs<'Customer_get'>;
export type Customer_getResponse = ResponseForOperation<'Customer_get'>;
export type Customer_postArgs = OperationArgs<'Customer_post'>;
export type Customer_postResponse = ResponseForOperation<'Customer_post'>;
export type Customer_putArgs = OperationArgs<'Customer_put'>;
export type Customer_putResponse = ResponseForOperation<'Customer_put'>;
export type Customer_searchArgs = OperationArgs<'Customer_search'>;
export type Customer_searchResponse = ResponseForOperation<'Customer_search'>;
export type CustomerCategory_getArgs = OperationArgs<'CustomerCategory_get'>;
export type CustomerCategory_getResponse = ResponseForOperation<'CustomerCategory_get'>;
export type CustomerCategory_postArgs = OperationArgs<'CustomerCategory_post'>;
export type CustomerCategory_postResponse = ResponseForOperation<'CustomerCategory_post'>;
export type CustomerCategory_putArgs = OperationArgs<'CustomerCategory_put'>;
export type CustomerCategory_putResponse = ResponseForOperation<'CustomerCategory_put'>;
export type CustomerCategory_searchArgs = OperationArgs<'CustomerCategory_search'>;
export type CustomerCategory_searchResponse = ResponseForOperation<'CustomerCategory_search'>;
export type CustomerList_postListArgs = OperationArgs<'CustomerList_postList'>;
export type CustomerList_postListResponse = ResponseForOperation<'CustomerList_postList'>;
export type CustomerList_putListArgs = OperationArgs<'CustomerList_putList'>;
export type CustomerList_putListResponse = ResponseForOperation<'CustomerList_putList'>;
export type DeliveryAddress_getArgs = OperationArgs<'DeliveryAddress_get'>;
export type DeliveryAddress_getResponse = ResponseForOperation<'DeliveryAddress_get'>;
export type DeliveryAddress_putArgs = OperationArgs<'DeliveryAddress_put'>;
export type DeliveryAddress_putResponse = ResponseForOperation<'DeliveryAddress_put'>;
export type DeliveryAddress_searchArgs = OperationArgs<'DeliveryAddress_search'>;
export type DeliveryAddress_searchResponse = ResponseForOperation<'DeliveryAddress_search'>;
export type Department_deleteArgs = OperationArgs<'Department_delete'>;
export type Department_deleteResponse = ResponseForOperation<'Department_delete'>;
export type Department_getArgs = OperationArgs<'Department_get'>;
export type Department_getResponse = ResponseForOperation<'Department_get'>;
export type Department_postArgs = OperationArgs<'Department_post'>;
export type Department_postResponse = ResponseForOperation<'Department_post'>;
export type Department_putArgs = OperationArgs<'Department_put'>;
export type Department_putResponse = ResponseForOperation<'Department_put'>;
export type Department_searchArgs = OperationArgs<'Department_search'>;
export type Department_searchResponse = ResponseForOperation<'Department_search'>;
export type DepartmentList_postListArgs = OperationArgs<'DepartmentList_postList'>;
export type DepartmentList_postListResponse = ResponseForOperation<'DepartmentList_postList'>;
export type DepartmentList_putListArgs = OperationArgs<'DepartmentList_putList'>;
export type DepartmentList_putListResponse = ResponseForOperation<'DepartmentList_putList'>;
export type DepartmentQuery_queryArgs = OperationArgs<'DepartmentQuery_query'>;
export type DepartmentQuery_queryResponse = ResponseForOperation<'DepartmentQuery_query'>;
export type Division_postArgs = OperationArgs<'Division_post'>;
export type Division_postResponse = ResponseForOperation<'Division_post'>;
export type Division_putArgs = OperationArgs<'Division_put'>;
export type Division_putResponse = ResponseForOperation<'Division_put'>;
export type Division_searchArgs = OperationArgs<'Division_search'>;
export type Division_searchResponse = ResponseForOperation<'Division_search'>;
export type DivisionList_postListArgs = OperationArgs<'DivisionList_postList'>;
export type DivisionList_postListResponse = ResponseForOperation<'DivisionList_postList'>;
export type DivisionList_putListArgs = OperationArgs<'DivisionList_putList'>;
export type DivisionList_putListResponse = ResponseForOperation<'DivisionList_putList'>;
export type Document_getArgs = OperationArgs<'Document_get'>;
export type Document_getResponse = ResponseForOperation<'Document_get'>;
export type DocumentArchive_deleteArgs = OperationArgs<'DocumentArchive_delete'>;
export type DocumentArchive_deleteResponse = ResponseForOperation<'DocumentArchive_delete'>;
export type DocumentArchive_putArgs = OperationArgs<'DocumentArchive_put'>;
export type DocumentArchive_putResponse = ResponseForOperation<'DocumentArchive_put'>;
export type DocumentArchiveAccount_accountPostArgs = OperationArgs<'DocumentArchiveAccount_accountPost'>;
export type DocumentArchiveAccount_accountPostResponse = ResponseForOperation<'DocumentArchiveAccount_accountPost'>;
export type DocumentArchiveAccount_getAccountArgs = OperationArgs<'DocumentArchiveAccount_getAccount'>;
export type DocumentArchiveAccount_getAccountResponse = ResponseForOperation<'DocumentArchiveAccount_getAccount'>;
export type DocumentArchiveCustomer_customerPostArgs = OperationArgs<'DocumentArchiveCustomer_customerPost'>;
export type DocumentArchiveCustomer_customerPostResponse = ResponseForOperation<'DocumentArchiveCustomer_customerPost'>;
export type DocumentArchiveCustomer_getCustomerArgs = OperationArgs<'DocumentArchiveCustomer_getCustomer'>;
export type DocumentArchiveCustomer_getCustomerResponse = ResponseForOperation<'DocumentArchiveCustomer_getCustomer'>;
export type DocumentArchiveDynamicControlForm_dynamicControlFormPostArgs = OperationArgs<'DocumentArchiveDynamicControlForm_dynamicControlFormPost'>;
export type DocumentArchiveDynamicControlForm_dynamicControlFormPostResponse = ResponseForOperation<'DocumentArchiveDynamicControlForm_dynamicControlFormPost'>;
export type DocumentArchiveDynamicControlForm_getDynamicControlFormArgs = OperationArgs<'DocumentArchiveDynamicControlForm_getDynamicControlForm'>;
export type DocumentArchiveDynamicControlForm_getDynamicControlFormResponse = ResponseForOperation<'DocumentArchiveDynamicControlForm_getDynamicControlForm'>;
export type DocumentArchiveEmployee_employeePostArgs = OperationArgs<'DocumentArchiveEmployee_employeePost'>;
export type DocumentArchiveEmployee_employeePostResponse = ResponseForOperation<'DocumentArchiveEmployee_employeePost'>;
export type DocumentArchiveEmployee_getEmployeeArgs = OperationArgs<'DocumentArchiveEmployee_getEmployee'>;
export type DocumentArchiveEmployee_getEmployeeResponse = ResponseForOperation<'DocumentArchiveEmployee_getEmployee'>;
export type DocumentArchiveProduct_getProductArgs = OperationArgs<'DocumentArchiveProduct_getProduct'>;
export type DocumentArchiveProduct_getProductResponse = ResponseForOperation<'DocumentArchiveProduct_getProduct'>;
export type DocumentArchiveProduct_productPostArgs = OperationArgs<'DocumentArchiveProduct_productPost'>;
export type DocumentArchiveProduct_productPostResponse = ResponseForOperation<'DocumentArchiveProduct_productPost'>;
export type DocumentArchiveProject_getProjectArgs = OperationArgs<'DocumentArchiveProject_getProject'>;
export type DocumentArchiveProject_getProjectResponse = ResponseForOperation<'DocumentArchiveProject_getProject'>;
export type DocumentArchiveProject_projectPostArgs = OperationArgs<'DocumentArchiveProject_projectPost'>;
export type DocumentArchiveProject_projectPostResponse = ResponseForOperation<'DocumentArchiveProject_projectPost'>;
export type DocumentArchiveReception_receptionPostArgs = OperationArgs<'DocumentArchiveReception_receptionPost'>;
export type DocumentArchiveReception_receptionPostResponse = ResponseForOperation<'DocumentArchiveReception_receptionPost'>;
export type DocumentArchiveSupplier_getSupplierArgs = OperationArgs<'DocumentArchiveSupplier_getSupplier'>;
export type DocumentArchiveSupplier_getSupplierResponse = ResponseForOperation<'DocumentArchiveSupplier_getSupplier'>;
export type DocumentArchiveSupplier_supplierPostArgs = OperationArgs<'DocumentArchiveSupplier_supplierPost'>;
export type DocumentArchiveSupplier_supplierPostResponse = ResponseForOperation<'DocumentArchiveSupplier_supplierPost'>;
export type DocumentContent_downloadContentArgs = OperationArgs<'DocumentContent_downloadContent'>;
export type DocumentContent_downloadContentResponse = ResponseForOperation<'DocumentContent_downloadContent'>;
export type Employee_getArgs = OperationArgs<'Employee_get'>;
export type Employee_getResponse = ResponseForOperation<'Employee_get'>;
export type Employee_postArgs = OperationArgs<'Employee_post'>;
export type Employee_postResponse = ResponseForOperation<'Employee_post'>;
export type Employee_putArgs = OperationArgs<'Employee_put'>;
export type Employee_putResponse = ResponseForOperation<'Employee_put'>;
export type Employee_searchArgs = OperationArgs<'Employee_search'>;
export type Employee_searchResponse = ResponseForOperation<'Employee_search'>;
export type EmployeeCategory_deleteArgs = OperationArgs<'EmployeeCategory_delete'>;
export type EmployeeCategory_deleteResponse = ResponseForOperation<'EmployeeCategory_delete'>;
export type EmployeeCategory_getArgs = OperationArgs<'EmployeeCategory_get'>;
export type EmployeeCategory_getResponse = ResponseForOperation<'EmployeeCategory_get'>;
export type EmployeeCategory_postArgs = OperationArgs<'EmployeeCategory_post'>;
export type EmployeeCategory_postResponse = ResponseForOperation<'EmployeeCategory_post'>;
export type EmployeeCategory_putArgs = OperationArgs<'EmployeeCategory_put'>;
export type EmployeeCategory_putResponse = ResponseForOperation<'EmployeeCategory_put'>;
export type EmployeeCategory_searchArgs = OperationArgs<'EmployeeCategory_search'>;
export type EmployeeCategory_searchResponse = ResponseForOperation<'EmployeeCategory_search'>;
export type EmployeeCategoryList_deleteByIdsArgs = OperationArgs<'EmployeeCategoryList_deleteByIds'>;
export type EmployeeCategoryList_deleteByIdsResponse = ResponseForOperation<'EmployeeCategoryList_deleteByIds'>;
export type EmployeeCategoryList_postListArgs = OperationArgs<'EmployeeCategoryList_postList'>;
export type EmployeeCategoryList_postListResponse = ResponseForOperation<'EmployeeCategoryList_postList'>;
export type EmployeeCategoryList_putListArgs = OperationArgs<'EmployeeCategoryList_putList'>;
export type EmployeeCategoryList_putListResponse = ResponseForOperation<'EmployeeCategoryList_putList'>;
export type EmployeeEmployment_getArgs = OperationArgs<'EmployeeEmployment_get'>;
export type EmployeeEmployment_getResponse = ResponseForOperation<'EmployeeEmployment_get'>;
export type EmployeeEmployment_postArgs = OperationArgs<'EmployeeEmployment_post'>;
export type EmployeeEmployment_postResponse = ResponseForOperation<'EmployeeEmployment_post'>;
export type EmployeeEmployment_putArgs = OperationArgs<'EmployeeEmployment_put'>;
export type EmployeeEmployment_putResponse = ResponseForOperation<'EmployeeEmployment_put'>;
export type EmployeeEmployment_searchArgs = OperationArgs<'EmployeeEmployment_search'>;
export type EmployeeEmployment_searchResponse = ResponseForOperation<'EmployeeEmployment_search'>;
export type EmployeeEmploymentDetails_getArgs = OperationArgs<'EmployeeEmploymentDetails_get'>;
export type EmployeeEmploymentDetails_getResponse = ResponseForOperation<'EmployeeEmploymentDetails_get'>;
export type EmployeeEmploymentDetails_postArgs = OperationArgs<'EmployeeEmploymentDetails_post'>;
export type EmployeeEmploymentDetails_postResponse = ResponseForOperation<'EmployeeEmploymentDetails_post'>;
export type EmployeeEmploymentDetails_putArgs = OperationArgs<'EmployeeEmploymentDetails_put'>;
export type EmployeeEmploymentDetails_putResponse = ResponseForOperation<'EmployeeEmploymentDetails_put'>;
export type EmployeeEmploymentDetails_searchArgs = OperationArgs<'EmployeeEmploymentDetails_search'>;
export type EmployeeEmploymentDetails_searchResponse = ResponseForOperation<'EmployeeEmploymentDetails_search'>;
export type EmployeeEmploymentEmploymentType_searchArgs = OperationArgs<'EmployeeEmploymentEmploymentType_search'>;
export type EmployeeEmploymentEmploymentType_searchResponse = ResponseForOperation<'EmployeeEmploymentEmploymentType_search'>;
export type EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonTypeArgs = OperationArgs<'EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonType'>;
export type EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonTypeResponse = ResponseForOperation<'EmployeeEmploymentEmploymentTypeEmploymentEndReasonType_getEmploymentEndReasonType'>;
export type EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormTypeArgs = OperationArgs<'EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormType'>;
export type EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormTypeResponse = ResponseForOperation<'EmployeeEmploymentEmploymentTypeEmploymentFormType_getEmploymentFormType'>;
export type EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentTypeArgs = OperationArgs<'EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentType'>;
export type EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentTypeResponse = ResponseForOperation<'EmployeeEmploymentEmploymentTypeMaritimeEmploymentType_getMaritimeEmploymentType'>;
export type EmployeeEmploymentEmploymentTypeSalaryType_getSalaryTypeArgs = OperationArgs<'EmployeeEmploymentEmploymentTypeSalaryType_getSalaryType'>;
export type EmployeeEmploymentEmploymentTypeSalaryType_getSalaryTypeResponse = ResponseForOperation<'EmployeeEmploymentEmploymentTypeSalaryType_getSalaryType'>;
export type EmployeeEmploymentEmploymentTypeScheduleType_getScheduleTypeArgs = OperationArgs<'EmployeeEmploymentEmploymentTypeScheduleType_getScheduleType'>;
export type EmployeeEmploymentEmploymentTypeScheduleType_getScheduleTypeResponse = ResponseForOperation<'EmployeeEmploymentEmploymentTypeScheduleType_getScheduleType'>;
export type EmployeeEmploymentLeaveOfAbsence_getArgs = OperationArgs<'EmployeeEmploymentLeaveOfAbsence_get'>;
export type EmployeeEmploymentLeaveOfAbsence_getResponse = ResponseForOperation<'EmployeeEmploymentLeaveOfAbsence_get'>;
export type EmployeeEmploymentLeaveOfAbsence_postArgs = OperationArgs<'EmployeeEmploymentLeaveOfAbsence_post'>;
export type EmployeeEmploymentLeaveOfAbsence_postResponse = ResponseForOperation<'EmployeeEmploymentLeaveOfAbsence_post'>;
export type EmployeeEmploymentLeaveOfAbsence_putArgs = OperationArgs<'EmployeeEmploymentLeaveOfAbsence_put'>;
export type EmployeeEmploymentLeaveOfAbsence_putResponse = ResponseForOperation<'EmployeeEmploymentLeaveOfAbsence_put'>;
export type EmployeeEmploymentLeaveOfAbsence_searchArgs = OperationArgs<'EmployeeEmploymentLeaveOfAbsence_search'>;
export type EmployeeEmploymentLeaveOfAbsence_searchResponse = ResponseForOperation<'EmployeeEmploymentLeaveOfAbsence_search'>;
export type EmployeeEmploymentLeaveOfAbsenceList_postListArgs = OperationArgs<'EmployeeEmploymentLeaveOfAbsenceList_postList'>;
export type EmployeeEmploymentLeaveOfAbsenceList_postListResponse = ResponseForOperation<'EmployeeEmploymentLeaveOfAbsenceList_postList'>;
export type EmployeeEmploymentLeaveOfAbsenceType_searchArgs = OperationArgs<'EmployeeEmploymentLeaveOfAbsenceType_search'>;
export type EmployeeEmploymentLeaveOfAbsenceType_searchResponse = ResponseForOperation<'EmployeeEmploymentLeaveOfAbsenceType_search'>;
export type EmployeeEmploymentOccupationCode_getArgs = OperationArgs<'EmployeeEmploymentOccupationCode_get'>;
export type EmployeeEmploymentOccupationCode_getResponse = ResponseForOperation<'EmployeeEmploymentOccupationCode_get'>;
export type EmployeeEmploymentOccupationCode_searchArgs = OperationArgs<'EmployeeEmploymentOccupationCode_search'>;
export type EmployeeEmploymentOccupationCode_searchResponse = ResponseForOperation<'EmployeeEmploymentOccupationCode_search'>;
export type EmployeeEmploymentRemunerationType_searchArgs = OperationArgs<'EmployeeEmploymentRemunerationType_search'>;
export type EmployeeEmploymentRemunerationType_searchResponse = ResponseForOperation<'EmployeeEmploymentRemunerationType_search'>;
export type EmployeeEmploymentWorkingHoursScheme_searchArgs = OperationArgs<'EmployeeEmploymentWorkingHoursScheme_search'>;
export type EmployeeEmploymentWorkingHoursScheme_searchResponse = ResponseForOperation<'EmployeeEmploymentWorkingHoursScheme_search'>;
export type EmployeeEntitlement_getArgs = OperationArgs<'EmployeeEntitlement_get'>;
export type EmployeeEntitlement_getResponse = ResponseForOperation<'EmployeeEntitlement_get'>;
export type EmployeeEntitlement_searchArgs = OperationArgs<'EmployeeEntitlement_search'>;
export type EmployeeEntitlement_searchResponse = ResponseForOperation<'EmployeeEntitlement_search'>;
export type EmployeeEntitlementClient_clientArgs = OperationArgs<'EmployeeEntitlementClient_client'>;
export type EmployeeEntitlementClient_clientResponse = ResponseForOperation<'EmployeeEntitlementClient_client'>;
export type EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplateArgs = OperationArgs<'EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplate'>;
export type EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplateResponse = ResponseForOperation<'EmployeeEntitlementGrantClientEntitlementsByTemplate_grantClientEntitlementsByTemplate'>;
export type EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplateArgs = OperationArgs<'EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplate'>;
export type EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplateResponse = ResponseForOperation<'EmployeeEntitlementGrantEntitlementsByTemplate_grantEntitlementsByTemplate'>;
export type EmployeeHourlyCostAndRate_getArgs = OperationArgs<'EmployeeHourlyCostAndRate_get'>;
export type EmployeeHourlyCostAndRate_getResponse = ResponseForOperation<'EmployeeHourlyCostAndRate_get'>;
export type EmployeeHourlyCostAndRate_postArgs = OperationArgs<'EmployeeHourlyCostAndRate_post'>;
export type EmployeeHourlyCostAndRate_postResponse = ResponseForOperation<'EmployeeHourlyCostAndRate_post'>;
export type EmployeeHourlyCostAndRate_putArgs = OperationArgs<'EmployeeHourlyCostAndRate_put'>;
export type EmployeeHourlyCostAndRate_putResponse = ResponseForOperation<'EmployeeHourlyCostAndRate_put'>;
export type EmployeeHourlyCostAndRate_searchArgs = OperationArgs<'EmployeeHourlyCostAndRate_search'>;
export type EmployeeHourlyCostAndRate_searchResponse = ResponseForOperation<'EmployeeHourlyCostAndRate_search'>;
export type EmployeeList_postListArgs = OperationArgs<'EmployeeList_postList'>;
export type EmployeeList_postListResponse = ResponseForOperation<'EmployeeList_postList'>;
export type EmployeeNextOfKin_getArgs = OperationArgs<'EmployeeNextOfKin_get'>;
export type EmployeeNextOfKin_getResponse = ResponseForOperation<'EmployeeNextOfKin_get'>;
export type EmployeeNextOfKin_postArgs = OperationArgs<'EmployeeNextOfKin_post'>;
export type EmployeeNextOfKin_postResponse = ResponseForOperation<'EmployeeNextOfKin_post'>;
export type EmployeeNextOfKin_putArgs = OperationArgs<'EmployeeNextOfKin_put'>;
export type EmployeeNextOfKin_putResponse = ResponseForOperation<'EmployeeNextOfKin_put'>;
export type EmployeeNextOfKin_searchArgs = OperationArgs<'EmployeeNextOfKin_search'>;
export type EmployeeNextOfKin_searchResponse = ResponseForOperation<'EmployeeNextOfKin_search'>;
export type EmployeePreferences_putArgs = OperationArgs<'EmployeePreferences_put'>;
export type EmployeePreferences_putResponse = ResponseForOperation<'EmployeePreferences_put'>;
export type EmployeePreferences_searchArgs = OperationArgs<'EmployeePreferences_search'>;
export type EmployeePreferences_searchResponse = ResponseForOperation<'EmployeePreferences_search'>;
export type EmployeePreferencesChangeLanguage_changeLanguageArgs = OperationArgs<'EmployeePreferencesChangeLanguage_changeLanguage'>;
export type EmployeePreferencesChangeLanguage_changeLanguageResponse = ResponseForOperation<'EmployeePreferencesChangeLanguage_changeLanguage'>;
export type EmployeePreferencesList_putListArgs = OperationArgs<'EmployeePreferencesList_putList'>;
export type EmployeePreferencesList_putListResponse = ResponseForOperation<'EmployeePreferencesList_putList'>;
export type EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferencesArgs = OperationArgs<'EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferences'>;
export type EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferencesResponse = ResponseForOperation<'EmployeePreferencesLoggedInEmployeePreferences_loggedInEmployeePreferences'>;
export type EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContactsArgs = OperationArgs<'EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContacts'>;
export type EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContactsResponse = ResponseForOperation<'EmployeeSearchForEmployeesAndContacts_searchForEmployeesAndContacts'>;
export type EmployeeStandardTime_getArgs = OperationArgs<'EmployeeStandardTime_get'>;
export type EmployeeStandardTime_getResponse = ResponseForOperation<'EmployeeStandardTime_get'>;
export type EmployeeStandardTime_postArgs = OperationArgs<'EmployeeStandardTime_post'>;
export type EmployeeStandardTime_postResponse = ResponseForOperation<'EmployeeStandardTime_post'>;
export type EmployeeStandardTime_putArgs = OperationArgs<'EmployeeStandardTime_put'>;
export type EmployeeStandardTime_putResponse = ResponseForOperation<'EmployeeStandardTime_put'>;
export type EmployeeStandardTime_searchArgs = OperationArgs<'EmployeeStandardTime_search'>;
export type EmployeeStandardTime_searchResponse = ResponseForOperation<'EmployeeStandardTime_search'>;
export type EmployeeStandardTimeByDate_getByDateArgs = OperationArgs<'EmployeeStandardTimeByDate_getByDate'>;
export type EmployeeStandardTimeByDate_getByDateResponse = ResponseForOperation<'EmployeeStandardTimeByDate_getByDate'>;
export type Event_exampleArgs = OperationArgs<'Event_example'>;
export type Event_exampleResponse = ResponseForOperation<'Event_example'>;
export type Event_getArgs = OperationArgs<'Event_get'>;
export type Event_getResponse = ResponseForOperation<'Event_get'>;
export type EventSubscription_deleteArgs = OperationArgs<'EventSubscription_delete'>;
export type EventSubscription_deleteResponse = ResponseForOperation<'EventSubscription_delete'>;
export type EventSubscription_getArgs = OperationArgs<'EventSubscription_get'>;
export type EventSubscription_getResponse = ResponseForOperation<'EventSubscription_get'>;
export type EventSubscription_postArgs = OperationArgs<'EventSubscription_post'>;
export type EventSubscription_postResponse = ResponseForOperation<'EventSubscription_post'>;
export type EventSubscription_putArgs = OperationArgs<'EventSubscription_put'>;
export type EventSubscription_putResponse = ResponseForOperation<'EventSubscription_put'>;
export type EventSubscription_searchArgs = OperationArgs<'EventSubscription_search'>;
export type EventSubscription_searchResponse = ResponseForOperation<'EventSubscription_search'>;
export type EventSubscriptionList_deleteByIdsArgs = OperationArgs<'EventSubscriptionList_deleteByIds'>;
export type EventSubscriptionList_deleteByIdsResponse = ResponseForOperation<'EventSubscriptionList_deleteByIds'>;
export type EventSubscriptionList_postListArgs = OperationArgs<'EventSubscriptionList_postList'>;
export type EventSubscriptionList_postListResponse = ResponseForOperation<'EventSubscriptionList_postList'>;
export type EventSubscriptionList_putListArgs = OperationArgs<'EventSubscriptionList_putList'>;
export type EventSubscriptionList_putListResponse = ResponseForOperation<'EventSubscriptionList_putList'>;
export type IncomingInvoice_getArgs = OperationArgs<'IncomingInvoice_get'>;
export type IncomingInvoice_getResponse = ResponseForOperation<'IncomingInvoice_get'>;
export type IncomingInvoice_postArgs = OperationArgs<'IncomingInvoice_post'>;
export type IncomingInvoice_postResponse = ResponseForOperation<'IncomingInvoice_post'>;
export type IncomingInvoice_putArgs = OperationArgs<'IncomingInvoice_put'>;
export type IncomingInvoice_putResponse = ResponseForOperation<'IncomingInvoice_put'>;
export type IncomingInvoiceAddPayment_addPaymentArgs = OperationArgs<'IncomingInvoiceAddPayment_addPayment'>;
export type IncomingInvoiceAddPayment_addPaymentResponse = ResponseForOperation<'IncomingInvoiceAddPayment_addPayment'>;
export type IncomingInvoiceSearch_searchArgs = OperationArgs<'IncomingInvoiceSearch_search'>;
export type IncomingInvoiceSearch_searchResponse = ResponseForOperation<'IncomingInvoiceSearch_search'>;
export type InternalDebtCollector_getArgs = OperationArgs<'InternalDebtCollector_get'>;
export type InternalDebtCollector_getResponse = ResponseForOperation<'InternalDebtCollector_get'>;
export type InternalDebtCollectorDeactivate_deactivateArgs = OperationArgs<'InternalDebtCollectorDeactivate_deactivate'>;
export type InternalDebtCollectorDeactivate_deactivateResponse = ResponseForOperation<'InternalDebtCollectorDeactivate_deactivate'>;
export type InternalNhoAdminAbort_abortArgs = OperationArgs<'InternalNhoAdminAbort_abort'>;
export type InternalNhoAdminAbort_abortResponse = ResponseForOperation<'InternalNhoAdminAbort_abort'>;
export type Inventory_deleteArgs = OperationArgs<'Inventory_delete'>;
export type Inventory_deleteResponse = ResponseForOperation<'Inventory_delete'>;
export type Inventory_getArgs = OperationArgs<'Inventory_get'>;
export type Inventory_getResponse = ResponseForOperation<'Inventory_get'>;
export type Inventory_postArgs = OperationArgs<'Inventory_post'>;
export type Inventory_postResponse = ResponseForOperation<'Inventory_post'>;
export type Inventory_putArgs = OperationArgs<'Inventory_put'>;
export type Inventory_putResponse = ResponseForOperation<'Inventory_put'>;
export type Inventory_searchArgs = OperationArgs<'Inventory_search'>;
export type Inventory_searchResponse = ResponseForOperation<'Inventory_search'>;
export type InventoryInventories_searchArgs = OperationArgs<'InventoryInventories_search'>;
export type InventoryInventories_searchResponse = ResponseForOperation<'InventoryInventories_search'>;
export type InventoryLocation_deleteArgs = OperationArgs<'InventoryLocation_delete'>;
export type InventoryLocation_deleteResponse = ResponseForOperation<'InventoryLocation_delete'>;
export type InventoryLocation_getArgs = OperationArgs<'InventoryLocation_get'>;
export type InventoryLocation_getResponse = ResponseForOperation<'InventoryLocation_get'>;
export type InventoryLocation_postArgs = OperationArgs<'InventoryLocation_post'>;
export type InventoryLocation_postResponse = ResponseForOperation<'InventoryLocation_post'>;
export type InventoryLocation_putArgs = OperationArgs<'InventoryLocation_put'>;
export type InventoryLocation_putResponse = ResponseForOperation<'InventoryLocation_put'>;
export type InventoryLocation_searchArgs = OperationArgs<'InventoryLocation_search'>;
export type InventoryLocation_searchResponse = ResponseForOperation<'InventoryLocation_search'>;
export type InventoryLocationList_deleteByIdsArgs = OperationArgs<'InventoryLocationList_deleteByIds'>;
export type InventoryLocationList_deleteByIdsResponse = ResponseForOperation<'InventoryLocationList_deleteByIds'>;
export type InventoryLocationList_postListArgs = OperationArgs<'InventoryLocationList_postList'>;
export type InventoryLocationList_postListResponse = ResponseForOperation<'InventoryLocationList_postList'>;
export type InventoryLocationList_putListArgs = OperationArgs<'InventoryLocationList_putList'>;
export type InventoryLocationList_putListResponse = ResponseForOperation<'InventoryLocationList_putList'>;
export type InventoryStocktaking_deleteArgs = OperationArgs<'InventoryStocktaking_delete'>;
export type InventoryStocktaking_deleteResponse = ResponseForOperation<'InventoryStocktaking_delete'>;
export type InventoryStocktaking_getArgs = OperationArgs<'InventoryStocktaking_get'>;
export type InventoryStocktaking_getResponse = ResponseForOperation<'InventoryStocktaking_get'>;
export type InventoryStocktaking_postArgs = OperationArgs<'InventoryStocktaking_post'>;
export type InventoryStocktaking_postResponse = ResponseForOperation<'InventoryStocktaking_post'>;
export type InventoryStocktaking_putArgs = OperationArgs<'InventoryStocktaking_put'>;
export type InventoryStocktaking_putResponse = ResponseForOperation<'InventoryStocktaking_put'>;
export type InventoryStocktaking_searchArgs = OperationArgs<'InventoryStocktaking_search'>;
export type InventoryStocktaking_searchResponse = ResponseForOperation<'InventoryStocktaking_search'>;
export type InventoryStocktakingProductline_deleteArgs = OperationArgs<'InventoryStocktakingProductline_delete'>;
export type InventoryStocktakingProductline_deleteResponse = ResponseForOperation<'InventoryStocktakingProductline_delete'>;
export type InventoryStocktakingProductline_getArgs = OperationArgs<'InventoryStocktakingProductline_get'>;
export type InventoryStocktakingProductline_getResponse = ResponseForOperation<'InventoryStocktakingProductline_get'>;
export type InventoryStocktakingProductline_postArgs = OperationArgs<'InventoryStocktakingProductline_post'>;
export type InventoryStocktakingProductline_postResponse = ResponseForOperation<'InventoryStocktakingProductline_post'>;
export type InventoryStocktakingProductline_putArgs = OperationArgs<'InventoryStocktakingProductline_put'>;
export type InventoryStocktakingProductline_putResponse = ResponseForOperation<'InventoryStocktakingProductline_put'>;
export type InventoryStocktakingProductline_searchArgs = OperationArgs<'InventoryStocktakingProductline_search'>;
export type InventoryStocktakingProductline_searchResponse = ResponseForOperation<'InventoryStocktakingProductline_search'>;
export type InventoryStocktakingProductlineChangeLocation_changeLocationArgs = OperationArgs<'InventoryStocktakingProductlineChangeLocation_changeLocation'>;
export type InventoryStocktakingProductlineChangeLocation_changeLocationResponse = ResponseForOperation<'InventoryStocktakingProductlineChangeLocation_changeLocation'>;
export type Invoice_getArgs = OperationArgs<'Invoice_get'>;
export type Invoice_getResponse = ResponseForOperation<'Invoice_get'>;
export type Invoice_postArgs = OperationArgs<'Invoice_post'>;
export type Invoice_postResponse = ResponseForOperation<'Invoice_post'>;
export type Invoice_searchArgs = OperationArgs<'Invoice_search'>;
export type Invoice_searchResponse = ResponseForOperation<'Invoice_search'>;
export type InvoiceCreateCreditNote_createCreditNoteArgs = OperationArgs<'InvoiceCreateCreditNote_createCreditNote'>;
export type InvoiceCreateCreditNote_createCreditNoteResponse = ResponseForOperation<'InvoiceCreateCreditNote_createCreditNote'>;
export type InvoiceCreateReminder_createReminderArgs = OperationArgs<'InvoiceCreateReminder_createReminder'>;
export type InvoiceCreateReminder_createReminderResponse = ResponseForOperation<'InvoiceCreateReminder_createReminder'>;
export type InvoiceDetails_getArgs = OperationArgs<'InvoiceDetails_get'>;
export type InvoiceDetails_getResponse = ResponseForOperation<'InvoiceDetails_get'>;
export type InvoiceDetails_searchArgs = OperationArgs<'InvoiceDetails_search'>;
export type InvoiceDetails_searchResponse = ResponseForOperation<'InvoiceDetails_search'>;
export type InvoiceList_postListArgs = OperationArgs<'InvoiceList_postList'>;
export type InvoiceList_postListResponse = ResponseForOperation<'InvoiceList_postList'>;
export type InvoicePayment_paymentArgs = OperationArgs<'InvoicePayment_payment'>;
export type InvoicePayment_paymentResponse = ResponseForOperation<'InvoicePayment_payment'>;
export type InvoicePaymentType_getArgs = OperationArgs<'InvoicePaymentType_get'>;
export type InvoicePaymentType_getResponse = ResponseForOperation<'InvoicePaymentType_get'>;
export type InvoicePaymentType_searchArgs = OperationArgs<'InvoicePaymentType_search'>;
export type InvoicePaymentType_searchResponse = ResponseForOperation<'InvoicePaymentType_search'>;
export type InvoicePdf_downloadPdfArgs = OperationArgs<'InvoicePdf_downloadPdf'>;
export type InvoicePdf_downloadPdfResponse = ResponseForOperation<'InvoicePdf_downloadPdf'>;
export type InvoiceRemark_getArgs = OperationArgs<'InvoiceRemark_get'>;
export type InvoiceRemark_getResponse = ResponseForOperation<'InvoiceRemark_get'>;
export type InvoiceSend_sendArgs = OperationArgs<'InvoiceSend_send'>;
export type InvoiceSend_sendResponse = ResponseForOperation<'InvoiceSend_send'>;
export type Ledger_searchArgs = OperationArgs<'Ledger_search'>;
export type Ledger_searchResponse = ResponseForOperation<'Ledger_search'>;
export type LedgerAccount_deleteArgs = OperationArgs<'LedgerAccount_delete'>;
export type LedgerAccount_deleteResponse = ResponseForOperation<'LedgerAccount_delete'>;
export type LedgerAccount_getArgs = OperationArgs<'LedgerAccount_get'>;
export type LedgerAccount_getResponse = ResponseForOperation<'LedgerAccount_get'>;
export type LedgerAccount_postArgs = OperationArgs<'LedgerAccount_post'>;
export type LedgerAccount_postResponse = ResponseForOperation<'LedgerAccount_post'>;
export type LedgerAccount_putArgs = OperationArgs<'LedgerAccount_put'>;
export type LedgerAccount_putResponse = ResponseForOperation<'LedgerAccount_put'>;
export type LedgerAccount_searchArgs = OperationArgs<'LedgerAccount_search'>;
export type LedgerAccount_searchResponse = ResponseForOperation<'LedgerAccount_search'>;
export type LedgerAccountingDimensionName_deleteArgs = OperationArgs<'LedgerAccountingDimensionName_delete'>;
export type LedgerAccountingDimensionName_deleteResponse = ResponseForOperation<'LedgerAccountingDimensionName_delete'>;
export type LedgerAccountingDimensionName_getArgs = OperationArgs<'LedgerAccountingDimensionName_get'>;
export type LedgerAccountingDimensionName_getResponse = ResponseForOperation<'LedgerAccountingDimensionName_get'>;
export type LedgerAccountingDimensionName_getAllArgs = OperationArgs<'LedgerAccountingDimensionName_getAll'>;
export type LedgerAccountingDimensionName_getAllResponse = ResponseForOperation<'LedgerAccountingDimensionName_getAll'>;
export type LedgerAccountingDimensionName_postArgs = OperationArgs<'LedgerAccountingDimensionName_post'>;
export type LedgerAccountingDimensionName_postResponse = ResponseForOperation<'LedgerAccountingDimensionName_post'>;
export type LedgerAccountingDimensionName_putArgs = OperationArgs<'LedgerAccountingDimensionName_put'>;
export type LedgerAccountingDimensionName_putResponse = ResponseForOperation<'LedgerAccountingDimensionName_put'>;
export type LedgerAccountingDimensionNameSearch_searchArgs = OperationArgs<'LedgerAccountingDimensionNameSearch_search'>;
export type LedgerAccountingDimensionNameSearch_searchResponse = ResponseForOperation<'LedgerAccountingDimensionNameSearch_search'>;
export type LedgerAccountingDimensionValue_deleteArgs = OperationArgs<'LedgerAccountingDimensionValue_delete'>;
export type LedgerAccountingDimensionValue_deleteResponse = ResponseForOperation<'LedgerAccountingDimensionValue_delete'>;
export type LedgerAccountingDimensionValue_getArgs = OperationArgs<'LedgerAccountingDimensionValue_get'>;
export type LedgerAccountingDimensionValue_getResponse = ResponseForOperation<'LedgerAccountingDimensionValue_get'>;
export type LedgerAccountingDimensionValue_postArgs = OperationArgs<'LedgerAccountingDimensionValue_post'>;
export type LedgerAccountingDimensionValue_postResponse = ResponseForOperation<'LedgerAccountingDimensionValue_post'>;
export type LedgerAccountingDimensionValueList_putListArgs = OperationArgs<'LedgerAccountingDimensionValueList_putList'>;
export type LedgerAccountingDimensionValueList_putListResponse = ResponseForOperation<'LedgerAccountingDimensionValueList_putList'>;
export type LedgerAccountingDimensionValueSearch_searchAccountingDimensionValuesArgs = OperationArgs<'LedgerAccountingDimensionValueSearch_searchAccountingDimensionValues'>;
export type LedgerAccountingDimensionValueSearch_searchAccountingDimensionValuesResponse = ResponseForOperation<'LedgerAccountingDimensionValueSearch_searchAccountingDimensionValues'>;
export type LedgerAccountingPeriod_getArgs = OperationArgs<'LedgerAccountingPeriod_get'>;
export type LedgerAccountingPeriod_getResponse = ResponseForOperation<'LedgerAccountingPeriod_get'>;
export type LedgerAccountingPeriod_searchArgs = OperationArgs<'LedgerAccountingPeriod_search'>;
export type LedgerAccountingPeriod_searchResponse = ResponseForOperation<'LedgerAccountingPeriod_search'>;
export type LedgerAccountList_deleteByIdsArgs = OperationArgs<'LedgerAccountList_deleteByIds'>;
export type LedgerAccountList_deleteByIdsResponse = ResponseForOperation<'LedgerAccountList_deleteByIds'>;
export type LedgerAccountList_postListArgs = OperationArgs<'LedgerAccountList_postList'>;
export type LedgerAccountList_postListResponse = ResponseForOperation<'LedgerAccountList_postList'>;
export type LedgerAccountList_putListArgs = OperationArgs<'LedgerAccountList_putList'>;
export type LedgerAccountList_putListResponse = ResponseForOperation<'LedgerAccountList_putList'>;
export type LedgerAnnualAccount_getArgs = OperationArgs<'LedgerAnnualAccount_get'>;
export type LedgerAnnualAccount_getResponse = ResponseForOperation<'LedgerAnnualAccount_get'>;
export type LedgerAnnualAccount_searchArgs = OperationArgs<'LedgerAnnualAccount_search'>;
export type LedgerAnnualAccount_searchResponse = ResponseForOperation<'LedgerAnnualAccount_search'>;
export type LedgerCloseGroup_getArgs = OperationArgs<'LedgerCloseGroup_get'>;
export type LedgerCloseGroup_getResponse = ResponseForOperation<'LedgerCloseGroup_get'>;
export type LedgerCloseGroup_searchArgs = OperationArgs<'LedgerCloseGroup_search'>;
export type LedgerCloseGroup_searchResponse = ResponseForOperation<'LedgerCloseGroup_search'>;
export type LedgerOpenPost_openPostArgs = OperationArgs<'LedgerOpenPost_openPost'>;
export type LedgerOpenPost_openPostResponse = ResponseForOperation<'LedgerOpenPost_openPost'>;
export type LedgerPaymentTypeOut_deleteArgs = OperationArgs<'LedgerPaymentTypeOut_delete'>;
export type LedgerPaymentTypeOut_deleteResponse = ResponseForOperation<'LedgerPaymentTypeOut_delete'>;
export type LedgerPaymentTypeOut_getArgs = OperationArgs<'LedgerPaymentTypeOut_get'>;
export type LedgerPaymentTypeOut_getResponse = ResponseForOperation<'LedgerPaymentTypeOut_get'>;
export type LedgerPaymentTypeOut_postArgs = OperationArgs<'LedgerPaymentTypeOut_post'>;
export type LedgerPaymentTypeOut_postResponse = ResponseForOperation<'LedgerPaymentTypeOut_post'>;
export type LedgerPaymentTypeOut_putArgs = OperationArgs<'LedgerPaymentTypeOut_put'>;
export type LedgerPaymentTypeOut_putResponse = ResponseForOperation<'LedgerPaymentTypeOut_put'>;
export type LedgerPaymentTypeOut_searchArgs = OperationArgs<'LedgerPaymentTypeOut_search'>;
export type LedgerPaymentTypeOut_searchResponse = ResponseForOperation<'LedgerPaymentTypeOut_search'>;
export type LedgerPaymentTypeOutList_postListArgs = OperationArgs<'LedgerPaymentTypeOutList_postList'>;
export type LedgerPaymentTypeOutList_postListResponse = ResponseForOperation<'LedgerPaymentTypeOutList_postList'>;
export type LedgerPaymentTypeOutList_putListArgs = OperationArgs<'LedgerPaymentTypeOutList_putList'>;
export type LedgerPaymentTypeOutList_putListResponse = ResponseForOperation<'LedgerPaymentTypeOutList_putList'>;
export type LedgerPosting_getArgs = OperationArgs<'LedgerPosting_get'>;
export type LedgerPosting_getResponse = ResponseForOperation<'LedgerPosting_get'>;
export type LedgerPosting_searchArgs = OperationArgs<'LedgerPosting_search'>;
export type LedgerPosting_searchResponse = ResponseForOperation<'LedgerPosting_search'>;
export type LedgerPostingByDate_getArgs = OperationArgs<'LedgerPostingByDate_get'>;
export type LedgerPostingByDate_getResponse = ResponseForOperation<'LedgerPostingByDate_get'>;
export type LedgerPostingClosePostings_closePostingsArgs = OperationArgs<'LedgerPostingClosePostings_closePostings'>;
export type LedgerPostingClosePostings_closePostingsResponse = ResponseForOperation<'LedgerPostingClosePostings_closePostings'>;
export type LedgerPostingOpenPost_openPostArgs = OperationArgs<'LedgerPostingOpenPost_openPost'>;
export type LedgerPostingOpenPost_openPostResponse = ResponseForOperation<'LedgerPostingOpenPost_openPost'>;
export type LedgerPostingRules_getArgs = OperationArgs<'LedgerPostingRules_get'>;
export type LedgerPostingRules_getResponse = ResponseForOperation<'LedgerPostingRules_get'>;
export type LedgerVatSettings_getArgs = OperationArgs<'LedgerVatSettings_get'>;
export type LedgerVatSettings_getResponse = ResponseForOperation<'LedgerVatSettings_get'>;
export type LedgerVatSettings_putArgs = OperationArgs<'LedgerVatSettings_put'>;
export type LedgerVatSettings_putResponse = ResponseForOperation<'LedgerVatSettings_put'>;
export type LedgerVatType_getArgs = OperationArgs<'LedgerVatType_get'>;
export type LedgerVatType_getResponse = ResponseForOperation<'LedgerVatType_get'>;
export type LedgerVatType_searchArgs = OperationArgs<'LedgerVatType_search'>;
export type LedgerVatType_searchResponse = ResponseForOperation<'LedgerVatType_search'>;
export type LedgerVatTypeCreateRelativeVatType_createRelativeVatTypeArgs = OperationArgs<'LedgerVatTypeCreateRelativeVatType_createRelativeVatType'>;
export type LedgerVatTypeCreateRelativeVatType_createRelativeVatTypeResponse = ResponseForOperation<'LedgerVatTypeCreateRelativeVatType_createRelativeVatType'>;
export type LedgerVoucher_deleteArgs = OperationArgs<'LedgerVoucher_delete'>;
export type LedgerVoucher_deleteResponse = ResponseForOperation<'LedgerVoucher_delete'>;
export type LedgerVoucher_getArgs = OperationArgs<'LedgerVoucher_get'>;
export type LedgerVoucher_getResponse = ResponseForOperation<'LedgerVoucher_get'>;
export type LedgerVoucher_postArgs = OperationArgs<'LedgerVoucher_post'>;
export type LedgerVoucher_postResponse = ResponseForOperation<'LedgerVoucher_post'>;
export type LedgerVoucher_putArgs = OperationArgs<'LedgerVoucher_put'>;
export type LedgerVoucher_putResponse = ResponseForOperation<'LedgerVoucher_put'>;
export type LedgerVoucher_searchArgs = OperationArgs<'LedgerVoucher_search'>;
export type LedgerVoucher_searchResponse = ResponseForOperation<'LedgerVoucher_search'>;
export type LedgerVoucherAttachment_deleteAttachmentArgs = OperationArgs<'LedgerVoucherAttachment_deleteAttachment'>;
export type LedgerVoucherAttachment_deleteAttachmentResponse = ResponseForOperation<'LedgerVoucherAttachment_deleteAttachment'>;
export type LedgerVoucherAttachment_uploadAttachmentArgs = OperationArgs<'LedgerVoucherAttachment_uploadAttachment'>;
export type LedgerVoucherAttachment_uploadAttachmentResponse = ResponseForOperation<'LedgerVoucherAttachment_uploadAttachment'>;
export type LedgerVoucherExternalVoucherNumber_externalVoucherNumberArgs = OperationArgs<'LedgerVoucherExternalVoucherNumber_externalVoucherNumber'>;
export type LedgerVoucherExternalVoucherNumber_externalVoucherNumberResponse = ResponseForOperation<'LedgerVoucherExternalVoucherNumber_externalVoucherNumber'>;
export type LedgerVoucherHistoricalAttachment_uploadAttachmentArgs = OperationArgs<'LedgerVoucherHistoricalAttachment_uploadAttachment'>;
export type LedgerVoucherHistoricalAttachment_uploadAttachmentResponse = ResponseForOperation<'LedgerVoucherHistoricalAttachment_uploadAttachment'>;
export type LedgerVoucherHistoricalClosePostings_closePostingsArgs = OperationArgs<'LedgerVoucherHistoricalClosePostings_closePostings'>;
export type LedgerVoucherHistoricalClosePostings_closePostingsResponse = ResponseForOperation<'LedgerVoucherHistoricalClosePostings_closePostings'>;
export type LedgerVoucherHistoricalEmployee_postEmployeeArgs = OperationArgs<'LedgerVoucherHistoricalEmployee_postEmployee'>;
export type LedgerVoucherHistoricalEmployee_postEmployeeResponse = ResponseForOperation<'LedgerVoucherHistoricalEmployee_postEmployee'>;
export type LedgerVoucherHistoricalHistorical_postHistoricalArgs = OperationArgs<'LedgerVoucherHistoricalHistorical_postHistorical'>;
export type LedgerVoucherHistoricalHistorical_postHistoricalResponse = ResponseForOperation<'LedgerVoucherHistoricalHistorical_postHistorical'>;
export type LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchersArgs = OperationArgs<'LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchers'>;
export type LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchersResponse = ResponseForOperation<'LedgerVoucherHistoricalReverseHistoricalVouchers_reverseHistoricalVouchers'>;
export type LedgerVoucherImportDocument_importDocumentArgs = OperationArgs<'LedgerVoucherImportDocument_importDocument'>;
export type LedgerVoucherImportDocument_importDocumentResponse = ResponseForOperation<'LedgerVoucherImportDocument_importDocument'>;
export type LedgerVoucherImportGbat10_importGbat10Args = OperationArgs<'LedgerVoucherImportGbat10_importGbat10'>;
export type LedgerVoucherImportGbat10_importGbat10Response = ResponseForOperation<'LedgerVoucherImportGbat10_importGbat10'>;
export type LedgerVoucherList_putListArgs = OperationArgs<'LedgerVoucherList_putList'>;
export type LedgerVoucherList_putListResponse = ResponseForOperation<'LedgerVoucherList_putList'>;
export type LedgerVoucherNonPosted_nonPostedArgs = OperationArgs<'LedgerVoucherNonPosted_nonPosted'>;
export type LedgerVoucherNonPosted_nonPostedResponse = ResponseForOperation<'LedgerVoucherNonPosted_nonPosted'>;
export type LedgerVoucherOpeningBalance_deleteArgs = OperationArgs<'LedgerVoucherOpeningBalance_delete'>;
export type LedgerVoucherOpeningBalance_deleteResponse = ResponseForOperation<'LedgerVoucherOpeningBalance_delete'>;
export type LedgerVoucherOpeningBalance_getArgs = OperationArgs<'LedgerVoucherOpeningBalance_get'>;
export type LedgerVoucherOpeningBalance_getResponse = ResponseForOperation<'LedgerVoucherOpeningBalance_get'>;
export type LedgerVoucherOpeningBalance_postArgs = OperationArgs<'LedgerVoucherOpeningBalance_post'>;
export type LedgerVoucherOpeningBalance_postResponse = ResponseForOperation<'LedgerVoucherOpeningBalance_post'>;
export type LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucherArgs = OperationArgs<'LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucher'>;
export type LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucherResponse = ResponseForOperation<'LedgerVoucherOpeningBalanceCorrectionVoucher_correctionVoucher'>;
export type LedgerVoucherOptions_optionsArgs = OperationArgs<'LedgerVoucherOptions_options'>;
export type LedgerVoucherOptions_optionsResponse = ResponseForOperation<'LedgerVoucherOptions_options'>;
export type LedgerVoucherPdf_downloadPdfArgs = OperationArgs<'LedgerVoucherPdf_downloadPdf'>;
export type LedgerVoucherPdf_downloadPdfResponse = ResponseForOperation<'LedgerVoucherPdf_downloadPdf'>;
export type LedgerVoucherPdf_uploadPdfArgs = OperationArgs<'LedgerVoucherPdf_uploadPdf'>;
export type LedgerVoucherPdf_uploadPdfResponse = ResponseForOperation<'LedgerVoucherPdf_uploadPdf'>;
export type LedgerVoucherReverse_reverseArgs = OperationArgs<'LedgerVoucherReverse_reverse'>;
export type LedgerVoucherReverse_reverseResponse = ResponseForOperation<'LedgerVoucherReverse_reverse'>;
export type LedgerVoucherSendToInbox_sendToInboxArgs = OperationArgs<'LedgerVoucherSendToInbox_sendToInbox'>;
export type LedgerVoucherSendToInbox_sendToInboxResponse = ResponseForOperation<'LedgerVoucherSendToInbox_sendToInbox'>;
export type LedgerVoucherSendToLedger_sendToLedgerArgs = OperationArgs<'LedgerVoucherSendToLedger_sendToLedger'>;
export type LedgerVoucherSendToLedger_sendToLedgerResponse = ResponseForOperation<'LedgerVoucherSendToLedger_sendToLedger'>;
export type LedgerVoucherType_getArgs = OperationArgs<'LedgerVoucherType_get'>;
export type LedgerVoucherType_getResponse = ResponseForOperation<'LedgerVoucherType_get'>;
export type LedgerVoucherType_searchArgs = OperationArgs<'LedgerVoucherType_search'>;
export type LedgerVoucherType_searchResponse = ResponseForOperation<'LedgerVoucherType_search'>;
export type LedgerVoucherVoucherReception_voucherReceptionArgs = OperationArgs<'LedgerVoucherVoucherReception_voucherReception'>;
export type LedgerVoucherVoucherReception_voucherReceptionResponse = ResponseForOperation<'LedgerVoucherVoucherReception_voucherReception'>;
export type Municipality_searchArgs = OperationArgs<'Municipality_search'>;
export type Municipality_searchResponse = ResponseForOperation<'Municipality_search'>;
export type MunicipalityQuery_queryArgs = OperationArgs<'MunicipalityQuery_query'>;
export type MunicipalityQuery_queryResponse = ResponseForOperation<'MunicipalityQuery_query'>;
export type Order_deleteArgs = OperationArgs<'Order_delete'>;
export type Order_deleteResponse = ResponseForOperation<'Order_delete'>;
export type Order_getArgs = OperationArgs<'Order_get'>;
export type Order_getResponse = ResponseForOperation<'Order_get'>;
export type Order_postArgs = OperationArgs<'Order_post'>;
export type Order_postResponse = ResponseForOperation<'Order_post'>;
export type Order_putArgs = OperationArgs<'Order_put'>;
export type Order_putResponse = ResponseForOperation<'Order_put'>;
export type Order_searchArgs = OperationArgs<'Order_search'>;
export type Order_searchResponse = ResponseForOperation<'Order_search'>;
export type OrderApproveSubscriptionInvoice_approveSubscriptionInvoiceArgs = OperationArgs<'OrderApproveSubscriptionInvoice_approveSubscriptionInvoice'>;
export type OrderApproveSubscriptionInvoice_approveSubscriptionInvoiceResponse = ResponseForOperation<'OrderApproveSubscriptionInvoice_approveSubscriptionInvoice'>;
export type OrderAttach_attachArgs = OperationArgs<'OrderAttach_attach'>;
export type OrderAttach_attachResponse = ResponseForOperation<'OrderAttach_attach'>;
export type OrderInvoice_invoiceArgs = OperationArgs<'OrderInvoice_invoice'>;
export type OrderInvoice_invoiceResponse = ResponseForOperation<'OrderInvoice_invoice'>;
export type OrderInvoiceMultipleOrders_invoiceMultipleOrdersArgs = OperationArgs<'OrderInvoiceMultipleOrders_invoiceMultipleOrders'>;
export type OrderInvoiceMultipleOrders_invoiceMultipleOrdersResponse = ResponseForOperation<'OrderInvoiceMultipleOrders_invoiceMultipleOrders'>;
export type OrderList_postListArgs = OperationArgs<'OrderList_postList'>;
export type OrderList_postListResponse = ResponseForOperation<'OrderList_postList'>;
export type OrderOrderConfirmationPdf_downloadPdfArgs = OperationArgs<'OrderOrderConfirmationPdf_downloadPdf'>;
export type OrderOrderConfirmationPdf_downloadPdfResponse = ResponseForOperation<'OrderOrderConfirmationPdf_downloadPdf'>;
export type OrderOrderGroup_deleteArgs = OperationArgs<'OrderOrderGroup_delete'>;
export type OrderOrderGroup_deleteResponse = ResponseForOperation<'OrderOrderGroup_delete'>;
export type OrderOrderGroup_getArgs = OperationArgs<'OrderOrderGroup_get'>;
export type OrderOrderGroup_getResponse = ResponseForOperation<'OrderOrderGroup_get'>;
export type OrderOrderGroup_postArgs = OperationArgs<'OrderOrderGroup_post'>;
export type OrderOrderGroup_postResponse = ResponseForOperation<'OrderOrderGroup_post'>;
export type OrderOrderGroup_putArgs = OperationArgs<'OrderOrderGroup_put'>;
export type OrderOrderGroup_putResponse = ResponseForOperation<'OrderOrderGroup_put'>;
export type OrderOrderGroup_searchArgs = OperationArgs<'OrderOrderGroup_search'>;
export type OrderOrderGroup_searchResponse = ResponseForOperation<'OrderOrderGroup_search'>;
export type OrderOrderline_deleteArgs = OperationArgs<'OrderOrderline_delete'>;
export type OrderOrderline_deleteResponse = ResponseForOperation<'OrderOrderline_delete'>;
export type OrderOrderline_getArgs = OperationArgs<'OrderOrderline_get'>;
export type OrderOrderline_getResponse = ResponseForOperation<'OrderOrderline_get'>;
export type OrderOrderline_postArgs = OperationArgs<'OrderOrderline_post'>;
export type OrderOrderline_postResponse = ResponseForOperation<'OrderOrderline_post'>;
export type OrderOrderline_putArgs = OperationArgs<'OrderOrderline_put'>;
export type OrderOrderline_putResponse = ResponseForOperation<'OrderOrderline_put'>;
export type OrderOrderlineList_postListArgs = OperationArgs<'OrderOrderlineList_postList'>;
export type OrderOrderlineList_postListResponse = ResponseForOperation<'OrderOrderlineList_postList'>;
export type OrderOrderlineOrderLineTemplate_orderLineTemplateArgs = OperationArgs<'OrderOrderlineOrderLineTemplate_orderLineTemplate'>;
export type OrderOrderlineOrderLineTemplate_orderLineTemplateResponse = ResponseForOperation<'OrderOrderlineOrderLineTemplate_orderLineTemplate'>;
export type OrderOrderlinePickLine_pickLineArgs = OperationArgs<'OrderOrderlinePickLine_pickLine'>;
export type OrderOrderlinePickLine_pickLineResponse = ResponseForOperation<'OrderOrderlinePickLine_pickLine'>;
export type OrderOrderlineUnpickLine_unpickLineArgs = OperationArgs<'OrderOrderlineUnpickLine_unpickLine'>;
export type OrderOrderlineUnpickLine_unpickLineResponse = ResponseForOperation<'OrderOrderlineUnpickLine_unpickLine'>;
export type OrderPackingNotePdf_downloadPackingNotePdfArgs = OperationArgs<'OrderPackingNotePdf_downloadPackingNotePdf'>;
export type OrderPackingNotePdf_downloadPackingNotePdfResponse = ResponseForOperation<'OrderPackingNotePdf_downloadPackingNotePdf'>;
export type OrderSendInvoicePreview_postInvoicePreviewArgs = OperationArgs<'OrderSendInvoicePreview_postInvoicePreview'>;
export type OrderSendInvoicePreview_postInvoicePreviewResponse = ResponseForOperation<'OrderSendInvoicePreview_postInvoicePreview'>;
export type OrderSendOrderConfirmation_postOrderConfirmationArgs = OperationArgs<'OrderSendOrderConfirmation_postOrderConfirmation'>;
export type OrderSendOrderConfirmation_postOrderConfirmationResponse = ResponseForOperation<'OrderSendOrderConfirmation_postOrderConfirmation'>;
export type OrderSendPackingNote_postPackingNoteArgs = OperationArgs<'OrderSendPackingNote_postPackingNote'>;
export type OrderSendPackingNote_postPackingNoteResponse = ResponseForOperation<'OrderSendPackingNote_postPackingNote'>;
export type OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoiceArgs = OperationArgs<'OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoice'>;
export type OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoiceResponse = ResponseForOperation<'OrderUnApproveSubscriptionInvoice_unApproveSubscriptionInvoice'>;
export type Pension_searchArgs = OperationArgs<'Pension_search'>;
export type Pension_searchResponse = ResponseForOperation<'Pension_search'>;
export type PickupPoint_getArgs = OperationArgs<'PickupPoint_get'>;
export type PickupPoint_getResponse = ResponseForOperation<'PickupPoint_get'>;
export type PickupPoint_searchArgs = OperationArgs<'PickupPoint_search'>;
export type PickupPoint_searchResponse = ResponseForOperation<'PickupPoint_search'>;
export type PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerIdArgs = OperationArgs<'PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerId'>;
export type PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerIdResponse = ResponseForOperation<'PlatformAgnosticBankOnboardingFetchOdpCustomerId_fetchOdpCustomerId'>;
export type Product_deleteArgs = OperationArgs<'Product_delete'>;
export type Product_deleteResponse = ResponseForOperation<'Product_delete'>;
export type Product_getArgs = OperationArgs<'Product_get'>;
export type Product_getResponse = ResponseForOperation<'Product_get'>;
export type Product_postArgs = OperationArgs<'Product_post'>;
export type Product_postResponse = ResponseForOperation<'Product_post'>;
export type Product_putArgs = OperationArgs<'Product_put'>;
export type Product_putResponse = ResponseForOperation<'Product_put'>;
export type Product_searchArgs = OperationArgs<'Product_search'>;
export type Product_searchResponse = ResponseForOperation<'Product_search'>;
export type ProductDiscountGroup_getArgs = OperationArgs<'ProductDiscountGroup_get'>;
export type ProductDiscountGroup_getResponse = ResponseForOperation<'ProductDiscountGroup_get'>;
export type ProductDiscountGroup_searchArgs = OperationArgs<'ProductDiscountGroup_search'>;
export type ProductDiscountGroup_searchResponse = ResponseForOperation<'ProductDiscountGroup_search'>;
export type ProductExternal_getArgs = OperationArgs<'ProductExternal_get'>;
export type ProductExternal_getResponse = ResponseForOperation<'ProductExternal_get'>;
export type ProductExternal_searchArgs = OperationArgs<'ProductExternal_search'>;
export type ProductExternal_searchResponse = ResponseForOperation<'ProductExternal_search'>;
export type ProductGroup_deleteArgs = OperationArgs<'ProductGroup_delete'>;
export type ProductGroup_deleteResponse = ResponseForOperation<'ProductGroup_delete'>;
export type ProductGroup_getArgs = OperationArgs<'ProductGroup_get'>;
export type ProductGroup_getResponse = ResponseForOperation<'ProductGroup_get'>;
export type ProductGroup_postArgs = OperationArgs<'ProductGroup_post'>;
export type ProductGroup_postResponse = ResponseForOperation<'ProductGroup_post'>;
export type ProductGroup_putArgs = OperationArgs<'ProductGroup_put'>;
export type ProductGroup_putResponse = ResponseForOperation<'ProductGroup_put'>;
export type ProductGroup_searchArgs = OperationArgs<'ProductGroup_search'>;
export type ProductGroup_searchResponse = ResponseForOperation<'ProductGroup_search'>;
export type ProductGroupList_deleteByIdsArgs = OperationArgs<'ProductGroupList_deleteByIds'>;
export type ProductGroupList_deleteByIdsResponse = ResponseForOperation<'ProductGroupList_deleteByIds'>;
export type ProductGroupList_postListArgs = OperationArgs<'ProductGroupList_postList'>;
export type ProductGroupList_postListResponse = ResponseForOperation<'ProductGroupList_postList'>;
export type ProductGroupList_putListArgs = OperationArgs<'ProductGroupList_putList'>;
export type ProductGroupList_putListResponse = ResponseForOperation<'ProductGroupList_putList'>;
export type ProductGroupQuery_queryArgs = OperationArgs<'ProductGroupQuery_query'>;
export type ProductGroupQuery_queryResponse = ResponseForOperation<'ProductGroupQuery_query'>;
export type ProductGroupRelation_deleteArgs = OperationArgs<'ProductGroupRelation_delete'>;
export type ProductGroupRelation_deleteResponse = ResponseForOperation<'ProductGroupRelation_delete'>;
export type ProductGroupRelation_getArgs = OperationArgs<'ProductGroupRelation_get'>;
export type ProductGroupRelation_getResponse = ResponseForOperation<'ProductGroupRelation_get'>;
export type ProductGroupRelation_postArgs = OperationArgs<'ProductGroupRelation_post'>;
export type ProductGroupRelation_postResponse = ResponseForOperation<'ProductGroupRelation_post'>;
export type ProductGroupRelation_searchArgs = OperationArgs<'ProductGroupRelation_search'>;
export type ProductGroupRelation_searchResponse = ResponseForOperation<'ProductGroupRelation_search'>;
export type ProductGroupRelationList_deleteListArgs = OperationArgs<'ProductGroupRelationList_deleteList'>;
export type ProductGroupRelationList_deleteListResponse = ResponseForOperation<'ProductGroupRelationList_deleteList'>;
export type ProductGroupRelationList_postListArgs = OperationArgs<'ProductGroupRelationList_postList'>;
export type ProductGroupRelationList_postListResponse = ResponseForOperation<'ProductGroupRelationList_postList'>;
export type ProductImage_deleteImageArgs = OperationArgs<'ProductImage_deleteImage'>;
export type ProductImage_deleteImageResponse = ResponseForOperation<'ProductImage_deleteImage'>;
export type ProductImage_uploadImageArgs = OperationArgs<'ProductImage_uploadImage'>;
export type ProductImage_uploadImageResponse = ResponseForOperation<'ProductImage_uploadImage'>;
export type ProductInventoryLocation_deleteArgs = OperationArgs<'ProductInventoryLocation_delete'>;
export type ProductInventoryLocation_deleteResponse = ResponseForOperation<'ProductInventoryLocation_delete'>;
export type ProductInventoryLocation_getArgs = OperationArgs<'ProductInventoryLocation_get'>;
export type ProductInventoryLocation_getResponse = ResponseForOperation<'ProductInventoryLocation_get'>;
export type ProductInventoryLocation_postArgs = OperationArgs<'ProductInventoryLocation_post'>;
export type ProductInventoryLocation_postResponse = ResponseForOperation<'ProductInventoryLocation_post'>;
export type ProductInventoryLocation_putArgs = OperationArgs<'ProductInventoryLocation_put'>;
export type ProductInventoryLocation_putResponse = ResponseForOperation<'ProductInventoryLocation_put'>;
export type ProductInventoryLocation_searchArgs = OperationArgs<'ProductInventoryLocation_search'>;
export type ProductInventoryLocation_searchResponse = ResponseForOperation<'ProductInventoryLocation_search'>;
export type ProductInventoryLocationList_postListArgs = OperationArgs<'ProductInventoryLocationList_postList'>;
export type ProductInventoryLocationList_postListResponse = ResponseForOperation<'ProductInventoryLocationList_postList'>;
export type ProductInventoryLocationList_putListArgs = OperationArgs<'ProductInventoryLocationList_putList'>;
export type ProductInventoryLocationList_putListResponse = ResponseForOperation<'ProductInventoryLocationList_putList'>;
export type ProductList_postListArgs = OperationArgs<'ProductList_postList'>;
export type ProductList_postListResponse = ResponseForOperation<'ProductList_postList'>;
export type ProductList_putListArgs = OperationArgs<'ProductList_putList'>;
export type ProductList_putListResponse = ResponseForOperation<'ProductList_putList'>;
export type ProductLogisticsSettings_getArgs = OperationArgs<'ProductLogisticsSettings_get'>;
export type ProductLogisticsSettings_getResponse = ResponseForOperation<'ProductLogisticsSettings_get'>;
export type ProductLogisticsSettings_putArgs = OperationArgs<'ProductLogisticsSettings_put'>;
export type ProductLogisticsSettings_putResponse = ResponseForOperation<'ProductLogisticsSettings_put'>;
export type ProductProductPrice_searchArgs = OperationArgs<'ProductProductPrice_search'>;
export type ProductProductPrice_searchResponse = ResponseForOperation<'ProductProductPrice_search'>;
export type ProductSupplierProduct_deleteArgs = OperationArgs<'ProductSupplierProduct_delete'>;
export type ProductSupplierProduct_deleteResponse = ResponseForOperation<'ProductSupplierProduct_delete'>;
export type ProductSupplierProduct_getArgs = OperationArgs<'ProductSupplierProduct_get'>;
export type ProductSupplierProduct_getResponse = ResponseForOperation<'ProductSupplierProduct_get'>;
export type ProductSupplierProduct_postArgs = OperationArgs<'ProductSupplierProduct_post'>;
export type ProductSupplierProduct_postResponse = ResponseForOperation<'ProductSupplierProduct_post'>;
export type ProductSupplierProduct_putArgs = OperationArgs<'ProductSupplierProduct_put'>;
export type ProductSupplierProduct_putResponse = ResponseForOperation<'ProductSupplierProduct_put'>;
export type ProductSupplierProduct_searchArgs = OperationArgs<'ProductSupplierProduct_search'>;
export type ProductSupplierProduct_searchResponse = ResponseForOperation<'ProductSupplierProduct_search'>;
export type ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIdsArgs = OperationArgs<'ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIds'>;
export type ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIdsResponse = ResponseForOperation<'ProductSupplierProductGetSupplierProductsByIds_getSupplierProductsByIds'>;
export type ProductSupplierProductList_postListArgs = OperationArgs<'ProductSupplierProductList_postList'>;
export type ProductSupplierProductList_postListResponse = ResponseForOperation<'ProductSupplierProductList_postList'>;
export type ProductSupplierProductList_putListArgs = OperationArgs<'ProductSupplierProductList_putList'>;
export type ProductSupplierProductList_putListResponse = ResponseForOperation<'ProductSupplierProductList_putList'>;
export type ProductUnit_deleteArgs = OperationArgs<'ProductUnit_delete'>;
export type ProductUnit_deleteResponse = ResponseForOperation<'ProductUnit_delete'>;
export type ProductUnit_getArgs = OperationArgs<'ProductUnit_get'>;
export type ProductUnit_getResponse = ResponseForOperation<'ProductUnit_get'>;
export type ProductUnit_postArgs = OperationArgs<'ProductUnit_post'>;
export type ProductUnit_postResponse = ResponseForOperation<'ProductUnit_post'>;
export type ProductUnit_putArgs = OperationArgs<'ProductUnit_put'>;
export type ProductUnit_putResponse = ResponseForOperation<'ProductUnit_put'>;
export type ProductUnit_searchArgs = OperationArgs<'ProductUnit_search'>;
export type ProductUnit_searchResponse = ResponseForOperation<'ProductUnit_search'>;
export type ProductUnitList_postListArgs = OperationArgs<'ProductUnitList_postList'>;
export type ProductUnitList_postListResponse = ResponseForOperation<'ProductUnitList_postList'>;
export type ProductUnitList_putListArgs = OperationArgs<'ProductUnitList_putList'>;
export type ProductUnitList_putListResponse = ResponseForOperation<'ProductUnitList_putList'>;
export type ProductUnitMaster_getArgs = OperationArgs<'ProductUnitMaster_get'>;
export type ProductUnitMaster_getResponse = ResponseForOperation<'ProductUnitMaster_get'>;
export type ProductUnitMaster_searchArgs = OperationArgs<'ProductUnitMaster_search'>;
export type ProductUnitMaster_searchResponse = ResponseForOperation<'ProductUnitMaster_search'>;
export type ProductUnitQuery_queryArgs = OperationArgs<'ProductUnitQuery_query'>;
export type ProductUnitQuery_queryResponse = ResponseForOperation<'ProductUnitQuery_query'>;
export type Project_deleteArgs = OperationArgs<'Project_delete'>;
export type Project_deleteResponse = ResponseForOperation<'Project_delete'>;
export type Project_deleteListArgs = OperationArgs<'Project_deleteList'>;
export type Project_deleteListResponse = ResponseForOperation<'Project_deleteList'>;
export type Project_getArgs = OperationArgs<'Project_get'>;
export type Project_getResponse = ResponseForOperation<'Project_get'>;
export type Project_postArgs = OperationArgs<'Project_post'>;
export type Project_postResponse = ResponseForOperation<'Project_post'>;
export type Project_putArgs = OperationArgs<'Project_put'>;
export type Project_putResponse = ResponseForOperation<'Project_put'>;
export type Project_searchArgs = OperationArgs<'Project_search'>;
export type Project_searchResponse = ResponseForOperation<'Project_search'>;
export type ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIdsArgs = OperationArgs<'ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIds'>;
export type ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIdsResponse = ResponseForOperation<'ProjectBatchPeriodBudgetStatusByProjectIds_budgetStatusByProjectIds'>;
export type ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIdsArgs = OperationArgs<'ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIds'>;
export type ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIdsResponse = ResponseForOperation<'ProjectBatchPeriodInvoicingReserveByProjectIds_invoicingReserveByProjectIds'>;
export type ProjectCategory_getArgs = OperationArgs<'ProjectCategory_get'>;
export type ProjectCategory_getResponse = ResponseForOperation<'ProjectCategory_get'>;
export type ProjectCategory_postArgs = OperationArgs<'ProjectCategory_post'>;
export type ProjectCategory_postResponse = ResponseForOperation<'ProjectCategory_post'>;
export type ProjectCategory_putArgs = OperationArgs<'ProjectCategory_put'>;
export type ProjectCategory_putResponse = ResponseForOperation<'ProjectCategory_put'>;
export type ProjectCategory_searchArgs = OperationArgs<'ProjectCategory_search'>;
export type ProjectCategory_searchResponse = ResponseForOperation<'ProjectCategory_search'>;
export type ProjectControlForm_getArgs = OperationArgs<'ProjectControlForm_get'>;
export type ProjectControlForm_getResponse = ResponseForOperation<'ProjectControlForm_get'>;
export type ProjectControlForm_searchArgs = OperationArgs<'ProjectControlForm_search'>;
export type ProjectControlForm_searchResponse = ResponseForOperation<'ProjectControlForm_search'>;
export type ProjectControlFormType_getArgs = OperationArgs<'ProjectControlFormType_get'>;
export type ProjectControlFormType_getResponse = ResponseForOperation<'ProjectControlFormType_get'>;
export type ProjectControlFormType_searchArgs = OperationArgs<'ProjectControlFormType_search'>;
export type ProjectControlFormType_searchResponse = ResponseForOperation<'ProjectControlFormType_search'>;
export type ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedFormArgs = OperationArgs<'ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedForm'>;
export type ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedFormResponse = ResponseForOperation<'ProjectDynamicControlFormCopyFieldValuesFromLastEditedForm_copyFieldValuesFromLastEditedForm'>;
export type ProjectForTimeSheet_getForTimeSheetArgs = OperationArgs<'ProjectForTimeSheet_getForTimeSheet'>;
export type ProjectForTimeSheet_getForTimeSheetResponse = ResponseForOperation<'ProjectForTimeSheet_getForTimeSheet'>;
export type ProjectHourlyRates_deleteArgs = OperationArgs<'ProjectHourlyRates_delete'>;
export type ProjectHourlyRates_deleteResponse = ResponseForOperation<'ProjectHourlyRates_delete'>;
export type ProjectHourlyRates_getArgs = OperationArgs<'ProjectHourlyRates_get'>;
export type ProjectHourlyRates_getResponse = ResponseForOperation<'ProjectHourlyRates_get'>;
export type ProjectHourlyRates_postArgs = OperationArgs<'ProjectHourlyRates_post'>;
export type ProjectHourlyRates_postResponse = ResponseForOperation<'ProjectHourlyRates_post'>;
export type ProjectHourlyRates_putArgs = OperationArgs<'ProjectHourlyRates_put'>;
export type ProjectHourlyRates_putResponse = ResponseForOperation<'ProjectHourlyRates_put'>;
export type ProjectHourlyRates_searchArgs = OperationArgs<'ProjectHourlyRates_search'>;
export type ProjectHourlyRates_searchResponse = ResponseForOperation<'ProjectHourlyRates_search'>;
export type ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIdsArgs = OperationArgs<'ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIds'>;
export type ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIdsResponse = ResponseForOperation<'ProjectHourlyRatesDeleteByProjectIds_deleteByProjectIds'>;
export type ProjectHourlyRatesList_deleteByIdsArgs = OperationArgs<'ProjectHourlyRatesList_deleteByIds'>;
export type ProjectHourlyRatesList_deleteByIdsResponse = ResponseForOperation<'ProjectHourlyRatesList_deleteByIds'>;
export type ProjectHourlyRatesList_postListArgs = OperationArgs<'ProjectHourlyRatesList_postList'>;
export type ProjectHourlyRatesList_postListResponse = ResponseForOperation<'ProjectHourlyRatesList_postList'>;
export type ProjectHourlyRatesList_putListArgs = OperationArgs<'ProjectHourlyRatesList_putList'>;
export type ProjectHourlyRatesList_putListResponse = ResponseForOperation<'ProjectHourlyRatesList_putList'>;
export type ProjectHourlyRatesProjectSpecificRates_deleteArgs = OperationArgs<'ProjectHourlyRatesProjectSpecificRates_delete'>;
export type ProjectHourlyRatesProjectSpecificRates_deleteResponse = ResponseForOperation<'ProjectHourlyRatesProjectSpecificRates_delete'>;
export type ProjectHourlyRatesProjectSpecificRates_getArgs = OperationArgs<'ProjectHourlyRatesProjectSpecificRates_get'>;
export type ProjectHourlyRatesProjectSpecificRates_getResponse = ResponseForOperation<'ProjectHourlyRatesProjectSpecificRates_get'>;
export type ProjectHourlyRatesProjectSpecificRates_postArgs = OperationArgs<'ProjectHourlyRatesProjectSpecificRates_post'>;
export type ProjectHourlyRatesProjectSpecificRates_postResponse = ResponseForOperation<'ProjectHourlyRatesProjectSpecificRates_post'>;
export type ProjectHourlyRatesProjectSpecificRates_putArgs = OperationArgs<'ProjectHourlyRatesProjectSpecificRates_put'>;
export type ProjectHourlyRatesProjectSpecificRates_putResponse = ResponseForOperation<'ProjectHourlyRatesProjectSpecificRates_put'>;
export type ProjectHourlyRatesProjectSpecificRates_searchArgs = OperationArgs<'ProjectHourlyRatesProjectSpecificRates_search'>;
export type ProjectHourlyRatesProjectSpecificRates_searchResponse = ResponseForOperation<'ProjectHourlyRatesProjectSpecificRates_search'>;
export type ProjectHourlyRatesProjectSpecificRatesList_deleteByIdsArgs = OperationArgs<'ProjectHourlyRatesProjectSpecificRatesList_deleteByIds'>;
export type ProjectHourlyRatesProjectSpecificRatesList_deleteByIdsResponse = ResponseForOperation<'ProjectHourlyRatesProjectSpecificRatesList_deleteByIds'>;
export type ProjectHourlyRatesProjectSpecificRatesList_postListArgs = OperationArgs<'ProjectHourlyRatesProjectSpecificRatesList_postList'>;
export type ProjectHourlyRatesProjectSpecificRatesList_postListResponse = ResponseForOperation<'ProjectHourlyRatesProjectSpecificRatesList_postList'>;
export type ProjectHourlyRatesProjectSpecificRatesList_putListArgs = OperationArgs<'ProjectHourlyRatesProjectSpecificRatesList_putList'>;
export type ProjectHourlyRatesProjectSpecificRatesList_putListResponse = ResponseForOperation<'ProjectHourlyRatesProjectSpecificRatesList_putList'>;
export type ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRatesArgs = OperationArgs<'ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRates'>;
export type ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRatesResponse = ResponseForOperation<'ProjectHourlyRatesUpdateOrAddHourRates_updateOrAddHourRates'>;
export type ProjectImport_importProjectStatementArgs = OperationArgs<'ProjectImport_importProjectStatement'>;
export type ProjectImport_importProjectStatementResponse = ResponseForOperation<'ProjectImport_importProjectStatement'>;
export type ProjectList_deleteByIdsArgs = OperationArgs<'ProjectList_deleteByIds'>;
export type ProjectList_deleteByIdsResponse = ResponseForOperation<'ProjectList_deleteByIds'>;
export type ProjectList_postListArgs = OperationArgs<'ProjectList_postList'>;
export type ProjectList_postListResponse = ResponseForOperation<'ProjectList_postList'>;
export type ProjectList_putListArgs = OperationArgs<'ProjectList_putList'>;
export type ProjectList_putListResponse = ResponseForOperation<'ProjectList_putList'>;
export type ProjectNumber_getByNumberArgs = OperationArgs<'ProjectNumber_getByNumber'>;
export type ProjectNumber_getByNumberResponse = ResponseForOperation<'ProjectNumber_getByNumber'>;
export type ProjectOrderline_deleteArgs = OperationArgs<'ProjectOrderline_delete'>;
export type ProjectOrderline_deleteResponse = ResponseForOperation<'ProjectOrderline_delete'>;
export type ProjectOrderline_getArgs = OperationArgs<'ProjectOrderline_get'>;
export type ProjectOrderline_getResponse = ResponseForOperation<'ProjectOrderline_get'>;
export type ProjectOrderline_postArgs = OperationArgs<'ProjectOrderline_post'>;
export type ProjectOrderline_postResponse = ResponseForOperation<'ProjectOrderline_post'>;
export type ProjectOrderline_putArgs = OperationArgs<'ProjectOrderline_put'>;
export type ProjectOrderline_putResponse = ResponseForOperation<'ProjectOrderline_put'>;
export type ProjectOrderline_searchArgs = OperationArgs<'ProjectOrderline_search'>;
export type ProjectOrderline_searchResponse = ResponseForOperation<'ProjectOrderline_search'>;
export type ProjectOrderlineList_postListArgs = OperationArgs<'ProjectOrderlineList_postList'>;
export type ProjectOrderlineList_postListResponse = ResponseForOperation<'ProjectOrderlineList_postList'>;
export type ProjectOrderlineOrderLineTemplate_orderLineTemplateArgs = OperationArgs<'ProjectOrderlineOrderLineTemplate_orderLineTemplate'>;
export type ProjectOrderlineOrderLineTemplate_orderLineTemplateResponse = ResponseForOperation<'ProjectOrderlineOrderLineTemplate_orderLineTemplate'>;
export type ProjectOrderlineQuery_queryArgs = OperationArgs<'ProjectOrderlineQuery_query'>;
export type ProjectOrderlineQuery_queryResponse = ResponseForOperation<'ProjectOrderlineQuery_query'>;
export type ProjectParticipant_getArgs = OperationArgs<'ProjectParticipant_get'>;
export type ProjectParticipant_getResponse = ResponseForOperation<'ProjectParticipant_get'>;
export type ProjectParticipant_postArgs = OperationArgs<'ProjectParticipant_post'>;
export type ProjectParticipant_postResponse = ResponseForOperation<'ProjectParticipant_post'>;
export type ProjectParticipant_putArgs = OperationArgs<'ProjectParticipant_put'>;
export type ProjectParticipant_putResponse = ResponseForOperation<'ProjectParticipant_put'>;
export type ProjectParticipantList_deleteByIdsArgs = OperationArgs<'ProjectParticipantList_deleteByIds'>;
export type ProjectParticipantList_deleteByIdsResponse = ResponseForOperation<'ProjectParticipantList_deleteByIds'>;
export type ProjectParticipantList_postListArgs = OperationArgs<'ProjectParticipantList_postList'>;
export type ProjectParticipantList_postListResponse = ResponseForOperation<'ProjectParticipantList_postList'>;
export type ProjectPeriodBudgetStatus_getBudgetStatusArgs = OperationArgs<'ProjectPeriodBudgetStatus_getBudgetStatus'>;
export type ProjectPeriodBudgetStatus_getBudgetStatusResponse = ResponseForOperation<'ProjectPeriodBudgetStatus_getBudgetStatus'>;
export type ProjectPeriodHourlistReport_hourlistReportArgs = OperationArgs<'ProjectPeriodHourlistReport_hourlistReport'>;
export type ProjectPeriodHourlistReport_hourlistReportResponse = ResponseForOperation<'ProjectPeriodHourlistReport_hourlistReport'>;
export type ProjectPeriodInvoiced_invoicedArgs = OperationArgs<'ProjectPeriodInvoiced_invoiced'>;
export type ProjectPeriodInvoiced_invoicedResponse = ResponseForOperation<'ProjectPeriodInvoiced_invoiced'>;
export type ProjectPeriodInvoicingReserve_invoicingReserveArgs = OperationArgs<'ProjectPeriodInvoicingReserve_invoicingReserve'>;
export type ProjectPeriodInvoicingReserve_invoicingReserveResponse = ResponseForOperation<'ProjectPeriodInvoicingReserve_invoicingReserve'>;
export type ProjectPeriodMonthlyStatus_monthlyStatusArgs = OperationArgs<'ProjectPeriodMonthlyStatus_monthlyStatus'>;
export type ProjectPeriodMonthlyStatus_monthlyStatusResponse = ResponseForOperation<'ProjectPeriodMonthlyStatus_monthlyStatus'>;
export type ProjectPeriodOverallStatus_overallStatusArgs = OperationArgs<'ProjectPeriodOverallStatus_overallStatus'>;
export type ProjectPeriodOverallStatus_overallStatusResponse = ResponseForOperation<'ProjectPeriodOverallStatus_overallStatus'>;
export type ProjectProjectActivity_deleteArgs = OperationArgs<'ProjectProjectActivity_delete'>;
export type ProjectProjectActivity_deleteResponse = ResponseForOperation<'ProjectProjectActivity_delete'>;
export type ProjectProjectActivity_getArgs = OperationArgs<'ProjectProjectActivity_get'>;
export type ProjectProjectActivity_getResponse = ResponseForOperation<'ProjectProjectActivity_get'>;
export type ProjectProjectActivity_postArgs = OperationArgs<'ProjectProjectActivity_post'>;
export type ProjectProjectActivity_postResponse = ResponseForOperation<'ProjectProjectActivity_post'>;
export type ProjectProjectActivityList_deleteByIdsArgs = OperationArgs<'ProjectProjectActivityList_deleteByIds'>;
export type ProjectProjectActivityList_deleteByIdsResponse = ResponseForOperation<'ProjectProjectActivityList_deleteByIds'>;
export type ProjectResourcePlanBudget_getArgs = OperationArgs<'ProjectResourcePlanBudget_get'>;
export type ProjectResourcePlanBudget_getResponse = ResponseForOperation<'ProjectResourcePlanBudget_get'>;
export type ProjectSettings_getArgs = OperationArgs<'ProjectSettings_get'>;
export type ProjectSettings_getResponse = ResponseForOperation<'ProjectSettings_get'>;
export type ProjectSettings_putArgs = OperationArgs<'ProjectSettings_put'>;
export type ProjectSettings_putResponse = ResponseForOperation<'ProjectSettings_put'>;
export type ProjectSubcontract_deleteArgs = OperationArgs<'ProjectSubcontract_delete'>;
export type ProjectSubcontract_deleteResponse = ResponseForOperation<'ProjectSubcontract_delete'>;
export type ProjectSubcontract_getArgs = OperationArgs<'ProjectSubcontract_get'>;
export type ProjectSubcontract_getResponse = ResponseForOperation<'ProjectSubcontract_get'>;
export type ProjectSubcontract_postArgs = OperationArgs<'ProjectSubcontract_post'>;
export type ProjectSubcontract_postResponse = ResponseForOperation<'ProjectSubcontract_post'>;
export type ProjectSubcontract_putArgs = OperationArgs<'ProjectSubcontract_put'>;
export type ProjectSubcontract_putResponse = ResponseForOperation<'ProjectSubcontract_put'>;
export type ProjectSubcontract_searchArgs = OperationArgs<'ProjectSubcontract_search'>;
export type ProjectSubcontract_searchResponse = ResponseForOperation<'ProjectSubcontract_search'>;
export type ProjectSubcontractQuery_queryArgs = OperationArgs<'ProjectSubcontractQuery_query'>;
export type ProjectSubcontractQuery_queryResponse = ResponseForOperation<'ProjectSubcontractQuery_query'>;
export type ProjectTask_searchArgs = OperationArgs<'ProjectTask_search'>;
export type ProjectTask_searchResponse = ResponseForOperation<'ProjectTask_search'>;
export type ProjectTemplate_getArgs = OperationArgs<'ProjectTemplate_get'>;
export type ProjectTemplate_getResponse = ResponseForOperation<'ProjectTemplate_get'>;
export type PurchaseOrder_deleteArgs = OperationArgs<'PurchaseOrder_delete'>;
export type PurchaseOrder_deleteResponse = ResponseForOperation<'PurchaseOrder_delete'>;
export type PurchaseOrder_getArgs = OperationArgs<'PurchaseOrder_get'>;
export type PurchaseOrder_getResponse = ResponseForOperation<'PurchaseOrder_get'>;
export type PurchaseOrder_postArgs = OperationArgs<'PurchaseOrder_post'>;
export type PurchaseOrder_postResponse = ResponseForOperation<'PurchaseOrder_post'>;
export type PurchaseOrder_putArgs = OperationArgs<'PurchaseOrder_put'>;
export type PurchaseOrder_putResponse = ResponseForOperation<'PurchaseOrder_put'>;
export type PurchaseOrder_searchArgs = OperationArgs<'PurchaseOrder_search'>;
export type PurchaseOrder_searchResponse = ResponseForOperation<'PurchaseOrder_search'>;
export type PurchaseOrderAttachment_deleteAttachmentArgs = OperationArgs<'PurchaseOrderAttachment_deleteAttachment'>;
export type PurchaseOrderAttachment_deleteAttachmentResponse = ResponseForOperation<'PurchaseOrderAttachment_deleteAttachment'>;
export type PurchaseOrderAttachment_uploadAttachmentArgs = OperationArgs<'PurchaseOrderAttachment_uploadAttachment'>;
export type PurchaseOrderAttachment_uploadAttachmentResponse = ResponseForOperation<'PurchaseOrderAttachment_uploadAttachment'>;
export type PurchaseOrderAttachmentList_uploadAttachmentsArgs = OperationArgs<'PurchaseOrderAttachmentList_uploadAttachments'>;
export type PurchaseOrderAttachmentList_uploadAttachmentsResponse = ResponseForOperation<'PurchaseOrderAttachmentList_uploadAttachments'>;
export type PurchaseOrderDeviation_deleteArgs = OperationArgs<'PurchaseOrderDeviation_delete'>;
export type PurchaseOrderDeviation_deleteResponse = ResponseForOperation<'PurchaseOrderDeviation_delete'>;
export type PurchaseOrderDeviation_getArgs = OperationArgs<'PurchaseOrderDeviation_get'>;
export type PurchaseOrderDeviation_getResponse = ResponseForOperation<'PurchaseOrderDeviation_get'>;
export type PurchaseOrderDeviation_postArgs = OperationArgs<'PurchaseOrderDeviation_post'>;
export type PurchaseOrderDeviation_postResponse = ResponseForOperation<'PurchaseOrderDeviation_post'>;
export type PurchaseOrderDeviation_putArgs = OperationArgs<'PurchaseOrderDeviation_put'>;
export type PurchaseOrderDeviation_putResponse = ResponseForOperation<'PurchaseOrderDeviation_put'>;
export type PurchaseOrderDeviation_searchArgs = OperationArgs<'PurchaseOrderDeviation_search'>;
export type PurchaseOrderDeviation_searchResponse = ResponseForOperation<'PurchaseOrderDeviation_search'>;
export type PurchaseOrderDeviationApprove_approveArgs = OperationArgs<'PurchaseOrderDeviationApprove_approve'>;
export type PurchaseOrderDeviationApprove_approveResponse = ResponseForOperation<'PurchaseOrderDeviationApprove_approve'>;
export type PurchaseOrderDeviationDeliver_deliverArgs = OperationArgs<'PurchaseOrderDeviationDeliver_deliver'>;
export type PurchaseOrderDeviationDeliver_deliverResponse = ResponseForOperation<'PurchaseOrderDeviationDeliver_deliver'>;
export type PurchaseOrderDeviationList_postListArgs = OperationArgs<'PurchaseOrderDeviationList_postList'>;
export type PurchaseOrderDeviationList_postListResponse = ResponseForOperation<'PurchaseOrderDeviationList_postList'>;
export type PurchaseOrderDeviationList_putListArgs = OperationArgs<'PurchaseOrderDeviationList_putList'>;
export type PurchaseOrderDeviationList_putListResponse = ResponseForOperation<'PurchaseOrderDeviationList_putList'>;
export type PurchaseOrderDeviationUndeliver_undeliverArgs = OperationArgs<'PurchaseOrderDeviationUndeliver_undeliver'>;
export type PurchaseOrderDeviationUndeliver_undeliverResponse = ResponseForOperation<'PurchaseOrderDeviationUndeliver_undeliver'>;
export type PurchaseOrderGoodsReceipt_deleteArgs = OperationArgs<'PurchaseOrderGoodsReceipt_delete'>;
export type PurchaseOrderGoodsReceipt_deleteResponse = ResponseForOperation<'PurchaseOrderGoodsReceipt_delete'>;
export type PurchaseOrderGoodsReceipt_getArgs = OperationArgs<'PurchaseOrderGoodsReceipt_get'>;
export type PurchaseOrderGoodsReceipt_getResponse = ResponseForOperation<'PurchaseOrderGoodsReceipt_get'>;
export type PurchaseOrderGoodsReceipt_postArgs = OperationArgs<'PurchaseOrderGoodsReceipt_post'>;
export type PurchaseOrderGoodsReceipt_postResponse = ResponseForOperation<'PurchaseOrderGoodsReceipt_post'>;
export type PurchaseOrderGoodsReceipt_putArgs = OperationArgs<'PurchaseOrderGoodsReceipt_put'>;
export type PurchaseOrderGoodsReceipt_putResponse = ResponseForOperation<'PurchaseOrderGoodsReceipt_put'>;
export type PurchaseOrderGoodsReceipt_searchArgs = OperationArgs<'PurchaseOrderGoodsReceipt_search'>;
export type PurchaseOrderGoodsReceipt_searchResponse = ResponseForOperation<'PurchaseOrderGoodsReceipt_search'>;
export type PurchaseOrderGoodsReceiptConfirm_confirmArgs = OperationArgs<'PurchaseOrderGoodsReceiptConfirm_confirm'>;
export type PurchaseOrderGoodsReceiptConfirm_confirmResponse = ResponseForOperation<'PurchaseOrderGoodsReceiptConfirm_confirm'>;
export type PurchaseOrderGoodsReceiptLine_deleteArgs = OperationArgs<'PurchaseOrderGoodsReceiptLine_delete'>;
export type PurchaseOrderGoodsReceiptLine_deleteResponse = ResponseForOperation<'PurchaseOrderGoodsReceiptLine_delete'>;
export type PurchaseOrderGoodsReceiptLine_getArgs = OperationArgs<'PurchaseOrderGoodsReceiptLine_get'>;
export type PurchaseOrderGoodsReceiptLine_getResponse = ResponseForOperation<'PurchaseOrderGoodsReceiptLine_get'>;
export type PurchaseOrderGoodsReceiptLine_postArgs = OperationArgs<'PurchaseOrderGoodsReceiptLine_post'>;
export type PurchaseOrderGoodsReceiptLine_postResponse = ResponseForOperation<'PurchaseOrderGoodsReceiptLine_post'>;
export type PurchaseOrderGoodsReceiptLine_putArgs = OperationArgs<'PurchaseOrderGoodsReceiptLine_put'>;
export type PurchaseOrderGoodsReceiptLine_putResponse = ResponseForOperation<'PurchaseOrderGoodsReceiptLine_put'>;
export type PurchaseOrderGoodsReceiptLine_searchArgs = OperationArgs<'PurchaseOrderGoodsReceiptLine_search'>;
export type PurchaseOrderGoodsReceiptLine_searchResponse = ResponseForOperation<'PurchaseOrderGoodsReceiptLine_search'>;
export type PurchaseOrderGoodsReceiptLineList_deleteListArgs = OperationArgs<'PurchaseOrderGoodsReceiptLineList_deleteList'>;
export type PurchaseOrderGoodsReceiptLineList_deleteListResponse = ResponseForOperation<'PurchaseOrderGoodsReceiptLineList_deleteList'>;
export type PurchaseOrderGoodsReceiptLineList_postListArgs = OperationArgs<'PurchaseOrderGoodsReceiptLineList_postList'>;
export type PurchaseOrderGoodsReceiptLineList_postListResponse = ResponseForOperation<'PurchaseOrderGoodsReceiptLineList_postList'>;
export type PurchaseOrderGoodsReceiptLineList_putListArgs = OperationArgs<'PurchaseOrderGoodsReceiptLineList_putList'>;
export type PurchaseOrderGoodsReceiptLineList_putListResponse = ResponseForOperation<'PurchaseOrderGoodsReceiptLineList_putList'>;
export type PurchaseOrderGoodsReceiptList_deleteByIdsArgs = OperationArgs<'PurchaseOrderGoodsReceiptList_deleteByIds'>;
export type PurchaseOrderGoodsReceiptList_deleteByIdsResponse = ResponseForOperation<'PurchaseOrderGoodsReceiptList_deleteByIds'>;
export type PurchaseOrderGoodsReceiptList_postListArgs = OperationArgs<'PurchaseOrderGoodsReceiptList_postList'>;
export type PurchaseOrderGoodsReceiptList_postListResponse = ResponseForOperation<'PurchaseOrderGoodsReceiptList_postList'>;
export type PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirmArgs = OperationArgs<'PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirm'>;
export type PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirmResponse = ResponseForOperation<'PurchaseOrderGoodsReceiptReceiveAndConfirm_receiveAndConfirm'>;
export type PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceiptArgs = OperationArgs<'PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceipt'>;
export type PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceiptResponse = ResponseForOperation<'PurchaseOrderGoodsReceiptRegisterGoodsReceipt_registerGoodsReceipt'>;
export type PurchaseOrderOrderline_deleteArgs = OperationArgs<'PurchaseOrderOrderline_delete'>;
export type PurchaseOrderOrderline_deleteResponse = ResponseForOperation<'PurchaseOrderOrderline_delete'>;
export type PurchaseOrderOrderline_getArgs = OperationArgs<'PurchaseOrderOrderline_get'>;
export type PurchaseOrderOrderline_getResponse = ResponseForOperation<'PurchaseOrderOrderline_get'>;
export type PurchaseOrderOrderline_postArgs = OperationArgs<'PurchaseOrderOrderline_post'>;
export type PurchaseOrderOrderline_postResponse = ResponseForOperation<'PurchaseOrderOrderline_post'>;
export type PurchaseOrderOrderline_putArgs = OperationArgs<'PurchaseOrderOrderline_put'>;
export type PurchaseOrderOrderline_putResponse = ResponseForOperation<'PurchaseOrderOrderline_put'>;
export type PurchaseOrderOrderlineList_deleteListArgs = OperationArgs<'PurchaseOrderOrderlineList_deleteList'>;
export type PurchaseOrderOrderlineList_deleteListResponse = ResponseForOperation<'PurchaseOrderOrderlineList_deleteList'>;
export type PurchaseOrderOrderlineList_postListArgs = OperationArgs<'PurchaseOrderOrderlineList_postList'>;
export type PurchaseOrderOrderlineList_postListResponse = ResponseForOperation<'PurchaseOrderOrderlineList_postList'>;
export type PurchaseOrderOrderlineList_putListArgs = OperationArgs<'PurchaseOrderOrderlineList_putList'>;
export type PurchaseOrderOrderlineList_putListResponse = ResponseForOperation<'PurchaseOrderOrderlineList_putList'>;
export type PurchaseOrderPurchaseOrderIncomingInvoiceRelation_deleteArgs = OperationArgs<'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_delete'>;
export type PurchaseOrderPurchaseOrderIncomingInvoiceRelation_deleteResponse = ResponseForOperation<'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_delete'>;
export type PurchaseOrderPurchaseOrderIncomingInvoiceRelation_getArgs = OperationArgs<'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_get'>;
export type PurchaseOrderPurchaseOrderIncomingInvoiceRelation_getResponse = ResponseForOperation<'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_get'>;
export type PurchaseOrderPurchaseOrderIncomingInvoiceRelation_postArgs = OperationArgs<'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_post'>;
export type PurchaseOrderPurchaseOrderIncomingInvoiceRelation_postResponse = ResponseForOperation<'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_post'>;
export type PurchaseOrderPurchaseOrderIncomingInvoiceRelation_searchArgs = OperationArgs<'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_search'>;
export type PurchaseOrderPurchaseOrderIncomingInvoiceRelation_searchResponse = ResponseForOperation<'PurchaseOrderPurchaseOrderIncomingInvoiceRelation_search'>;
export type PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIdsArgs = OperationArgs<'PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIds'>;
export type PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIdsResponse = ResponseForOperation<'PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_deleteByIds'>;
export type PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postListArgs = OperationArgs<'PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postList'>;
export type PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postListResponse = ResponseForOperation<'PurchaseOrderPurchaseOrderIncomingInvoiceRelationList_postList'>;
export type PurchaseOrderSend_sendArgs = OperationArgs<'PurchaseOrderSend_send'>;
export type PurchaseOrderSend_sendResponse = ResponseForOperation<'PurchaseOrderSend_send'>;
export type PurchaseOrderSendByEmail_sendByEmailArgs = OperationArgs<'PurchaseOrderSendByEmail_sendByEmail'>;
export type PurchaseOrderSendByEmail_sendByEmailResponse = ResponseForOperation<'PurchaseOrderSendByEmail_sendByEmail'>;
export type Reminder_getArgs = OperationArgs<'Reminder_get'>;
export type Reminder_getResponse = ResponseForOperation<'Reminder_get'>;
export type Reminder_searchArgs = OperationArgs<'Reminder_search'>;
export type Reminder_searchResponse = ResponseForOperation<'Reminder_search'>;
export type ReminderPdf_downloadPdfArgs = OperationArgs<'ReminderPdf_downloadPdf'>;
export type ReminderPdf_downloadPdfResponse = ResponseForOperation<'ReminderPdf_downloadPdf'>;
export type Resultbudget_searchArgs = OperationArgs<'Resultbudget_search'>;
export type Resultbudget_searchResponse = ResponseForOperation<'Resultbudget_search'>;
export type ResultbudgetCompany_getCompanyResultBudgetArgs = OperationArgs<'ResultbudgetCompany_getCompanyResultBudget'>;
export type ResultbudgetCompany_getCompanyResultBudgetResponse = ResponseForOperation<'ResultbudgetCompany_getCompanyResultBudget'>;
export type ResultbudgetDepartment_getDepartmentResultBudgetArgs = OperationArgs<'ResultbudgetDepartment_getDepartmentResultBudget'>;
export type ResultbudgetDepartment_getDepartmentResultBudgetResponse = ResponseForOperation<'ResultbudgetDepartment_getDepartmentResultBudget'>;
export type ResultbudgetEmployee_getEmployeeResultBudgetArgs = OperationArgs<'ResultbudgetEmployee_getEmployeeResultBudget'>;
export type ResultbudgetEmployee_getEmployeeResultBudgetResponse = ResponseForOperation<'ResultbudgetEmployee_getEmployeeResultBudget'>;
export type ResultbudgetProduct_getProductResultBudgetArgs = OperationArgs<'ResultbudgetProduct_getProductResultBudget'>;
export type ResultbudgetProduct_getProductResultBudgetResponse = ResponseForOperation<'ResultbudgetProduct_getProductResultBudget'>;
export type ResultbudgetProject_getProjectResultBudgetArgs = OperationArgs<'ResultbudgetProject_getProjectResultBudget'>;
export type ResultbudgetProject_getProjectResultBudgetResponse = ResponseForOperation<'ResultbudgetProject_getProjectResultBudget'>;
export type SaftExportSAFT_exportSAFTArgs = OperationArgs<'SaftExportSAFT_exportSAFT'>;
export type SaftExportSAFT_exportSAFTResponse = ResponseForOperation<'SaftExportSAFT_exportSAFT'>;
export type SaftImportSAFT_importSAFTArgs = OperationArgs<'SaftImportSAFT_importSAFT'>;
export type SaftImportSAFT_importSAFTResponse = ResponseForOperation<'SaftImportSAFT_importSAFT'>;
export type SalaryCompilation_getArgs = OperationArgs<'SalaryCompilation_get'>;
export type SalaryCompilation_getResponse = ResponseForOperation<'SalaryCompilation_get'>;
export type SalaryCompilationPdf_downloadPdfArgs = OperationArgs<'SalaryCompilationPdf_downloadPdf'>;
export type SalaryCompilationPdf_downloadPdfResponse = ResponseForOperation<'SalaryCompilationPdf_downloadPdf'>;
export type SalaryFinanceTaxReconciliationContext_postContextArgs = OperationArgs<'SalaryFinanceTaxReconciliationContext_postContext'>;
export type SalaryFinanceTaxReconciliationContext_postContextResponse = ResponseForOperation<'SalaryFinanceTaxReconciliationContext_postContext'>;
export type SalaryFinanceTaxReconciliationOverview_getOverviewArgs = OperationArgs<'SalaryFinanceTaxReconciliationOverview_getOverview'>;
export type SalaryFinanceTaxReconciliationOverview_getOverviewResponse = ResponseForOperation<'SalaryFinanceTaxReconciliationOverview_getOverview'>;
export type SalaryFinanceTaxReconciliationPaymentsOverview_getPaymentsArgs = OperationArgs<'SalaryFinanceTaxReconciliationPaymentsOverview_getPayments'>;
export type SalaryFinanceTaxReconciliationPaymentsOverview_getPaymentsResponse = ResponseForOperation<'SalaryFinanceTaxReconciliationPaymentsOverview_getPayments'>;
export type SalaryHolidayAllowanceReconciliationContext_postContextArgs = OperationArgs<'SalaryHolidayAllowanceReconciliationContext_postContext'>;
export type SalaryHolidayAllowanceReconciliationContext_postContextResponse = ResponseForOperation<'SalaryHolidayAllowanceReconciliationContext_postContext'>;
export type SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetailsArgs = OperationArgs<'SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetails'>;
export type SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetailsResponse = ResponseForOperation<'SalaryHolidayAllowanceReconciliationHolidayAllowanceDetails_getHolidayAllowanceDetails'>;
export type SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummaryArgs = OperationArgs<'SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummary'>;
export type SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummaryResponse = ResponseForOperation<'SalaryHolidayAllowanceReconciliationHolidayAllowanceSummary_getHolidayAllowanceSummary'>;
export type SalaryMandatoryDeductionReconciliationContext_postContextArgs = OperationArgs<'SalaryMandatoryDeductionReconciliationContext_postContext'>;
export type SalaryMandatoryDeductionReconciliationContext_postContextResponse = ResponseForOperation<'SalaryMandatoryDeductionReconciliationContext_postContext'>;
export type SalaryMandatoryDeductionReconciliationOverview_getOverviewArgs = OperationArgs<'SalaryMandatoryDeductionReconciliationOverview_getOverview'>;
export type SalaryMandatoryDeductionReconciliationOverview_getOverviewResponse = ResponseForOperation<'SalaryMandatoryDeductionReconciliationOverview_getOverview'>;
export type SalaryMandatoryDeductionReconciliationPaymentsOverview_getPaymentsArgs = OperationArgs<'SalaryMandatoryDeductionReconciliationPaymentsOverview_getPayments'>;
export type SalaryMandatoryDeductionReconciliationPaymentsOverview_getPaymentsResponse = ResponseForOperation<'SalaryMandatoryDeductionReconciliationPaymentsOverview_getPayments'>;
export type SalaryPayrollTaxReconciliationContext_postContextArgs = OperationArgs<'SalaryPayrollTaxReconciliationContext_postContext'>;
export type SalaryPayrollTaxReconciliationContext_postContextResponse = ResponseForOperation<'SalaryPayrollTaxReconciliationContext_postContext'>;
export type SalaryPayrollTaxReconciliationOverview_getOverviewArgs = OperationArgs<'SalaryPayrollTaxReconciliationOverview_getOverview'>;
export type SalaryPayrollTaxReconciliationOverview_getOverviewResponse = ResponseForOperation<'SalaryPayrollTaxReconciliationOverview_getOverview'>;
export type SalaryPayrollTaxReconciliationPaymentsOverview_getPaymentsArgs = OperationArgs<'SalaryPayrollTaxReconciliationPaymentsOverview_getPayments'>;
export type SalaryPayrollTaxReconciliationPaymentsOverview_getPaymentsResponse = ResponseForOperation<'SalaryPayrollTaxReconciliationPaymentsOverview_getPayments'>;
export type SalaryPayslip_getArgs = OperationArgs<'SalaryPayslip_get'>;
export type SalaryPayslip_getResponse = ResponseForOperation<'SalaryPayslip_get'>;
export type SalaryPayslip_searchArgs = OperationArgs<'SalaryPayslip_search'>;
export type SalaryPayslip_searchResponse = ResponseForOperation<'SalaryPayslip_search'>;
export type SalaryPayslipPdf_downloadPdfArgs = OperationArgs<'SalaryPayslipPdf_downloadPdf'>;
export type SalaryPayslipPdf_downloadPdfResponse = ResponseForOperation<'SalaryPayslipPdf_downloadPdf'>;
export type SalarySettings_getArgs = OperationArgs<'SalarySettings_get'>;
export type SalarySettings_getResponse = ResponseForOperation<'SalarySettings_get'>;
export type SalarySettings_putArgs = OperationArgs<'SalarySettings_put'>;
export type SalarySettings_putResponse = ResponseForOperation<'SalarySettings_put'>;
export type SalarySettingsHoliday_postArgs = OperationArgs<'SalarySettingsHoliday_post'>;
export type SalarySettingsHoliday_postResponse = ResponseForOperation<'SalarySettingsHoliday_post'>;
export type SalarySettingsHoliday_putArgs = OperationArgs<'SalarySettingsHoliday_put'>;
export type SalarySettingsHoliday_putResponse = ResponseForOperation<'SalarySettingsHoliday_put'>;
export type SalarySettingsHoliday_searchArgs = OperationArgs<'SalarySettingsHoliday_search'>;
export type SalarySettingsHoliday_searchResponse = ResponseForOperation<'SalarySettingsHoliday_search'>;
export type SalarySettingsHolidayList_deleteByIdsArgs = OperationArgs<'SalarySettingsHolidayList_deleteByIds'>;
export type SalarySettingsHolidayList_deleteByIdsResponse = ResponseForOperation<'SalarySettingsHolidayList_deleteByIds'>;
export type SalarySettingsHolidayList_postListArgs = OperationArgs<'SalarySettingsHolidayList_postList'>;
export type SalarySettingsHolidayList_postListResponse = ResponseForOperation<'SalarySettingsHolidayList_postList'>;
export type SalarySettingsHolidayList_putListArgs = OperationArgs<'SalarySettingsHolidayList_putList'>;
export type SalarySettingsHolidayList_putListResponse = ResponseForOperation<'SalarySettingsHolidayList_putList'>;
export type SalarySettingsPensionScheme_deleteArgs = OperationArgs<'SalarySettingsPensionScheme_delete'>;
export type SalarySettingsPensionScheme_deleteResponse = ResponseForOperation<'SalarySettingsPensionScheme_delete'>;
export type SalarySettingsPensionScheme_getArgs = OperationArgs<'SalarySettingsPensionScheme_get'>;
export type SalarySettingsPensionScheme_getResponse = ResponseForOperation<'SalarySettingsPensionScheme_get'>;
export type SalarySettingsPensionScheme_postArgs = OperationArgs<'SalarySettingsPensionScheme_post'>;
export type SalarySettingsPensionScheme_postResponse = ResponseForOperation<'SalarySettingsPensionScheme_post'>;
export type SalarySettingsPensionScheme_putArgs = OperationArgs<'SalarySettingsPensionScheme_put'>;
export type SalarySettingsPensionScheme_putResponse = ResponseForOperation<'SalarySettingsPensionScheme_put'>;
export type SalarySettingsPensionScheme_searchArgs = OperationArgs<'SalarySettingsPensionScheme_search'>;
export type SalarySettingsPensionScheme_searchResponse = ResponseForOperation<'SalarySettingsPensionScheme_search'>;
export type SalarySettingsPensionSchemeList_deleteByIdsArgs = OperationArgs<'SalarySettingsPensionSchemeList_deleteByIds'>;
export type SalarySettingsPensionSchemeList_deleteByIdsResponse = ResponseForOperation<'SalarySettingsPensionSchemeList_deleteByIds'>;
export type SalarySettingsPensionSchemeList_postListArgs = OperationArgs<'SalarySettingsPensionSchemeList_postList'>;
export type SalarySettingsPensionSchemeList_postListResponse = ResponseForOperation<'SalarySettingsPensionSchemeList_postList'>;
export type SalarySettingsPensionSchemeList_putListArgs = OperationArgs<'SalarySettingsPensionSchemeList_putList'>;
export type SalarySettingsPensionSchemeList_putListResponse = ResponseForOperation<'SalarySettingsPensionSchemeList_putList'>;
export type SalarySettingsStandardTime_getArgs = OperationArgs<'SalarySettingsStandardTime_get'>;
export type SalarySettingsStandardTime_getResponse = ResponseForOperation<'SalarySettingsStandardTime_get'>;
export type SalarySettingsStandardTime_postArgs = OperationArgs<'SalarySettingsStandardTime_post'>;
export type SalarySettingsStandardTime_postResponse = ResponseForOperation<'SalarySettingsStandardTime_post'>;
export type SalarySettingsStandardTime_putArgs = OperationArgs<'SalarySettingsStandardTime_put'>;
export type SalarySettingsStandardTime_putResponse = ResponseForOperation<'SalarySettingsStandardTime_put'>;
export type SalarySettingsStandardTime_searchArgs = OperationArgs<'SalarySettingsStandardTime_search'>;
export type SalarySettingsStandardTime_searchResponse = ResponseForOperation<'SalarySettingsStandardTime_search'>;
export type SalarySettingsStandardTimeByDate_getByDateArgs = OperationArgs<'SalarySettingsStandardTimeByDate_getByDate'>;
export type SalarySettingsStandardTimeByDate_getByDateResponse = ResponseForOperation<'SalarySettingsStandardTimeByDate_getByDate'>;
export type SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetailsArgs = OperationArgs<'SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetails'>;
export type SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetailsResponse = ResponseForOperation<'SalaryTaxDeductionReconciliationBalanceAndOwedAmount_getTaxDeductionDetails'>;
export type SalaryTaxDeductionReconciliationContext_postContextArgs = OperationArgs<'SalaryTaxDeductionReconciliationContext_postContext'>;
export type SalaryTaxDeductionReconciliationContext_postContextResponse = ResponseForOperation<'SalaryTaxDeductionReconciliationContext_postContext'>;
export type SalaryTaxDeductionReconciliationOverview_getOverviewArgs = OperationArgs<'SalaryTaxDeductionReconciliationOverview_getOverview'>;
export type SalaryTaxDeductionReconciliationOverview_getOverviewResponse = ResponseForOperation<'SalaryTaxDeductionReconciliationOverview_getOverview'>;
export type SalaryTaxDeductionReconciliationPaymentsOverview_getPaymentsArgs = OperationArgs<'SalaryTaxDeductionReconciliationPaymentsOverview_getPayments'>;
export type SalaryTaxDeductionReconciliationPaymentsOverview_getPaymentsResponse = ResponseForOperation<'SalaryTaxDeductionReconciliationPaymentsOverview_getPayments'>;
export type SalaryTransaction_deleteArgs = OperationArgs<'SalaryTransaction_delete'>;
export type SalaryTransaction_deleteResponse = ResponseForOperation<'SalaryTransaction_delete'>;
export type SalaryTransaction_getArgs = OperationArgs<'SalaryTransaction_get'>;
export type SalaryTransaction_getResponse = ResponseForOperation<'SalaryTransaction_get'>;
export type SalaryTransaction_postArgs = OperationArgs<'SalaryTransaction_post'>;
export type SalaryTransaction_postResponse = ResponseForOperation<'SalaryTransaction_post'>;
export type SalaryTransactionAttachment_uploadAttachmentArgs = OperationArgs<'SalaryTransactionAttachment_uploadAttachment'>;
export type SalaryTransactionAttachment_uploadAttachmentResponse = ResponseForOperation<'SalaryTransactionAttachment_uploadAttachment'>;
export type SalaryTransactionAttachmentList_uploadAttachmentsArgs = OperationArgs<'SalaryTransactionAttachmentList_uploadAttachments'>;
export type SalaryTransactionAttachmentList_uploadAttachmentsResponse = ResponseForOperation<'SalaryTransactionAttachmentList_uploadAttachments'>;
export type SalaryTransactionDeleteAttachment_deleteAttachmentArgs = OperationArgs<'SalaryTransactionDeleteAttachment_deleteAttachment'>;
export type SalaryTransactionDeleteAttachment_deleteAttachmentResponse = ResponseForOperation<'SalaryTransactionDeleteAttachment_deleteAttachment'>;
export type SalaryType_getArgs = OperationArgs<'SalaryType_get'>;
export type SalaryType_getResponse = ResponseForOperation<'SalaryType_get'>;
export type SalaryType_searchArgs = OperationArgs<'SalaryType_search'>;
export type SalaryType_searchResponse = ResponseForOperation<'SalaryType_search'>;
export type SubscriptionCancel_cancelArgs = OperationArgs<'SubscriptionCancel_cancel'>;
export type SubscriptionCancel_cancelResponse = ResponseForOperation<'SubscriptionCancel_cancel'>;
export type SubscriptionPackages_getPackagesArgs = OperationArgs<'SubscriptionPackages_getPackages'>;
export type SubscriptionPackages_getPackagesResponse = ResponseForOperation<'SubscriptionPackages_getPackages'>;
export type SubscriptionReactivate_reactivateArgs = OperationArgs<'SubscriptionReactivate_reactivate'>;
export type SubscriptionReactivate_reactivateResponse = ResponseForOperation<'SubscriptionReactivate_reactivate'>;
export type Supplier_deleteArgs = OperationArgs<'Supplier_delete'>;
export type Supplier_deleteResponse = ResponseForOperation<'Supplier_delete'>;
export type Supplier_getArgs = OperationArgs<'Supplier_get'>;
export type Supplier_getResponse = ResponseForOperation<'Supplier_get'>;
export type Supplier_postArgs = OperationArgs<'Supplier_post'>;
export type Supplier_postResponse = ResponseForOperation<'Supplier_post'>;
export type Supplier_putArgs = OperationArgs<'Supplier_put'>;
export type Supplier_putResponse = ResponseForOperation<'Supplier_put'>;
export type Supplier_searchArgs = OperationArgs<'Supplier_search'>;
export type Supplier_searchResponse = ResponseForOperation<'Supplier_search'>;
export type SupplierCustomerSearch_searchArgs = OperationArgs<'SupplierCustomerSearch_search'>;
export type SupplierCustomerSearch_searchResponse = ResponseForOperation<'SupplierCustomerSearch_search'>;
export type SupplierInvoice_getArgs = OperationArgs<'SupplierInvoice_get'>;
export type SupplierInvoice_getResponse = ResponseForOperation<'SupplierInvoice_get'>;
export type SupplierInvoice_searchArgs = OperationArgs<'SupplierInvoice_search'>;
export type SupplierInvoice_searchResponse = ResponseForOperation<'SupplierInvoice_search'>;
export type SupplierInvoiceAddPayment_addPaymentArgs = OperationArgs<'SupplierInvoiceAddPayment_addPayment'>;
export type SupplierInvoiceAddPayment_addPaymentResponse = ResponseForOperation<'SupplierInvoiceAddPayment_addPayment'>;
export type SupplierInvoiceAddRecipient_addRecipientArgs = OperationArgs<'SupplierInvoiceAddRecipient_addRecipient'>;
export type SupplierInvoiceAddRecipient_addRecipientResponse = ResponseForOperation<'SupplierInvoiceAddRecipient_addRecipient'>;
export type SupplierInvoiceAddRecipient_addRecipientToManyArgs = OperationArgs<'SupplierInvoiceAddRecipient_addRecipientToMany'>;
export type SupplierInvoiceAddRecipient_addRecipientToManyResponse = ResponseForOperation<'SupplierInvoiceAddRecipient_addRecipientToMany'>;
export type SupplierInvoiceApprove_approveArgs = OperationArgs<'SupplierInvoiceApprove_approve'>;
export type SupplierInvoiceApprove_approveResponse = ResponseForOperation<'SupplierInvoiceApprove_approve'>;
export type SupplierInvoiceApprove_approveManyArgs = OperationArgs<'SupplierInvoiceApprove_approveMany'>;
export type SupplierInvoiceApprove_approveManyResponse = ResponseForOperation<'SupplierInvoiceApprove_approveMany'>;
export type SupplierInvoiceChangeDimension_changeDimensionManyArgs = OperationArgs<'SupplierInvoiceChangeDimension_changeDimensionMany'>;
export type SupplierInvoiceChangeDimension_changeDimensionManyResponse = ResponseForOperation<'SupplierInvoiceChangeDimension_changeDimensionMany'>;
export type SupplierInvoiceForApproval_getApprovalInvoicesArgs = OperationArgs<'SupplierInvoiceForApproval_getApprovalInvoices'>;
export type SupplierInvoiceForApproval_getApprovalInvoicesResponse = ResponseForOperation<'SupplierInvoiceForApproval_getApprovalInvoices'>;
export type SupplierInvoicePdf_downloadPdfArgs = OperationArgs<'SupplierInvoicePdf_downloadPdf'>;
export type SupplierInvoicePdf_downloadPdfResponse = ResponseForOperation<'SupplierInvoicePdf_downloadPdf'>;
export type SupplierInvoiceReject_rejectArgs = OperationArgs<'SupplierInvoiceReject_reject'>;
export type SupplierInvoiceReject_rejectResponse = ResponseForOperation<'SupplierInvoiceReject_reject'>;
export type SupplierInvoiceReject_rejectManyArgs = OperationArgs<'SupplierInvoiceReject_rejectMany'>;
export type SupplierInvoiceReject_rejectManyResponse = ResponseForOperation<'SupplierInvoiceReject_rejectMany'>;
export type SupplierInvoiceVoucherPostings_putPostingsArgs = OperationArgs<'SupplierInvoiceVoucherPostings_putPostings'>;
export type SupplierInvoiceVoucherPostings_putPostingsResponse = ResponseForOperation<'SupplierInvoiceVoucherPostings_putPostings'>;
export type SupplierList_postListArgs = OperationArgs<'SupplierList_postList'>;
export type SupplierList_postListResponse = ResponseForOperation<'SupplierList_postList'>;
export type SupplierList_putListArgs = OperationArgs<'SupplierList_putList'>;
export type SupplierList_putListResponse = ResponseForOperation<'SupplierList_putList'>;
export type SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomersArgs = OperationArgs<'SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomers'>;
export type SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomersResponse = ResponseForOperation<'SupportDashboardBankruptAndExcludedCustomers_getBankruptAndExcludedCustomers'>;
export type SupportDashboardExport_exportArgs = OperationArgs<'SupportDashboardExport_export'>;
export type SupportDashboardExport_exportResponse = ResponseForOperation<'SupportDashboardExport_export'>;
export type TimesheetAllocated_deleteArgs = OperationArgs<'TimesheetAllocated_delete'>;
export type TimesheetAllocated_deleteResponse = ResponseForOperation<'TimesheetAllocated_delete'>;
export type TimesheetAllocated_getArgs = OperationArgs<'TimesheetAllocated_get'>;
export type TimesheetAllocated_getResponse = ResponseForOperation<'TimesheetAllocated_get'>;
export type TimesheetAllocated_postArgs = OperationArgs<'TimesheetAllocated_post'>;
export type TimesheetAllocated_postResponse = ResponseForOperation<'TimesheetAllocated_post'>;
export type TimesheetAllocated_putArgs = OperationArgs<'TimesheetAllocated_put'>;
export type TimesheetAllocated_putResponse = ResponseForOperation<'TimesheetAllocated_put'>;
export type TimesheetAllocated_searchArgs = OperationArgs<'TimesheetAllocated_search'>;
export type TimesheetAllocated_searchResponse = ResponseForOperation<'TimesheetAllocated_search'>;
export type TimesheetAllocatedApprove_approveArgs = OperationArgs<'TimesheetAllocatedApprove_approve'>;
export type TimesheetAllocatedApprove_approveResponse = ResponseForOperation<'TimesheetAllocatedApprove_approve'>;
export type TimesheetAllocatedApproveList_approveListArgs = OperationArgs<'TimesheetAllocatedApproveList_approveList'>;
export type TimesheetAllocatedApproveList_approveListResponse = ResponseForOperation<'TimesheetAllocatedApproveList_approveList'>;
export type TimesheetAllocatedList_postListArgs = OperationArgs<'TimesheetAllocatedList_postList'>;
export type TimesheetAllocatedList_postListResponse = ResponseForOperation<'TimesheetAllocatedList_postList'>;
export type TimesheetAllocatedList_putListArgs = OperationArgs<'TimesheetAllocatedList_putList'>;
export type TimesheetAllocatedList_putListResponse = ResponseForOperation<'TimesheetAllocatedList_putList'>;
export type TimesheetAllocatedUnapprove_unapproveArgs = OperationArgs<'TimesheetAllocatedUnapprove_unapprove'>;
export type TimesheetAllocatedUnapprove_unapproveResponse = ResponseForOperation<'TimesheetAllocatedUnapprove_unapprove'>;
export type TimesheetAllocatedUnapproveList_unapproveListArgs = OperationArgs<'TimesheetAllocatedUnapproveList_unapproveList'>;
export type TimesheetAllocatedUnapproveList_unapproveListResponse = ResponseForOperation<'TimesheetAllocatedUnapproveList_unapproveList'>;
export type TimesheetCompanyHoliday_deleteArgs = OperationArgs<'TimesheetCompanyHoliday_delete'>;
export type TimesheetCompanyHoliday_deleteResponse = ResponseForOperation<'TimesheetCompanyHoliday_delete'>;
export type TimesheetCompanyHoliday_getArgs = OperationArgs<'TimesheetCompanyHoliday_get'>;
export type TimesheetCompanyHoliday_getResponse = ResponseForOperation<'TimesheetCompanyHoliday_get'>;
export type TimesheetCompanyHoliday_postArgs = OperationArgs<'TimesheetCompanyHoliday_post'>;
export type TimesheetCompanyHoliday_postResponse = ResponseForOperation<'TimesheetCompanyHoliday_post'>;
export type TimesheetCompanyHoliday_putArgs = OperationArgs<'TimesheetCompanyHoliday_put'>;
export type TimesheetCompanyHoliday_putResponse = ResponseForOperation<'TimesheetCompanyHoliday_put'>;
export type TimesheetCompanyHoliday_searchArgs = OperationArgs<'TimesheetCompanyHoliday_search'>;
export type TimesheetCompanyHoliday_searchResponse = ResponseForOperation<'TimesheetCompanyHoliday_search'>;
export type TimesheetEntry_deleteArgs = OperationArgs<'TimesheetEntry_delete'>;
export type TimesheetEntry_deleteResponse = ResponseForOperation<'TimesheetEntry_delete'>;
export type TimesheetEntry_getArgs = OperationArgs<'TimesheetEntry_get'>;
export type TimesheetEntry_getResponse = ResponseForOperation<'TimesheetEntry_get'>;
export type TimesheetEntry_postArgs = OperationArgs<'TimesheetEntry_post'>;
export type TimesheetEntry_postResponse = ResponseForOperation<'TimesheetEntry_post'>;
export type TimesheetEntry_putArgs = OperationArgs<'TimesheetEntry_put'>;
export type TimesheetEntry_putResponse = ResponseForOperation<'TimesheetEntry_put'>;
export type TimesheetEntry_searchArgs = OperationArgs<'TimesheetEntry_search'>;
export type TimesheetEntry_searchResponse = ResponseForOperation<'TimesheetEntry_search'>;
export type TimesheetEntryList_postListArgs = OperationArgs<'TimesheetEntryList_postList'>;
export type TimesheetEntryList_postListResponse = ResponseForOperation<'TimesheetEntryList_postList'>;
export type TimesheetEntryList_putListArgs = OperationArgs<'TimesheetEntryList_putList'>;
export type TimesheetEntryList_putListResponse = ResponseForOperation<'TimesheetEntryList_putList'>;
export type TimesheetEntryRecentActivities_getRecentActivitiesArgs = OperationArgs<'TimesheetEntryRecentActivities_getRecentActivities'>;
export type TimesheetEntryRecentActivities_getRecentActivitiesResponse = ResponseForOperation<'TimesheetEntryRecentActivities_getRecentActivities'>;
export type TimesheetEntryRecentProjects_getRecentProjectsArgs = OperationArgs<'TimesheetEntryRecentProjects_getRecentProjects'>;
export type TimesheetEntryRecentProjects_getRecentProjectsResponse = ResponseForOperation<'TimesheetEntryRecentProjects_getRecentProjects'>;
export type TimesheetEntryTotalHours_getTotalHoursArgs = OperationArgs<'TimesheetEntryTotalHours_getTotalHours'>;
export type TimesheetEntryTotalHours_getTotalHoursResponse = ResponseForOperation<'TimesheetEntryTotalHours_getTotalHours'>;
export type TimesheetMonth_getArgs = OperationArgs<'TimesheetMonth_get'>;
export type TimesheetMonth_getResponse = ResponseForOperation<'TimesheetMonth_get'>;
export type TimesheetMonthApprove_approveArgs = OperationArgs<'TimesheetMonthApprove_approve'>;
export type TimesheetMonthApprove_approveResponse = ResponseForOperation<'TimesheetMonthApprove_approve'>;
export type TimesheetMonthByMonthNumber_getByMonthNumberArgs = OperationArgs<'TimesheetMonthByMonthNumber_getByMonthNumber'>;
export type TimesheetMonthByMonthNumber_getByMonthNumberResponse = ResponseForOperation<'TimesheetMonthByMonthNumber_getByMonthNumber'>;
export type TimesheetMonthByMonthNumberList_getByMonthNumberListArgs = OperationArgs<'TimesheetMonthByMonthNumberList_getByMonthNumberList'>;
export type TimesheetMonthByMonthNumberList_getByMonthNumberListResponse = ResponseForOperation<'TimesheetMonthByMonthNumberList_getByMonthNumberList'>;
export type TimesheetMonthComplete_completeArgs = OperationArgs<'TimesheetMonthComplete_complete'>;
export type TimesheetMonthComplete_completeResponse = ResponseForOperation<'TimesheetMonthComplete_complete'>;
export type TimesheetMonthReopen_reopenArgs = OperationArgs<'TimesheetMonthReopen_reopen'>;
export type TimesheetMonthReopen_reopenResponse = ResponseForOperation<'TimesheetMonthReopen_reopen'>;
export type TimesheetMonthUnapprove_unapproveArgs = OperationArgs<'TimesheetMonthUnapprove_unapprove'>;
export type TimesheetMonthUnapprove_unapproveResponse = ResponseForOperation<'TimesheetMonthUnapprove_unapprove'>;
export type TimesheetSalaryProjectTypeSpecification_deleteArgs = OperationArgs<'TimesheetSalaryProjectTypeSpecification_delete'>;
export type TimesheetSalaryProjectTypeSpecification_deleteResponse = ResponseForOperation<'TimesheetSalaryProjectTypeSpecification_delete'>;
export type TimesheetSalaryProjectTypeSpecification_getArgs = OperationArgs<'TimesheetSalaryProjectTypeSpecification_get'>;
export type TimesheetSalaryProjectTypeSpecification_getResponse = ResponseForOperation<'TimesheetSalaryProjectTypeSpecification_get'>;
export type TimesheetSalaryProjectTypeSpecification_postArgs = OperationArgs<'TimesheetSalaryProjectTypeSpecification_post'>;
export type TimesheetSalaryProjectTypeSpecification_postResponse = ResponseForOperation<'TimesheetSalaryProjectTypeSpecification_post'>;
export type TimesheetSalaryProjectTypeSpecification_putArgs = OperationArgs<'TimesheetSalaryProjectTypeSpecification_put'>;
export type TimesheetSalaryProjectTypeSpecification_putResponse = ResponseForOperation<'TimesheetSalaryProjectTypeSpecification_put'>;
export type TimesheetSalaryProjectTypeSpecification_searchArgs = OperationArgs<'TimesheetSalaryProjectTypeSpecification_search'>;
export type TimesheetSalaryProjectTypeSpecification_searchResponse = ResponseForOperation<'TimesheetSalaryProjectTypeSpecification_search'>;
export type TimesheetSalaryTypeSpecification_deleteArgs = OperationArgs<'TimesheetSalaryTypeSpecification_delete'>;
export type TimesheetSalaryTypeSpecification_deleteResponse = ResponseForOperation<'TimesheetSalaryTypeSpecification_delete'>;
export type TimesheetSalaryTypeSpecification_getArgs = OperationArgs<'TimesheetSalaryTypeSpecification_get'>;
export type TimesheetSalaryTypeSpecification_getResponse = ResponseForOperation<'TimesheetSalaryTypeSpecification_get'>;
export type TimesheetSalaryTypeSpecification_postArgs = OperationArgs<'TimesheetSalaryTypeSpecification_post'>;
export type TimesheetSalaryTypeSpecification_postResponse = ResponseForOperation<'TimesheetSalaryTypeSpecification_post'>;
export type TimesheetSalaryTypeSpecification_putArgs = OperationArgs<'TimesheetSalaryTypeSpecification_put'>;
export type TimesheetSalaryTypeSpecification_putResponse = ResponseForOperation<'TimesheetSalaryTypeSpecification_put'>;
export type TimesheetSalaryTypeSpecification_searchArgs = OperationArgs<'TimesheetSalaryTypeSpecification_search'>;
export type TimesheetSalaryTypeSpecification_searchResponse = ResponseForOperation<'TimesheetSalaryTypeSpecification_search'>;
export type TimesheetSettings_getArgs = OperationArgs<'TimesheetSettings_get'>;
export type TimesheetSettings_getResponse = ResponseForOperation<'TimesheetSettings_get'>;
export type TimesheetTimeClock_getArgs = OperationArgs<'TimesheetTimeClock_get'>;
export type TimesheetTimeClock_getResponse = ResponseForOperation<'TimesheetTimeClock_get'>;
export type TimesheetTimeClock_putArgs = OperationArgs<'TimesheetTimeClock_put'>;
export type TimesheetTimeClock_putResponse = ResponseForOperation<'TimesheetTimeClock_put'>;
export type TimesheetTimeClock_searchArgs = OperationArgs<'TimesheetTimeClock_search'>;
export type TimesheetTimeClock_searchResponse = ResponseForOperation<'TimesheetTimeClock_search'>;
export type TimesheetTimeClockPresent_getPresentArgs = OperationArgs<'TimesheetTimeClockPresent_getPresent'>;
export type TimesheetTimeClockPresent_getPresentResponse = ResponseForOperation<'TimesheetTimeClockPresent_getPresent'>;
export type TimesheetTimeClockStart_startArgs = OperationArgs<'TimesheetTimeClockStart_start'>;
export type TimesheetTimeClockStart_startResponse = ResponseForOperation<'TimesheetTimeClockStart_start'>;
export type TimesheetTimeClockStop_stopArgs = OperationArgs<'TimesheetTimeClockStop_stop'>;
export type TimesheetTimeClockStop_stopResponse = ResponseForOperation<'TimesheetTimeClockStop_stop'>;
export type TimesheetWeek_searchArgs = OperationArgs<'TimesheetWeek_search'>;
export type TimesheetWeek_searchResponse = ResponseForOperation<'TimesheetWeek_search'>;
export type TimesheetWeekApprove_approveArgs = OperationArgs<'TimesheetWeekApprove_approve'>;
export type TimesheetWeekApprove_approveResponse = ResponseForOperation<'TimesheetWeekApprove_approve'>;
export type TimesheetWeekComplete_completeArgs = OperationArgs<'TimesheetWeekComplete_complete'>;
export type TimesheetWeekComplete_completeResponse = ResponseForOperation<'TimesheetWeekComplete_complete'>;
export type TimesheetWeekReopen_reopenArgs = OperationArgs<'TimesheetWeekReopen_reopen'>;
export type TimesheetWeekReopen_reopenResponse = ResponseForOperation<'TimesheetWeekReopen_reopen'>;
export type TimesheetWeekUnapprove_unapproveArgs = OperationArgs<'TimesheetWeekUnapprove_unapprove'>;
export type TimesheetWeekUnapprove_unapproveResponse = ResponseForOperation<'TimesheetWeekUnapprove_unapprove'>;
export type TokenConsumerByToken_getByTokenArgs = OperationArgs<'TokenConsumerByToken_getByToken'>;
export type TokenConsumerByToken_getByTokenResponse = ResponseForOperation<'TokenConsumerByToken_getByToken'>;
export type TokenEmployeeCreate_createArgs = OperationArgs<'TokenEmployeeCreate_create'>;
export type TokenEmployeeCreate_createResponse = ResponseForOperation<'TokenEmployeeCreate_create'>;
export type TokenSession_deleteArgs = OperationArgs<'TokenSession_delete'>;
export type TokenSession_deleteResponse = ResponseForOperation<'TokenSession_delete'>;
export type TokenSessionCreate_createArgs = OperationArgs<'TokenSessionCreate_create'>;
export type TokenSessionCreate_createResponse = ResponseForOperation<'TokenSessionCreate_create'>;
export type TokenSessionCreate_createWithBodyArgs = OperationArgs<'TokenSessionCreate_createWithBody'>;
export type TokenSessionCreate_createWithBodyResponse = ResponseForOperation<'TokenSessionCreate_createWithBody'>;
export type TokenSessionWhoAmI_whoAmIArgs = OperationArgs<'TokenSessionWhoAmI_whoAmI'>;
export type TokenSessionWhoAmI_whoAmIResponse = ResponseForOperation<'TokenSessionWhoAmI_whoAmI'>;
export type TransportType_getArgs = OperationArgs<'TransportType_get'>;
export type TransportType_getResponse = ResponseForOperation<'TransportType_get'>;
export type TransportType_searchArgs = OperationArgs<'TransportType_search'>;
export type TransportType_searchResponse = ResponseForOperation<'TransportType_search'>;
export type TravelExpense_deleteArgs = OperationArgs<'TravelExpense_delete'>;
export type TravelExpense_deleteResponse = ResponseForOperation<'TravelExpense_delete'>;
export type TravelExpense_getArgs = OperationArgs<'TravelExpense_get'>;
export type TravelExpense_getResponse = ResponseForOperation<'TravelExpense_get'>;
export type TravelExpense_postArgs = OperationArgs<'TravelExpense_post'>;
export type TravelExpense_postResponse = ResponseForOperation<'TravelExpense_post'>;
export type TravelExpense_putArgs = OperationArgs<'TravelExpense_put'>;
export type TravelExpense_putResponse = ResponseForOperation<'TravelExpense_put'>;
export type TravelExpense_searchArgs = OperationArgs<'TravelExpense_search'>;
export type TravelExpense_searchResponse = ResponseForOperation<'TravelExpense_search'>;
export type TravelExpenseAccommodationAllowance_deleteArgs = OperationArgs<'TravelExpenseAccommodationAllowance_delete'>;
export type TravelExpenseAccommodationAllowance_deleteResponse = ResponseForOperation<'TravelExpenseAccommodationAllowance_delete'>;
export type TravelExpenseAccommodationAllowance_getArgs = OperationArgs<'TravelExpenseAccommodationAllowance_get'>;
export type TravelExpenseAccommodationAllowance_getResponse = ResponseForOperation<'TravelExpenseAccommodationAllowance_get'>;
export type TravelExpenseAccommodationAllowance_postArgs = OperationArgs<'TravelExpenseAccommodationAllowance_post'>;
export type TravelExpenseAccommodationAllowance_postResponse = ResponseForOperation<'TravelExpenseAccommodationAllowance_post'>;
export type TravelExpenseAccommodationAllowance_putArgs = OperationArgs<'TravelExpenseAccommodationAllowance_put'>;
export type TravelExpenseAccommodationAllowance_putResponse = ResponseForOperation<'TravelExpenseAccommodationAllowance_put'>;
export type TravelExpenseAccommodationAllowance_searchArgs = OperationArgs<'TravelExpenseAccommodationAllowance_search'>;
export type TravelExpenseAccommodationAllowance_searchResponse = ResponseForOperation<'TravelExpenseAccommodationAllowance_search'>;
export type TravelExpenseApprove_approveArgs = OperationArgs<'TravelExpenseApprove_approve'>;
export type TravelExpenseApprove_approveResponse = ResponseForOperation<'TravelExpenseApprove_approve'>;
export type TravelExpenseAttachment_deleteAttachmentArgs = OperationArgs<'TravelExpenseAttachment_deleteAttachment'>;
export type TravelExpenseAttachment_deleteAttachmentResponse = ResponseForOperation<'TravelExpenseAttachment_deleteAttachment'>;
export type TravelExpenseAttachment_downloadAttachmentArgs = OperationArgs<'TravelExpenseAttachment_downloadAttachment'>;
export type TravelExpenseAttachment_downloadAttachmentResponse = ResponseForOperation<'TravelExpenseAttachment_downloadAttachment'>;
export type TravelExpenseAttachment_uploadAttachmentArgs = OperationArgs<'TravelExpenseAttachment_uploadAttachment'>;
export type TravelExpenseAttachment_uploadAttachmentResponse = ResponseForOperation<'TravelExpenseAttachment_uploadAttachment'>;
export type TravelExpenseAttachmentList_uploadAttachmentsArgs = OperationArgs<'TravelExpenseAttachmentList_uploadAttachments'>;
export type TravelExpenseAttachmentList_uploadAttachmentsResponse = ResponseForOperation<'TravelExpenseAttachmentList_uploadAttachments'>;
export type TravelExpenseConvert_convertArgs = OperationArgs<'TravelExpenseConvert_convert'>;
export type TravelExpenseConvert_convertResponse = ResponseForOperation<'TravelExpenseConvert_convert'>;
export type TravelExpenseCopy_copyArgs = OperationArgs<'TravelExpenseCopy_copy'>;
export type TravelExpenseCopy_copyResponse = ResponseForOperation<'TravelExpenseCopy_copy'>;
export type TravelExpenseCost_deleteArgs = OperationArgs<'TravelExpenseCost_delete'>;
export type TravelExpenseCost_deleteResponse = ResponseForOperation<'TravelExpenseCost_delete'>;
export type TravelExpenseCost_getArgs = OperationArgs<'TravelExpenseCost_get'>;
export type TravelExpenseCost_getResponse = ResponseForOperation<'TravelExpenseCost_get'>;
export type TravelExpenseCost_postArgs = OperationArgs<'TravelExpenseCost_post'>;
export type TravelExpenseCost_postResponse = ResponseForOperation<'TravelExpenseCost_post'>;
export type TravelExpenseCost_putArgs = OperationArgs<'TravelExpenseCost_put'>;
export type TravelExpenseCost_putResponse = ResponseForOperation<'TravelExpenseCost_put'>;
export type TravelExpenseCost_searchArgs = OperationArgs<'TravelExpenseCost_search'>;
export type TravelExpenseCost_searchResponse = ResponseForOperation<'TravelExpenseCost_search'>;
export type TravelExpenseCostCategory_getArgs = OperationArgs<'TravelExpenseCostCategory_get'>;
export type TravelExpenseCostCategory_getResponse = ResponseForOperation<'TravelExpenseCostCategory_get'>;
export type TravelExpenseCostCategory_searchArgs = OperationArgs<'TravelExpenseCostCategory_search'>;
export type TravelExpenseCostCategory_searchResponse = ResponseForOperation<'TravelExpenseCostCategory_search'>;
export type TravelExpenseCostList_putListArgs = OperationArgs<'TravelExpenseCostList_putList'>;
export type TravelExpenseCostList_putListResponse = ResponseForOperation<'TravelExpenseCostList_putList'>;
export type TravelExpenseCostParticipant_deleteArgs = OperationArgs<'TravelExpenseCostParticipant_delete'>;
export type TravelExpenseCostParticipant_deleteResponse = ResponseForOperation<'TravelExpenseCostParticipant_delete'>;
export type TravelExpenseCostParticipant_getArgs = OperationArgs<'TravelExpenseCostParticipant_get'>;
export type TravelExpenseCostParticipant_getResponse = ResponseForOperation<'TravelExpenseCostParticipant_get'>;
export type TravelExpenseCostParticipant_postArgs = OperationArgs<'TravelExpenseCostParticipant_post'>;
export type TravelExpenseCostParticipant_postResponse = ResponseForOperation<'TravelExpenseCostParticipant_post'>;
export type TravelExpenseCostParticipantCostParticipants_getCostParticipantsArgs = OperationArgs<'TravelExpenseCostParticipantCostParticipants_getCostParticipants'>;
export type TravelExpenseCostParticipantCostParticipants_getCostParticipantsResponse = ResponseForOperation<'TravelExpenseCostParticipantCostParticipants_getCostParticipants'>;
export type TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvancedArgs = OperationArgs<'TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvanced'>;
export type TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvancedResponse = ResponseForOperation<'TravelExpenseCostParticipantCreateCostParticipantAdvanced_createCostParticipantAdvanced'>;
export type TravelExpenseCostParticipantList_deleteListArgs = OperationArgs<'TravelExpenseCostParticipantList_deleteList'>;
export type TravelExpenseCostParticipantList_deleteListResponse = ResponseForOperation<'TravelExpenseCostParticipantList_deleteList'>;
export type TravelExpenseCostParticipantList_postListArgs = OperationArgs<'TravelExpenseCostParticipantList_postList'>;
export type TravelExpenseCostParticipantList_postListResponse = ResponseForOperation<'TravelExpenseCostParticipantList_postList'>;
export type TravelExpenseCreateVouchers_createVouchersArgs = OperationArgs<'TravelExpenseCreateVouchers_createVouchers'>;
export type TravelExpenseCreateVouchers_createVouchersResponse = ResponseForOperation<'TravelExpenseCreateVouchers_createVouchers'>;
export type TravelExpenseDeliver_deliverArgs = OperationArgs<'TravelExpenseDeliver_deliver'>;
export type TravelExpenseDeliver_deliverResponse = ResponseForOperation<'TravelExpenseDeliver_deliver'>;
export type TravelExpenseDrivingStop_deleteArgs = OperationArgs<'TravelExpenseDrivingStop_delete'>;
export type TravelExpenseDrivingStop_deleteResponse = ResponseForOperation<'TravelExpenseDrivingStop_delete'>;
export type TravelExpenseDrivingStop_getArgs = OperationArgs<'TravelExpenseDrivingStop_get'>;
export type TravelExpenseDrivingStop_getResponse = ResponseForOperation<'TravelExpenseDrivingStop_get'>;
export type TravelExpenseDrivingStop_postArgs = OperationArgs<'TravelExpenseDrivingStop_post'>;
export type TravelExpenseDrivingStop_postResponse = ResponseForOperation<'TravelExpenseDrivingStop_post'>;
export type TravelExpenseMileageAllowance_deleteArgs = OperationArgs<'TravelExpenseMileageAllowance_delete'>;
export type TravelExpenseMileageAllowance_deleteResponse = ResponseForOperation<'TravelExpenseMileageAllowance_delete'>;
export type TravelExpenseMileageAllowance_getArgs = OperationArgs<'TravelExpenseMileageAllowance_get'>;
export type TravelExpenseMileageAllowance_getResponse = ResponseForOperation<'TravelExpenseMileageAllowance_get'>;
export type TravelExpenseMileageAllowance_postArgs = OperationArgs<'TravelExpenseMileageAllowance_post'>;
export type TravelExpenseMileageAllowance_postResponse = ResponseForOperation<'TravelExpenseMileageAllowance_post'>;
export type TravelExpenseMileageAllowance_putArgs = OperationArgs<'TravelExpenseMileageAllowance_put'>;
export type TravelExpenseMileageAllowance_putResponse = ResponseForOperation<'TravelExpenseMileageAllowance_put'>;
export type TravelExpenseMileageAllowance_searchArgs = OperationArgs<'TravelExpenseMileageAllowance_search'>;
export type TravelExpenseMileageAllowance_searchResponse = ResponseForOperation<'TravelExpenseMileageAllowance_search'>;
export type TravelExpensePassenger_deleteArgs = OperationArgs<'TravelExpensePassenger_delete'>;
export type TravelExpensePassenger_deleteResponse = ResponseForOperation<'TravelExpensePassenger_delete'>;
export type TravelExpensePassenger_getArgs = OperationArgs<'TravelExpensePassenger_get'>;
export type TravelExpensePassenger_getResponse = ResponseForOperation<'TravelExpensePassenger_get'>;
export type TravelExpensePassenger_postArgs = OperationArgs<'TravelExpensePassenger_post'>;
export type TravelExpensePassenger_postResponse = ResponseForOperation<'TravelExpensePassenger_post'>;
export type TravelExpensePassenger_putArgs = OperationArgs<'TravelExpensePassenger_put'>;
export type TravelExpensePassenger_putResponse = ResponseForOperation<'TravelExpensePassenger_put'>;
export type TravelExpensePassenger_searchArgs = OperationArgs<'TravelExpensePassenger_search'>;
export type TravelExpensePassenger_searchResponse = ResponseForOperation<'TravelExpensePassenger_search'>;
export type TravelExpensePassengerList_deleteListArgs = OperationArgs<'TravelExpensePassengerList_deleteList'>;
export type TravelExpensePassengerList_deleteListResponse = ResponseForOperation<'TravelExpensePassengerList_deleteList'>;
export type TravelExpensePassengerList_postListArgs = OperationArgs<'TravelExpensePassengerList_postList'>;
export type TravelExpensePassengerList_postListResponse = ResponseForOperation<'TravelExpensePassengerList_postList'>;
export type TravelExpensePaymentType_getArgs = OperationArgs<'TravelExpensePaymentType_get'>;
export type TravelExpensePaymentType_getResponse = ResponseForOperation<'TravelExpensePaymentType_get'>;
export type TravelExpensePaymentType_searchArgs = OperationArgs<'TravelExpensePaymentType_search'>;
export type TravelExpensePaymentType_searchResponse = ResponseForOperation<'TravelExpensePaymentType_search'>;
export type TravelExpensePerDiemCompensation_deleteArgs = OperationArgs<'TravelExpensePerDiemCompensation_delete'>;
export type TravelExpensePerDiemCompensation_deleteResponse = ResponseForOperation<'TravelExpensePerDiemCompensation_delete'>;
export type TravelExpensePerDiemCompensation_getArgs = OperationArgs<'TravelExpensePerDiemCompensation_get'>;
export type TravelExpensePerDiemCompensation_getResponse = ResponseForOperation<'TravelExpensePerDiemCompensation_get'>;
export type TravelExpensePerDiemCompensation_postArgs = OperationArgs<'TravelExpensePerDiemCompensation_post'>;
export type TravelExpensePerDiemCompensation_postResponse = ResponseForOperation<'TravelExpensePerDiemCompensation_post'>;
export type TravelExpensePerDiemCompensation_putArgs = OperationArgs<'TravelExpensePerDiemCompensation_put'>;
export type TravelExpensePerDiemCompensation_putResponse = ResponseForOperation<'TravelExpensePerDiemCompensation_put'>;
export type TravelExpensePerDiemCompensation_searchArgs = OperationArgs<'TravelExpensePerDiemCompensation_search'>;
export type TravelExpensePerDiemCompensation_searchResponse = ResponseForOperation<'TravelExpensePerDiemCompensation_search'>;
export type TravelExpenseRate_getArgs = OperationArgs<'TravelExpenseRate_get'>;
export type TravelExpenseRate_getResponse = ResponseForOperation<'TravelExpenseRate_get'>;
export type TravelExpenseRate_searchArgs = OperationArgs<'TravelExpenseRate_search'>;
export type TravelExpenseRate_searchResponse = ResponseForOperation<'TravelExpenseRate_search'>;
export type TravelExpenseRateCategory_getArgs = OperationArgs<'TravelExpenseRateCategory_get'>;
export type TravelExpenseRateCategory_getResponse = ResponseForOperation<'TravelExpenseRateCategory_get'>;
export type TravelExpenseRateCategory_searchArgs = OperationArgs<'TravelExpenseRateCategory_search'>;
export type TravelExpenseRateCategory_searchResponse = ResponseForOperation<'TravelExpenseRateCategory_search'>;
export type TravelExpenseRateCategoryGroup_getArgs = OperationArgs<'TravelExpenseRateCategoryGroup_get'>;
export type TravelExpenseRateCategoryGroup_getResponse = ResponseForOperation<'TravelExpenseRateCategoryGroup_get'>;
export type TravelExpenseRateCategoryGroup_searchArgs = OperationArgs<'TravelExpenseRateCategoryGroup_search'>;
export type TravelExpenseRateCategoryGroup_searchResponse = ResponseForOperation<'TravelExpenseRateCategoryGroup_search'>;
export type TravelExpenseSettings_getArgs = OperationArgs<'TravelExpenseSettings_get'>;
export type TravelExpenseSettings_getResponse = ResponseForOperation<'TravelExpenseSettings_get'>;
export type TravelExpenseUnapprove_unapproveArgs = OperationArgs<'TravelExpenseUnapprove_unapprove'>;
export type TravelExpenseUnapprove_unapproveResponse = ResponseForOperation<'TravelExpenseUnapprove_unapprove'>;
export type TravelExpenseUndeliver_undeliverArgs = OperationArgs<'TravelExpenseUndeliver_undeliver'>;
export type TravelExpenseUndeliver_undeliverResponse = ResponseForOperation<'TravelExpenseUndeliver_undeliver'>;
export type TravelExpenseZone_getArgs = OperationArgs<'TravelExpenseZone_get'>;
export type TravelExpenseZone_getResponse = ResponseForOperation<'TravelExpenseZone_get'>;
export type TravelExpenseZone_searchArgs = OperationArgs<'TravelExpenseZone_search'>;
export type TravelExpenseZone_searchResponse = ResponseForOperation<'TravelExpenseZone_search'>;
export type UserLicenseExport_exportArgs = OperationArgs<'UserLicenseExport_export'>;
export type UserLicenseExport_exportResponse = ResponseForOperation<'UserLicenseExport_export'>;
export type VatReturnsComment_queryArgs = OperationArgs<'VatReturnsComment_query'>;
export type VatReturnsComment_queryResponse = ResponseForOperation<'VatReturnsComment_query'>;
export type VatReturnsCommentAll_allArgs = OperationArgs<'VatReturnsCommentAll_all'>;
export type VatReturnsCommentAll_allResponse = ResponseForOperation<'VatReturnsCommentAll_all'>;
export type VatTermSizeSettings_deleteArgs = OperationArgs<'VatTermSizeSettings_delete'>;
export type VatTermSizeSettings_deleteResponse = ResponseForOperation<'VatTermSizeSettings_delete'>;
export type VatTermSizeSettings_getArgs = OperationArgs<'VatTermSizeSettings_get'>;
export type VatTermSizeSettings_getResponse = ResponseForOperation<'VatTermSizeSettings_get'>;
export type VatTermSizeSettings_postArgs = OperationArgs<'VatTermSizeSettings_post'>;
export type VatTermSizeSettings_postResponse = ResponseForOperation<'VatTermSizeSettings_post'>;
export type VatTermSizeSettings_putArgs = OperationArgs<'VatTermSizeSettings_put'>;
export type VatTermSizeSettings_putResponse = ResponseForOperation<'VatTermSizeSettings_put'>;
export type VatTermSizeSettings_queryArgs = OperationArgs<'VatTermSizeSettings_query'>;
export type VatTermSizeSettings_queryResponse = ResponseForOperation<'VatTermSizeSettings_query'>;
export type VoucherApprovalListElement_getArgs = OperationArgs<'VoucherApprovalListElement_get'>;
export type VoucherApprovalListElement_getResponse = ResponseForOperation<'VoucherApprovalListElement_get'>;
export type VoucherInboxEmailAddress_getEmailAddressArgs = OperationArgs<'VoucherInboxEmailAddress_getEmailAddress'>;
export type VoucherInboxEmailAddress_getEmailAddressResponse = ResponseForOperation<'VoucherInboxEmailAddress_getEmailAddress'>;
export type VoucherInboxInboxCount_getInboxCountArgs = OperationArgs<'VoucherInboxInboxCount_getInboxCount'>;
export type VoucherInboxInboxCount_getInboxCountResponse = ResponseForOperation<'VoucherInboxInboxCount_getInboxCount'>;
export type VoucherMessage_postArgs = OperationArgs<'VoucherMessage_post'>;
export type VoucherMessage_postResponse = ResponseForOperation<'VoucherMessage_post'>;
export type VoucherMessage_searchArgs = OperationArgs<'VoucherMessage_search'>;
export type VoucherMessage_searchResponse = ResponseForOperation<'VoucherMessage_search'>;
export type VoucherStatus_getArgs = OperationArgs<'VoucherStatus_get'>;
export type VoucherStatus_getResponse = ResponseForOperation<'VoucherStatus_get'>;
export type VoucherStatus_postArgs = OperationArgs<'VoucherStatus_post'>;
export type VoucherStatus_postResponse = ResponseForOperation<'VoucherStatus_post'>;
export type VoucherStatus_searchArgs = OperationArgs<'VoucherStatus_search'>;
export type VoucherStatus_searchResponse = ResponseForOperation<'VoucherStatus_search'>;
export type YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypesArgs = OperationArgs<'YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypes'>;
export type YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypesResponse = ResponseForOperation<'YearEndEnumTypeBusinessActivityTypes_getBusinessActivityTypes'>;
export type YearEndPenneoCasefiles_createCaseFileArgs = OperationArgs<'YearEndPenneoCasefiles_createCaseFile'>;
export type YearEndPenneoCasefiles_createCaseFileResponse = ResponseForOperation<'YearEndPenneoCasefiles_createCaseFile'>;
export type YearEndPenneoCasefiles_deleteCaseFileArgs = OperationArgs<'YearEndPenneoCasefiles_deleteCaseFile'>;
export type YearEndPenneoCasefiles_deleteCaseFileResponse = ResponseForOperation<'YearEndPenneoCasefiles_deleteCaseFile'>;
export type YearEndPenneoCasefiles_getCaseFilesArgs = OperationArgs<'YearEndPenneoCasefiles_getCaseFiles'>;
export type YearEndPenneoCasefiles_getCaseFilesResponse = ResponseForOperation<'YearEndPenneoCasefiles_getCaseFiles'>;
export type YearEndPenneoCasefilesActivate_activateCaseFileArgs = OperationArgs<'YearEndPenneoCasefilesActivate_activateCaseFile'>;
export type YearEndPenneoCasefilesActivate_activateCaseFileResponse = ResponseForOperation<'YearEndPenneoCasefilesActivate_activateCaseFile'>;
export type YearEndPenneoCasefilesSigners_deleteSignerArgs = OperationArgs<'YearEndPenneoCasefilesSigners_deleteSigner'>;
export type YearEndPenneoCasefilesSigners_deleteSignerResponse = ResponseForOperation<'YearEndPenneoCasefilesSigners_deleteSigner'>;
export type YearEndPenneoCasefilesSignersReactivate_reactivateSignerArgs = OperationArgs<'YearEndPenneoCasefilesSignersReactivate_reactivateSigner'>;
export type YearEndPenneoCasefilesSignersReactivate_reactivateSignerResponse = ResponseForOperation<'YearEndPenneoCasefilesSignersReactivate_reactivateSigner'>;
export type YearEndPenneoCasefilesSignersResend_resendSignLinkArgs = OperationArgs<'YearEndPenneoCasefilesSignersResend_resendSignLink'>;
export type YearEndPenneoCasefilesSignersResend_resendSignLinkResponse = ResponseForOperation<'YearEndPenneoCasefilesSignersResend_resendSignLink'>;
export type YearEndPenneoDocuments_createDocumentArgs = OperationArgs<'YearEndPenneoDocuments_createDocument'>;
export type YearEndPenneoDocuments_createDocumentResponse = ResponseForOperation<'YearEndPenneoDocuments_createDocument'>;
export type YearEndPenneoDocuments_deleteDocumentArgs = OperationArgs<'YearEndPenneoDocuments_deleteDocument'>;
export type YearEndPenneoDocuments_deleteDocumentResponse = ResponseForOperation<'YearEndPenneoDocuments_deleteDocument'>;
export type YearEndPenneoDocuments_updateDocumentArgs = OperationArgs<'YearEndPenneoDocuments_updateDocument'>;
export type YearEndPenneoDocuments_updateDocumentResponse = ResponseForOperation<'YearEndPenneoDocuments_updateDocument'>;
export type YearEndPenneoDocumentsDownload_downloadDocumentArgs = OperationArgs<'YearEndPenneoDocumentsDownload_downloadDocument'>;
export type YearEndPenneoDocumentsDownload_downloadDocumentResponse = ResponseForOperation<'YearEndPenneoDocumentsDownload_downloadDocument'>;
export type YearEndPenneoRecipients_deleteRecipientsArgs = OperationArgs<'YearEndPenneoRecipients_deleteRecipients'>;
export type YearEndPenneoRecipients_deleteRecipientsResponse = ResponseForOperation<'YearEndPenneoRecipients_deleteRecipients'>;
export type YearEndPenneoRecipients_getRecipientsArgs = OperationArgs<'YearEndPenneoRecipients_getRecipients'>;
export type YearEndPenneoRecipients_getRecipientsResponse = ResponseForOperation<'YearEndPenneoRecipients_getRecipients'>;
export type YearEndPenneoRecipients_postRecipientsArgs = OperationArgs<'YearEndPenneoRecipients_postRecipients'>;
export type YearEndPenneoRecipients_postRecipientsResponse = ResponseForOperation<'YearEndPenneoRecipients_postRecipients'>;
export type YearEndPenneoSession_authenticateAndListCaseFilesArgs = OperationArgs<'YearEndPenneoSession_authenticateAndListCaseFiles'>;
export type YearEndPenneoSession_authenticateAndListCaseFilesResponse = ResponseForOperation<'YearEndPenneoSession_authenticateAndListCaseFiles'>;
export type YearEndPenneoSignature_lines_createAndLinkSignatureLineArgs = OperationArgs<'YearEndPenneoSignature_lines_createAndLinkSignatureLine'>;
export type YearEndPenneoSignature_lines_createAndLinkSignatureLineResponse = ResponseForOperation<'YearEndPenneoSignature_lines_createAndLinkSignatureLine'>;
export type YearEndPenneoSync_syncArgs = OperationArgs<'YearEndPenneoSync_sync'>;
export type YearEndPenneoSync_syncResponse = ResponseForOperation<'YearEndPenneoSync_sync'>;
export type YearEndPenneoUpdateCompletedStatus_updateCompletedStatusArgs = OperationArgs<'YearEndPenneoUpdateCompletedStatus_updateCompletedStatus'>;
export type YearEndPenneoUpdateCompletedStatus_updateCompletedStatusResponse = ResponseForOperation<'YearEndPenneoUpdateCompletedStatus_updateCompletedStatus'>;
export type YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024Args = OperationArgs<'YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024'>;
export type YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024Response = ResponseForOperation<'YearEndResearchAndDevelopment2024_deleteResearchAndDevelopment2024'>;
export type YearEndResearchAndDevelopment2024_getArgs = OperationArgs<'YearEndResearchAndDevelopment2024_get'>;
export type YearEndResearchAndDevelopment2024_getResponse = ResponseForOperation<'YearEndResearchAndDevelopment2024_get'>;
export type YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024Args = OperationArgs<'YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024'>;
export type YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024Response = ResponseForOperation<'YearEndResearchAndDevelopment2024_postResearchAndDevelopment2024'>;
export type YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024Args = OperationArgs<'YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024'>;
export type YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024Response = ResponseForOperation<'YearEndResearchAndDevelopment2024_putResearchAndDevelopment2024'>;

