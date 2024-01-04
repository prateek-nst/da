/* eslint-disable no-irregular-whitespace */
/*

RO10003  SBM  true  SHECOM branch manager
RO10004  RH  true  SHECOM Regional Head
RO10005  SH  true  State Head
RO10008  CPVE  true  Contact Point Verification Executive
RO10009  TVE  true  Tele-Verification Executive
RO10007  SA  true  SheCom Admin
RO10002  RM  true  Relationship Manager
RO10010  CSM  true  NST Customer Success Manager
RO10011  NBU  true  NST Business User
RO10006  SBU  true  SHECOM Business User
RO10012  NA  true  NST Admin
RO10013  FBBM  true  Federal Bank Branch Manager
RO10014  FBBU  true  Federal Bank Business User
RO10015  FBA  true  Federal Bank Admin
 * 
 */

export const roleName =
	{
		SBM: { fullName: 'SHECOM branch manager', landingPage: 'page1' },
		RH: { fullName: 'SHECOM Regional Head', landingPage: 'page2' },
		SH: { fullName: 'State Head', landingPage: 'page3' },
		CPVE: { fullName: 'SHECOM branch manager', landingPage: 'page3' },
		FO: { fullName: 'Regional Officer', landingPage: 'page3' },
	};

export const roles = {
	DepositCollect: ['SBM', 'RH', 'SH', 'CPVE'],
	LoanApproval: ['SBM', 'FO'],
	Reports: ['CPVE'],
	Monitor: ['CPVE'],
};
